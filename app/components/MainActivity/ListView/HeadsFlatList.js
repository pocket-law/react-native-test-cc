import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

import Database from '../Database/Database'


export default class HeadsFlatList extends Component {
    constructor() {
        super();
        this.state = {
            headsDataSource: [],
            headerIndex: ''
        };

        var db = Database.getConnection();
        
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM c46 WHERE type = 0', [], (tx, results) => {
                console.log("Headers query completed");

                // Get rows with Web SQL Database spec compliance.
                var data = [];

                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    data.push(results.rows.item(i));
                }

                console.log("headersLen: " + data.length);
                this.setState({ headsDataSource: data });

            });
        });

    }


    componentDidMount() {

    }

    handlePress(item) {
        console.log("handlePress: " + item._id);

        // Subtract 1 to account for 0-index but no 0-id
        this.state.headerIndex = item._id - 1;
        this.props.setMainFlatList(item._id - 1);
    }


    _renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => this.handlePress(item)}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.categoryText}>{item.fulltext}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );


    render() {
        return (
            <FlatList
                data={this.state.headsDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}


const styles = StyleSheet.create({
    listView: {

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#2e3f76',
        marginBottom: 3
    },

    categoryText: {
        flex: 1,
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold'
    }

});

AppRegistry.registerComponent('HeadsFlatList', () => HeadsFlatList);
