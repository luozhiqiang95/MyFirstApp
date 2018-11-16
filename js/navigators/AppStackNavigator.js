import React from 'react'
import {StackNavigator} from 'react-navigation';
import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage'


export const AppNavigator = StackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    HomePage: {
        screen: HomePage
    },


}, {
    navigationOptions: {
        header: null
    }
})