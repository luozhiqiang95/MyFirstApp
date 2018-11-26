import React from 'react'
import {StackNavigator} from 'react-navigation';
import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage'
import DetailsScreen from'../pages/scan/Details'


export const AppNavigator = StackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions : {
            headerTitle: '',
            headerStyle:{
                backgroundColor: '#284280',
                height:20,


            },
            navigationOptions: {
                header: null
            }
        },
    },
    Details:{
        screen: DetailsScreen,
        navigationOptions:{
            // tab:null
        }
    },



});