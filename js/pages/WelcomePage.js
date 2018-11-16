

import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native'
//import NavigatorUtil from '../util/NavigatorUtil'

import SplashScreen from 'react-native-splash-screen'
import {NavigationActions, StackActions} from "react-navigation";



export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.timer = setTimeout(() => {
            SplashScreen.hide();


                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'HomePage' }),

                    ],
                });
                this.props.navigation.dispatch(resetAction);
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return null;
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})


