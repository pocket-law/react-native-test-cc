import React, { Component } from 'react';
import { AppRegistry, Text, View, FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';


import Database from '../Utils/Database'

import MainItem from './ListItems/MainItem';

import DummyMainItem from './ListItems/DummyMainItem';

// This variable is used to avoid searching again when clicking the hamburger menu after a search
const lastSearch = '';

var ITEM_HEIGHTS_LIST = [];
var FLOATING_OFFSET_LIST = [];


export default class MainFlatList extends Component {
    constructor() {
        super();
        this.state = {
            mainDataSource: [],
            resultsArray: [],
            indexSet: 0,
            searchTerm: '',
            viewHeightsReady: 0, // set to 1 after list of heights is returned from DummyMainItem
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

        // Set index (from Header or selected Search result)
        if (nextProps.mainIndexSet != '') {
            console.log("PROPS in MainFlatList are MainIndexSet: " + nextProps.mainIndexSet);
            this.state.indexSet = nextProps.mainIndexSet;
            this.flatListRef.scrollToIndex({ animated: false, index: nextProps.mainIndexSet });
        }
    }

    recieveDimensionsList(dimensionsList) {
        console.log("MainFlatList dimensions list length: " + dimensionsList.length)

        ITEM_HEIGHTS_LIST = dimensionsList;

        for (i = 0; i < dimensionsList.length; i++) {
            if (i > 0) {
                FLOATING_OFFSET_LIST.push(FLOATING_OFFSET_LIST[i-1] + dimensionsList[i])
            } else {
                FLOATING_OFFSET_LIST.push(0)
            }
        }

        this.setState({ viewHeightsReady: 1 });

    }


    render() {
        if (this.state.viewHeightsReady == 0) {
            return (
                <DummyMainItem
                    codeData={this.state.mainDataSource}
                    sendDimensionsList={this.recieveDimensionsList.bind(this)} />
            )
        } else {
            return (
                <FlatList
                    data={this.state.mainDataSource}
                    ref={(ref) => { this.flatListRef = ref; }}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    initialNumToRender={30}
                    getItemLayout={this._getItemLayout}
                    extraData={this.props}
                    removeClippedSubviews={false} />
            );
        }
    }

    _getItemLayout = (data, index) => (
        {
            length: ITEM_HEIGHTS_LIST[index],
            offset: FLOATING_OFFSET_LIST[index],
            index,
        }
    )

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
