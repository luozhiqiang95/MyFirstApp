import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,
    TouchableOpacity,View
} from 'react-native';

const {width, height} = require('Dimensions').get('window');
export default class ApplyJob extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>
                    应聘优先页面正在努力完善中，敬请期待！
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        //  paddingLeft: 24,
        // paddingRight: 24
    },


    Text:{ fontSize:25,color:'black'

    },
});