import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    render() {
        return ( // JSX
            <View style={styles.mainview}>
                <Text>Hello World!</Text>
                <Text style={styles.biggreen}>Hello dear Father, Augusto!!!</Text>
                <Text style={styles.bigblue}>I'm learning React Native</Text>
            </View>
        );
    }
}

// CSS
const styles = StyleSheet.create ({
    mainview: {
        padding: 10% 0,
    },

    biggreen: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 50,
    },

    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
