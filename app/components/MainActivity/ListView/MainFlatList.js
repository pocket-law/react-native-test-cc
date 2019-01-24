import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, StyleSheet} from 'react-native';


var jsonString = '';

const mDictJson = require('./json/dict.json');

var mStatute = require('./html/test.html');

// This variable is used to avoid searching again when clicking the hamburger menu after a search
// 2019 -- ??
const lastSearch = '';

var DomParser = require('react-native-html-parser').DOMParser;

let SQLite = require('react-native-sqlite-storage');



const renderItem=({item}) => (<Text>{item.term}</Text>); 

export default class MainListView extends Component{
    constructor(){
        super();
        this.state = {
            termDataSource: [],
            resultsArray: [],
            searchTerm:  ''
        };

        let db = SQLite.openDatabase({name: 'c46.db', createFromLocation : "~c46.db", location: 'Library'}, this.openCB, this.errorCB);
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM c46', [], (tx, results) => {
                console.log("Query completed");
      
                // Get rows with Web SQL Database spec compliance.
      
                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                  let row = results.rows.item(i);
                  console.log(`Record: ${row.fulltext}`);
                  this.setState({record: row});
                }
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

    }

    componentDidMount(){
        this.getInternalJson();

    }

    // TODO: remove this json jazz // use SQLite database
    getInternalJson(){
        this.setState({
            termDataSource: mDictJson.terms
        });

        jsonString = JSON.stringify(mDictJson);
    }



    render(){
        return(
            <FlatList
                data={this.state.termDataSource}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()} 
                />
        );
    }
}


const styles = StyleSheet.create({
    listView: {

    }
});

AppRegistry.registerComponent('MainListView', () => MainListView);
