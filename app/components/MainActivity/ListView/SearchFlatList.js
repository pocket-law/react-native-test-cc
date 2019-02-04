import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

import Database from '../Utils/Database'


// This variable is used to avoid searching again when clicking the hamburger menu after a search
// 2019 ??
const lastSearch = '';


export default class SearchFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchDataSource: [],
            resultsArray: [],
            searchTerm: '',
            searchItemIndex: 0
        };

    }

    searchSQL(searchTerm) {
        var db = Database.getConnection();

        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM c46 WHERE fulltext LIKE '%" + searchTerm + "%'", [], (tx, results) => {
                console.log("SearchFlatList query completed");

                // Get rows with Web SQL Database spec compliance.
                var data = [];

                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    data.push(results.rows.item(i));
                }

                console.log("searchLen: " + data.length);
                this.setState({ searchDataSource: data });

            });
        });
    }

    componentWillReceiveProps(nextProps) {

        console.log("SearchFlatList nextProps...");

        if (nextProps.searchTerm != '') {
            console.log("PROPS are searchTerm! it is: " + nextProps.searchTerm);
            // this.setState({ searchTerm: nextProps.searchTerm });
            this.searchSQL(nextProps.searchTerm);
        }
    }

    handlePress(item) {
        console.log("SearchList handlePress: " + item._id);

        // Subtract 1 to account for 0-index but no 0-id
        this.state.searchItemIndex = item._id - 1;
        this.props.setMainIndex(item._id - 1);
    }

    componentDidMount() {


    }


    render() {
        return (
            <FlatList
                style={styles.flatList}
                data={this.state.searchDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }

    _renderItem = ({ item }) => {
        if (item.section != "LongTitle") {
            return (
                <TouchableHighlight onPress={() => this.handlePress(item)}>
                    <View style={styles.searchItem}>
                        <View style={styles.content}>
                            <View style={styles.itemLocation}>
                                <Text style={styles.inSection}>In Section:</Text>
                                <Text style={styles.pinpoint}>{item.section}</Text>
                            </View>
                            <View style={styles.vertBreak}></View>
                            <View style={styles.fullTextView}>
                                <Text>{item.fulltext}</Text>
                            </View>
                        </View>
                        <View style={styles.itemBreak}></View>
                    </View>
                </TouchableHighlight>
            )
        } else {
            return (
                <View></View>
            )
        }
    }
}


const styles = StyleSheet.create({
    flatList: {
        backgroundColor: '#A9A9A9',
    },
    searchItem: {
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    itemLocation: {
        backgroundColor: '#90EE90',
        flexDirection: 'column'
    },
    fullTextView: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'column'
    },
    inSection: {
        fontSize: 13,
        padding: 1,
        color: '#2e3f76',
        fontStyle: 'italic'
    },
    pinpoint: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 1,
    },
    fullText: {
        fontSize: 14
    },
    itemBreak: {
        height: 2
    },
    vertBreak: {
        width: 2
    },
});

AppRegistry.registerComponent('MainFlatList', () => MainFlatList);
