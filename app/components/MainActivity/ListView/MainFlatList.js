import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


import Database from '../Utils/Database'

import { MainItem } from './ListItems/MainItem';

// This variable is used to avoid searching again when clicking the hamburger menu after a search
const lastSearch = '';

var FLOATING_OFFSET = 0;


export default class MainFlatList extends Component {
    constructor() {
        super();
        this.state = {
            mainDataSource: [],
            resultsArray: [],
            indexSet: 0,
            searchTerm: ''
        };

        var db = Database.getConnection();

        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM c46', [], (tx, results) => {
                console.log("MainFlatList query completed");

                // Get rows with Web SQL Database spec compliance.
                var data = [];

                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    data.push(results.rows.item(i));
                }

                console.log("mainLen: " + data.length);
                this.setState({ mainDataSource: data });

            });
        });
    }

    componentWillReceiveProps(nextProps) {

        console.log("PROPS IN MAINFLATLIST!");

        // Set index (from Header or Search item selection)
        if (nextProps.mainIndexSet != '') {
            console.log("PROPS are MainIndexSet!");
            console.log("it is:" + nextProps.mainIndexSet);
            this.state.indexSet = nextProps.mainIndexSet;
            this.flatListRef.scrollToIndex({ animated: false, index: nextProps.mainIndexSet });
        }
    }

    componentDidMount() {


    }

    render() {
        return (
            <FlatList
                data={this.state.mainDataSource}
                ref={(ref) => { this.flatListRef = ref; }}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
                // initialNumToRender={1000}
                getItemLayout={this._getItemLayout}
                removeClippedSubviews={false} />
        );
    }

    // _getItemLayout = (data, index) => (
    //     { 
    //         length: 50, 
    //         offset: 50 * index, 
    //         index,
    //     }
    // )

    _renderItem = ({ item }) => {
        return (
            <MainItem
                nextItem={item} />
        )
    };


}


const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MainFlatList', () => MainFlatList);
