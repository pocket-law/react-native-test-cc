import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import Tts from 'react-native-tts';

import Database from '../Database/Database'

// This variable is used to avoid searching again when clicking the hamburger menu after a search
const lastSearch = '';



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

    readText(textToRead) {
        console.log("TextToRead: " + textToRead);

        // Set language (ideally not done every time in a real app)
        Tts.setDefaultLanguage('en-US');

        // Check TTS init status
        // Stop any previously playing TTS
        // Play the thing
        Tts.getInitStatus().then(() => {
            console.log("TTS Initialized");
            Tts.stop();
            Tts.speak(textToRead);
        }, (err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
            } else {
                console.log("TTS ERROR: " + err.code + ", " + err.message);
            }
        }).catch(function (err) {
            console.log('There has been a problem with your fetch operation: ' + err.message);
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
                keyExtractor={(item, index) => index.toString()} />
        );
    }

    _renderItem = ({ item }) => {
        switch (item.type) {
            case '0':
                // console.log("Case 0");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_0}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '1':
                // console.log("Case 1");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_1}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '2':
                // console.log("Case 2");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_2}>{item.section}</Text>
                                <Text style={styles.fullText_2}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '3':
                // console.log("Case 3");
                
                var subNumber = "";

                if (item.pinpoint == "(1)") {
                    subNumber = "" + item.section + item.pinpoint;
                } else {
                    subNumber = item.pinpoint;
                }

                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_3}>{subNumber}</Text>
                                <Text style={styles.fullText_3}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '4':
                // console.log("Case 4");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_4}>{item.pinpoint}</Text>
                                <Text style={styles.fullText_4}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '5':
                // console.log("Case 5");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_5}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '6':
                // console.log("Case 6");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_6}>{item.pinpoint}</Text>
                                <Text style={styles.fullText_6}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '7':
                // console.log("Case 7");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_7}>{item.pinpoint}</Text>
                                <Text style={styles.fullText_7}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '8':
                // console.log("Case 8");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_8}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '9':
                // console.log("Case 9");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_9}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '10':
                // console.log("Case 10");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_10}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '11':
                // console.log("Case 11");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_11}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '12':
                // console.log("Case 12");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_12}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '13':
                // console.log("Case 13");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_13}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '14':
                // console.log("Case 14");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_14}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '15':
                console.log("Case 15");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_15}>{item.pinpoint}</Text>
                                <Text style={styles.fullText_15}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '16':
                console.log("Case 16");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_16}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '17':
                console.log("Case 17");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_17}>{item.pinpoint}</Text>
                                <Text style={styles.fullText_17}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '18':
                console.log("Case 18");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_18}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '19':
                console.log("Case 19");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.pinpoint_4}>{item.pinpoint}</Text>
                                <Text style={styles.fullText_19}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '20':
                console.log("Case 20");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_20}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                case '21':
                console.log("Case 21");
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text style={styles.fullText_21}>{item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
                                
            default:
                return (
                    <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
                        <View>
                            <View>
                                <Text>{item.type} {item.fulltext}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
        }
    };

}


const styles = StyleSheet.create({
    fullText_0: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    fullText_1: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fullText_2: {
        fontSize: 14,
    },
    pinpoint_2: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_3: {
        fontSize: 14,
    },
    pinpoint_3: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_4: {
        fontSize: 14,
    },
    pinpoint_4: {
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_5: {
        fontSize: 14,
    },
    fullText_6: {
        fontSize: 14,
    },
    pinpoint_6: {
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_7: {
        fontSize: 14,
    },
    pinpoint_7: {
        paddingLeft: 44,
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_8: {
        fontSize: 14,
    },
    pinpoint_8: {
        paddingLeft: 44,
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_9: {
        fontSize: 10,
    },
    fullText_10: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    fullText_11: {
        fontSize: 14,
    },
    fullText_12: {
        paddingLeft: 16,
        fontSize: 14,
    },
    fullText_13: {
        paddingLeft: 20,
        fontSize: 14,
    },
    fullText_14: {
        fontSize: 14,
    },
    fullText_15: {
        fontSize: 14,
    },
    pinpoint_15: {
        paddingLeft: 68,
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_16: {
        fontSize: 14,
    },
    fullText_17: {
        fontSize: 14,
    },
    pinpoint_17: {
        paddingLeft: 92,
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_18: {
        fontSize: 14,
    },
    fullText_19: {
        fontSize: 14,
    },
    pinpoint_17: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    fullText_20: {
        fontSize: 14,
    },
    fullText_21: {
        fontSize: 14,
    }
});

AppRegistry.registerComponent('MainFlatList', () => MainFlatList);
