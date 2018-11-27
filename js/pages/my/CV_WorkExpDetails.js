import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,TextInput,
    TouchableOpacity,View
} from 'react-native';
import ImageData from "/Users/luozhiqiang/myproject/MyApp2/res/data/CV_WorkExp.json";
import CVFlatlist from '/Users/luozhiqiang/myproject/MyApp2/js/model/Flatlist.js'
//import CV_EducationalExp from "./CV_EducationalExp";

const {width, height} = require('Dimensions').get('window');
export default class CV_WorkExpDetails extends Component {
    constructor(props){
        super(props);
        //  this._onChangeText = this._onChangeText.bind(this);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>

                <CVFlatlist
                    data={ImageData.data}/>

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
    inputStyle:{
        width:width-220,
        marginTop:12.5,
        fontSize:15,
        color:'black',
        justifyContent: 'center',
        alignItems: 'center',


    },
    mediumText: {
        width:200,
        marginTop: 12.5,
        fontSize: 15,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 10

    },
    Icon:{
        height:40,
        flexDirection:'row',
        alignItems: 'center',}
});