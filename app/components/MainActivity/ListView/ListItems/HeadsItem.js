import React, { PureComponent } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';




export default class HeadsItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handlePress(item) {
        // send item reference to HeadsFlatList, then MainActivity to set MainFlatList
        this.props.handlePress(item);
    }


    render() {
        const item = this.props.nextItem;
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

AppRegistry.registerComponent('HeadsItem', () => HeadsItem);