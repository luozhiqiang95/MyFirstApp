import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,TextInput,
    TouchableOpacity,View,Keyboard
} from 'react-native';
import ImageData from "/Users/luozhiqiang/myproject/MyApp2/res/data/CVScreenDetails.json";
import CVFlatlist from '/Users/luozhiqiang/myproject/MyApp2/js/model/Flatlist.js'

const {width, height} = require('Dimensions').get('window');
export default class CVScreenDetails extends Component {
    constructor(props){
        super(props);
      //  this._onChangeText = this._onChangeText.bind(this);
        this.state = {
            text: "",
            KeyboardShown:false
        }
        this.keyboardDidShowListener = null;
        this.keyboardDidHideListener = null;
    }
    componentWillMount() {
        //监听键盘弹出事件
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
            this.keyboardDidShowHandler.bind(this));
        //监听键盘隐藏事件
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
            this.keyboardDidHideHandler.bind(this));
    }

    componentWillUnmount() {
        //卸载键盘弹出事件监听
        if(this.keyboardDidShowListener != null) {
            this.keyboardDidShowListener.remove();
        }
        //卸载键盘隐藏事件监听
        if(this.keyboardDidHideListener != null) {
            this.keyboardDidHideListener.remove();
        }
    }

    //键盘弹出事件响应
    keyboardDidShowHandler(event) {
        this.setState({KeyboardShown: true});

    }

    //键盘隐藏事件响应
    keyboardDidHideHandler(event) {
        this.setState({KeyboardShown: false});
    }

    //强制隐藏键盘
    dissmissKeyboard() {
        Keyboard.dismiss();
        console.log("输入框当前焦点状态：" + this.refs.textInput.isFocused());
    }


    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1.0} onPress={this.dissmissKeyboard.bind(this)}>
                <View style={styles.Icon}>
                    <Text style={styles.mediumText}>真实姓名</Text>
                    <TextInput
                        ref="textInput"
                        editable={true}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                       placeholderTextColor="#CCC"
                       placeholder="Username"
                        style={styles.inputStyle}

                    />
                </View>


                <View style={styles.Icon} >
                    <Text style={styles.mediumText}> 显  示</Text>
                    <Text style={styles.inputStyle}>男/</Text>
                </View>
                    {/* <CVFlatlist
                data={ImageData.data}/>*/}
                </TouchableOpacity>
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