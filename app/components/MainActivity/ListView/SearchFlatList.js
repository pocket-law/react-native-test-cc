import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet } from 'react-native';

import Database from '../Database/Database'


// This variable is used to avoid searching again when clicking the hamburger menu after a search
// 2019 ??
const lastSearch = '';


export default class SearchFlatList extends Component {
    constructor() {
        super();
        this.state = {
            searchDataSource: [],
            resultsArray: [],
            searchTerm: ''
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

    componentDidMount() {


    }


    render() {
        return (
            <FlatList
                data={this.state.searchDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.searchItem}>
                <Text style={styles.pinpoint}>{item.section}</Text>
                <Text>{item.fulltext}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    searchItem: {
        backgroundColor: '#990101',
        flex: 1, 
        flexDirection: 'row'
    },
    pinpoint: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText: {
        fontSize: 14,
    },

});

AppRegistry.registerComponent('MainFlatList', () => MainFlatList);
