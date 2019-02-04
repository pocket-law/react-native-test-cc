import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

import Database from '../Utils/Database'


export default class HeadsFlatList extends Component {
    constructor(props) {
        super(props);
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
        console.log("HeadsList handlePress: " + item._id);

        // Subtract 1 to account for 0-index but no 0-id
        this.state.headerIndex = item._id - 1;
        this.props.setMainIndex(item._id - 1);
    }

    _renderItem = ({ item }) => {
        switch (item.pinpoint) {
            case 'level1':
                // console.log("Case 0");
                return (
                    <TouchableHighlight onPress={() => this.handlePress(item)}>
                        <View style={styles.row1}>
                            <View>
                                <Text style={styles.categoryText}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );
            case 'level2':
                // console.log("Case 1");
                return (
                    <TouchableHighlight onPress={() => this.handlePress(item)}>
                        <View style={styles.row2}>
                            <View>
                                <Text style={styles.categoryText}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );
            case 'level3':
                // console.log("Case 0");
                return (
                    <TouchableHighlight onPress={() => this.handlePress(item)}>
                        <View style={styles.row3}>
                            <View>
                                <Text style={styles.categoryText}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );
            case 'level4':
                // console.log("Case 1");
                return (
                    <TouchableHighlight onPress={() => this.handlePress(item)}>
                        <View style={styles.row4}>
                            <View>
                                <Text style={styles.categoryText}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );
            default:
                return (
                    <TouchableHighlight onPress={() => this.handlePress(item)}>
                        <View style={styles.row1}>
                            <View>
                                <Text style={styles.categoryText}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                );
        }
    };


    render() {
        return (
            <FlatList
                data={this.state.headsDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index.toString()} />
        );
    }
}


const styles = StyleSheet.create({
    row1: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#14243d',
        marginBottom: 2
    },   
    row2: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#294572',
        marginBottom: 2
    },  
    row3: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#435b82',
        marginBottom: 2
    }, 
    row4: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#12FFFFFF',
        marginBottom: 2
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
