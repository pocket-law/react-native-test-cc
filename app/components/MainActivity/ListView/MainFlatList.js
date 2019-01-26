import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import Tts from 'react-native-tts';

// This variable is used to avoid searching again when clicking the hamburger menu after a search
const lastSearch = '';

let SQLite = require('react-native-sqlite-storage');




export default class MainFlatList extends Component {
    constructor() {
        super();
        this.state = {
            mainDataSource: [],
            resultsArray: [],
            indexSet: 0,
            searchTerm: ''
        };

        let db = SQLite.openDatabase({ name: 'c46.db', createFromLocation: "~c46.db", location: 'Library' }, this.openCB, this.errorCB);
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

    errorCB(err) {
        console.log("SQL Error: " + err);
    }

    successCB() {
        console.log("SQL executed fine");
    }

    openCB() {
        console.log("Database OPENED");
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
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()} />
        );
    }

    renderItem = ({ item }) => (
        <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
            <View>
                <View>
                    <Text>{item.fulltext}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );


    readText(textToRead) {
        console.log("TextToRead: " + textToRead);

        // Set language (ideally not done every time in a real app)
        Tts.setDefaultLanguage('en-US');

        // Check TTS init status
        // Stop any previously playing TTS
        // Play the thing
        Tts.getInitStatus().then(() => {
            Tts.stop();
            Tts.speak(textToRead);
        });
    }


}


const styles = StyleSheet.create({
    listView: {

    }
});

AppRegistry.registerComponent('MainFlatList', () => MainFlatList);
