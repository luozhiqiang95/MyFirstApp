import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,TextInput,
    TouchableOpacity,View
} from 'react-native';
import ImageData from "/Users/luozhiqiang/myproject/MyApp2/res/data/CVScreenDetails.json";
import CVFlatlist from '/Users/luozhiqiang/myproject/MyApp2/js/model/Flatlist.js'

const {width, height} = require('Dimensions').get('window');
export default class CVScreenDetails extends Component {
    constructor(props){
        super(props);
      //  this._onChangeText = this._onChangeText.bind(this);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Icon}>
                    <Text style={styles.mediumText}>真实姓名</Text>
                    <TextInput
                        editable={true}
                       // onChangeText={this._onChangeText}
                        style={styles.inputStyle}
                    />
                </View>

                <View style={styles.Icon}>
                    <Text style={styles.mediumText}> 显  示</Text>
                    <Text style={styles.inputStyle}>男/</Text>
                </View>
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