import React, { PureComponent } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class MainItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {fulltext: "ok"};
      }

    render() {
        return (
            <TouchableHighlight onPress={() => null}>
                <View>
                    <View>
                        <Text>{this.fulltext}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    listView: {

    },

});

AppRegistry.registerComponent('MainItem', () => MainItem);