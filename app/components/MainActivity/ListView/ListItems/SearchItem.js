import React, { PureComponent } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';




export default class SearchItem extends PureComponent {
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
        if (item.section != "LongTitle") {
            return (
                <TouchableHighlight onPress={() => this.handlePress(item)}>
                    <View style={styles.searchItem}>
                        <View style={styles.content}>
                            <View style={styles.itemLocation}>
                                <Text style={styles.inSection}>In Section:</Text>
                                <Text style={styles.pinpoint}>{item.section}</Text>
                            </View>
                            <View style={styles.vertBreak}></View>
                            <View style={styles.fullTextView}>
                                <Text>{item.fulltext}</Text>
                            </View>
                        </View>
                        <View style={styles.itemBreak}></View>
                    </View>
                </TouchableHighlight>
            )
        } else {
            return (
                <View></View>
            )
        }
    }



}

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: '#A9A9A9',
    },
    searchItem: {
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        flexDirection: 'row'
    },
    itemLocation: {
        backgroundColor: '#90EE90',
        flexDirection: 'column'
    },
    fullTextView: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'column'
    },
    inSection: {
        fontSize: 13,
        padding: 1,
        color: '#2e3f76',
        fontStyle: 'italic'
    },
    pinpoint: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 1,
    },
    fullText: {
        fontSize: 14
    },
    itemBreak: {
        height: 2
    },
    vertBreak: {
        width: 2
    },
});

AppRegistry.registerComponent('SearchItem', () => SearchItem);