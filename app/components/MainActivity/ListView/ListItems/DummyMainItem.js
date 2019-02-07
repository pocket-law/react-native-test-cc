import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const heightsList = [];

export default class DummyMainItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codeData: null,
            currentItem: -1,
        };
    }

    componentWillReceiveProps(nextProps) {
        // Get data from MainFlatList
        if (nextProps.codeData != '') {
            console.log("PROPS in DummyMainItem are codeData of length: " + nextProps.codeData.length);
            this.setState({ codeData: nextProps.codeData });
        }
    }


    getItemDimensions(layoutEvent) {
        const { x, y, width, height } = layoutEvent;
        curItem = this.state.currentItem;
        console.log("getItemDimensions #" + curItem + " (width, height): (" + width + ", " + height + ")");

        if (curItem > -1) {
            heightsList.push(height);
        }

        if (this.state.codeData != null && curItem < this.state.codeData.length - 1) {
            this.setState({ currentItem: curItem + 1 });
        } else if (curItem == -1) {
            this.setState({ currentItem: curItem + 1 });
        } else if (this.state.codeData != null && curItem == this.state.codeData.length - 1 && curItem != -1) {
            console.log("DummyMainItem heightsList.length: " + heightsList.length);
            this.sendDimensionsList();
        }
    }

    sendDimensionsList() {
        this.props.sendDimensionsList(heightsList);
    }

    render() {

        if (this.state.codeData != null && this.state.currentItem > -1) {

                var item = this.state.codeData[this.state.currentItem];


                console.log("Dummy Rendering item #" + this.state.currentItem);
                console.log(" type: " + item.type);

                switch (item.type) {
                    case '0':
                        console.log("Dummy Case 0 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View>
                                        <Text style={styles.fullText_0}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );

                    case '1':
                        console.log("Dummy Case 1 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View>
                                        <Text style={styles.fullText_1}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '2':
                        console.log("Dummy Case 2 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_2}>{item.section}</Text>
                                        <Text style={styles.fullText_2}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '3':
                        console.log("Dummy Case 3 FULLTEXT: " + item.fulltext);

                        var subNumber = "";

                        if (item.pinpoint == "(1)") {
                            subNumber = "" + item.section + item.pinpoint;
                        } else {
                            subNumber = item.pinpoint;
                        }

                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_3}>{subNumber}</Text>
                                        <Text style={styles.fullText_3}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '4':
                        console.log("Dummy Case 4 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_4}>{item.pinpoint}</Text>
                                        <Text style={styles.fullText_4}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '5':
                        console.log("Dummy Case 5 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_5}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '6':
                        console.log("Dummy Case 6 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_6}>{item.pinpoint}</Text>
                                        <Text style={styles.fullText_6}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '7':
                        console.log("Dummy Case 7 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_7}>{item.pinpoint}</Text>
                                        <Text style={styles.fullText_7}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '8':
                        console.log("Dummy Case 8 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_8}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '9':
                        console.log("Dummy Case 9 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_9}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '10':
                        console.log("Dummy Case 10 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_10}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '11':
                        console.log("Dummy Case 11 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_11}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '12':
                        console.log("Dummy Case 12 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_12}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '13':
                        console.log("Dummy Case 13 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_13}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '14':
                        console.log("Dummy Case 14 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_14}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '15':
                        console.log("Dummy Case 15 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_15}>{item.pinpoint}</Text>
                                        <Text style={styles.fullText_15}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '16':
                        console.log("Dummy Case 16 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_16}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '17':
                        console.log("Dummy Case 17 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_17}>{item.pinpoint}</Text>
                                        <Text style={styles.fullText_17}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '18':
                        console.log("Dummy Case 18 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_18}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '19':
                        console.log("Dummy Case 19 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.pinpoint_4}>{item.pinpoint}</Text>
                                        <Text style={styles.fullText_19}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '20':
                        console.log("Dummy Case 20 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_20}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    case '21':
                        console.log("Dummy Case 21 FULLTEXT: " + item.fulltext);
                        return (
                            <TouchableOpacity>
                                <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.fullText_21}>{item.fulltext}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );

                    default:
                        return (
                            <TouchableOpacity>
                                <View>
                                    <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                                        <Text>{item.type} {item.fulltext} </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                }
            } else {
            console.log("Dummy Case Blank Render");
            return (
                <TouchableOpacity>
                    <View onLayout={(event) => { this.getItemDimensions(event.nativeEvent.layout) }} key={this.state.currentItem}>
                        <View>
                            <Text> </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }

    }



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

AppRegistry.registerComponent('DummyMainItem', () => DummyMainItem);