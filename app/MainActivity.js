import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Keyboard, BackHandler } from 'react-native';

import MainFlatList from './components/MainActivity/ListView/MainFlatList';
import HeadsFlatList from './components/MainActivity/ListView/HeadsFlatList';
import SearchFlatList from './components/MainActivity/ListView/SearchFlatList';
import TitleBar from './components/MainActivity/TitleBar/TitleBar';

export default class MainActivity extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: 'full-list', // 'full-list', 'headers', 'search'
            searchTerm: '',
            mainIndexSet: ''
        };
    }

    handleListView(isVisible) {
        this.state.mainIndexSet = ''

        if (isVisible == 'headers') {
            this.setState({ isVisible: 'headers' });
        } else if (isVisible == 'full-list') {
            this.setState({ isVisible: 'full-list' });
        } else if (isVisible == 'search') {
            this.setState({ isVisible: 'search' });
        }
    }

    handleSearch(searchTerm) {
        this.setState({ searchTerm: searchTerm });
        this.setState({ mainIndexSet: '' });
        this.setState({ isVisible: 'full-list' });
        Keyboard.dismiss();
        console.log("MainActivity search: " + searchTerm);
    }

    setMainIndex(setIndex) {
        this.setState({ mainIndexSet: setIndex });
        this.setState({ searchTerm: '' });
        this.setState({ isVisible: 'full-list' });
        console.log("Main setIndex: " + setIndex);
    }

    componentDidMount() {
        console.log("Main Activity Component Mounted" + this.state.isVisible);
        BackHandler.addEventListener('hardwareBackPress', this.handleBack.bind(this));
    }

    componentWillUnmount() {
        //Forgetting to remove the listener will cause pop executes multiple times
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack.bind(this));
    }

    handleBack() {
        if (this.state.isVisible != 'full-list') {
            this.setState({ isVisible: 'full-list' });
            return true; //avoid closing the app
        } else if (this.state.searchTerm != '') {
            this.handleSearch('');
            return true; //avoid closing the app
        } else if (this.state.mainIndexSet != '') {
            this.state.mainIndexSet = '';
            this.setState({ isVisible: 'headers' });
            return true; //avoid closing the app
        }

        return false; //close the app
    }

    //RENDER RENDER
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <TitleBar
                        changeListView={this.handleListView.bind(this)}
                        isVisible={this.state.isVisible}
                        searchTerm={this.state.searchTerm}
                        searchFor={this.handleSearch.bind(this)} />
                </View>
                <View style={styles.bodyView}>
                    {this.state.isVisible == 'full-list' ?
                        <View>
                            <MainFlatList
                                mainIndexSet={this.state.mainIndexSet}
                                searchTerm={this.state.searchTerm} />
                        </View>
                        :
                        <View style={styles.noHeight}>
                            <MainFlatList
                                mainIndexSet={this.state.mainIndexSet}
                                searchTerm={this.state.searchTerm} />
                        </View>
                    }
                    {this.state.isVisible == 'headers' ?
                        <View>
                            <HeadsFlatList
                                setMainFlatList={this.setMainIndex.bind(this)} />
                        </View>
                        :
                        <View style={styles.noHeight}>
                            <HeadsFlatList
                                setMainFlatList={this.setMainIndex.bind(this)} />
                        </View>
                    }
                    {this.state.isVisible == 'search' ?
                        <View>
                            <SearchFlatList
                                changeCategory={this.setMainIndex.bind(this)} />
                        </View>
                        :
                        <View style={styles.noHeight}>
                            <SearchFlatList
                                changeCategory={this.setMainIndex.bind(this)} />
                        </View>
                    }
                </View>
                <View style={styles.footer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    bodyView: {
        flex: 1
    },

    noHeight: {
        height: 0
    },

    titleBar: {

    },

    footer: {
        height: 40,
        backgroundColor: '#3B5198'
    }

});

AppRegistry.registerComponent('MainActivity', () => MainActivity);
