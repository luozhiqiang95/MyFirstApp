import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,
    TouchableOpacity,View
} from 'react-native';

const {width, height} = require('Dimensions').get('window');
export default class SettingScreen extends Component {
    static navigationOptions = {
        headerTitle:'设置',
        headerTitleStyle:{
            color:'white'
        },
        headerStyle:{
            backgroundColor: '#284280',
            height:25,

        }
    };
    render() {
        return (
            <View style={styles.container}>

            <ScrollView style={styles.container}>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={Colors.pressColor}
                >
                    <Text style={styles.title}>新消息通知</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={Colors.pressColor}
                >
                    <Text style={styles.title}>猎聘使用宝典</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={styles.pressColor}
                >
                    <Text style={styles.title}>修改密码</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={styles.pressColor}
                >
                    <Text style={styles.title}>购买记录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={Colors.pressColor}
                >
                    <Text style={styles.title}>我的礼劵</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={Colors.pressColor}
                >
                    <Text style={styles.title}>清除缓存</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={Colors.pressColor}
                >
                    <Text style={styles.title}>版本更新</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchItem}
                    underlayColor={Colors.pressColor}
                >
                    <Text style={styles.title}>关于我们</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 15,
                    borderBottomColor: '#d5d5d5',
                    borderBottomWidth: 1,
                    paddingBottom: 15}}>
                <Text style={styles.text}>

                    退出登陆
                </Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
       paddingLeft: 5,


    },
    touchItem: {

        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: 2
    },
    touchItem2: {
        paddingTop: 15,
        paddingBottom: 15

    },
    title:{
        color: '#333',
        fontSize: 15

    },
    text:{

        fontSize:15,
        color:'black',


    },
});
export const Colors = {
    pressColor: '#f0f0f0',
    inputItemBorderColor: '#d5d5d5',
    divider: '#e0e0e0',

    greenLight: '#94b5a3',
    red: '#f36e5e'
};


