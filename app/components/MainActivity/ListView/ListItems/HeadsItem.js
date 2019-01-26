import React, { PureComponent } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class HeadsItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {fulltext: "ok"};
      }

    render() {
        return (
            // <TouchableHighlight onPress={() => null}>
            //     <View>
            //         <View>
                        <Text>{this.fulltext}</Text>
            //         </View>
            //     </View>
            // </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    listView: {

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#2e3f76',
        marginBottom: 3
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