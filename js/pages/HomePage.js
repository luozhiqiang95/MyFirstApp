
import {createBottomTabNavigator }from 'react-navigation';
import PositionPage from '../pages/PositionPage';
import MessagePage from '../pages/MessagePage';
//mport FindPage from '../pages/FindPage';
import SearchPage from '../pages/SearchPage';
//import MyPage from '../my/MyPage';
import {AppcreateStackNavigator} from '../navigators/AppcreateStackNavigator'
import {AppFindcreateStackNavigator} from '../navigators/AppcreateStackNavigator'
import React, {Component}from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    StyleSheet,Image
}from 'react-native'


export default class HomePage extends Component{
    render(){
        return(
            <AppTabNav/>
        )
    }
}
export  const AppTabNav=createBottomTabNavigator({

    PositionPage: {
        screen: PositionPage,
        navigationOptions: {
            tabBarLabel: '职位',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image style={[styles.footImage, {tintColor: tintColor}]}
                       resizeMode='contain'
                       source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/Home.png')}
                />
            )

        }
    },
    MessagePage: {
        screen: MessagePage,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image style={[styles.footImage, {tintColor: tintColor}]}
                       resizeMode='contain'
                       source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/Message1.png')}
                />
            )

        }
    },
    FindPage: {
        screen: AppFindcreateStackNavigator,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image style={[styles.footImages, {tintColor: tintColor}]}
                       resizeMode='contain'
                       source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/look.png')}
                />
            )

        },


    },
    SearchPage: {
        screen: SearchPage,
        navigationOptions: {

            tabBarLabel: '找人',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image style={[styles.footImage, {tintColor: tintColor}]}
                       resizeMode='contain'
                       source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/search.png')}
                />
            )

        }
    },
    MyPage: {
        screen: AppcreateStackNavigator,
        navigationOptions: {

            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image style={[styles.footImage, {tintColor: tintColor}]}
                       resizeMode='contain'
                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/ic_my.png')}
                />
            )

        }
    }
},
        {
            tabBarOptions:
        {
            showIcon:true
        },
            labelStyle: {
                fontSize: 25,
                marginTop: -6,
            },
            iconStyle: {
                marginTop: -3
            },
            },
);
const styles = StyleSheet.create({
        icon: {
            height:20,
            width: 20,
        },

    container: {
        flex: 1,
    },
    image: {
        height: 26,
        width: 26,
    },
    footImage:{
            height:20,
        width:20
    },footImages:{
        height:30,
        width:30

    }
});
