import React, { PureComponent } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class MainItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { fulltext: "ok" };
    }

    render() {

        <TouchableOpacity onLongPress={() => this.readText(item.fulltext)}>
            <View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.fullText_0}>yooooo</Text>
                </View>
            </View>
        </TouchableOpacity>

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

AppRegistry.registerComponent('MainItem', () => MainItem);