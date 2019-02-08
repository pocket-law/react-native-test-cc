/***
 Use this component inside your React Native Application.
 A scrollable list with different item type
 */
import React, { Component } from "react";
import { View, Text, Dimensions, AppRegistry } from "react-native";
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";

import Database from '../Utils/Database'
import MainItem from "./ListItems/MainItem";

const ViewTypes = {
    FULL: 0,
    HALF_LEFT: 1,
    HALF_RIGHT: 2
};

let containerCount = 0;

let screenWidth = 0;

class CellContainer extends Component {
    constructor(args) {
        super(args);
        this._containerId = containerCount++;
    }
    render() {
        return <View {...this.props}>{this.props.children}<Text>Cell Id: {this._containerId}</Text></View>;
    }
}

/***
 * To test out just copy this component and render in you root component
 */
export default class RecycleTestComponent extends Component {
    constructor(args) {
        super(args);
        this.state = {
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

                console.log("RTC mainLen: " + data.length);

                this.setState({
                    dataProvider: dataProvider.cloneWithRows(data)
                })
            });
        });

        let { width } = Dimensions.get("window");

        screenWidth = width - 16;

        //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
        let dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });

        //Create the layout provider
        //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
        //Second: Given a type and object set the height and width for that type on given object
        //If you need data based check you can access your data provider here
        //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
        //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file
        this._layoutProvider = new LayoutProvider(
            index => {
                return ViewTypes.FULL;
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.FULL:
                        dim.width = width;
                        dim.height = 40;
                        break;
                    default:
                        null;
                }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        //Since component should always render once data has changed, make data provider part of the state
        //Initialize state with blank array
        this.state = {
            dataProvider: dataProvider.cloneWithRows([])
        };
    }

    _generateArray(n) {
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }
        return arr;
    }

    //Given type and data return the view component
    _rowRenderer(type, data) {
        //You can return any view here, CellContainer has no special significance
        return (
            <MainItem
                nextItem={data} 
                screenWidth={screenWidth}/>
        )
    }

    render() {
        return <RecyclerListView layoutProvider={this._layoutProvider} 
            dataProvider={this.state.dataProvider} 
            rowRenderer={this._rowRenderer} 
            forceNonDeterministicRendering={true}/>;
    }
}


AppRegistry.registerComponent('RecycleTestComponent', () => RecycleTestComponent);