import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, StyleSheet} from 'react-native';


// This variable is used to avoid searching again when clicking the hamburger menu after a search
const lastSearch = '';

let SQLite = require('react-native-sqlite-storage');

const renderItem = ({item}) => (<Text>{item.section}</Text>); 

export default class SearchFlatList extends Component{
    constructor(){
        super();
        this.state = {
            mainDataSource: [],
            resultsArray: [],
            searchTerm:  ''
        };

        let db = SQLite.openDatabase({name: 'c46.db', createFromLocation : "~c46.db", location: 'Library'}, this.openCB, this.errorCB);
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

    }

    componentDidMount(){


    }


    render(){
        return(
            <FlatList
                data={this.state.mainDataSource}
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

AppRegistry.registerComponent('MainFlatList', () => MainFlatList);
