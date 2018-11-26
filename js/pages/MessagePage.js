
import React, { Component } from 'react';
import { StyleSheet, View ,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import  ScrollableTabView  from '../common/ScrollableTabView/ScrollableTabView';
import RefreshControl from './RefreshControl';
const {width, height} = require('Dimensions').get('window');

export default class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


 render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                <View style={styles.TextView}>
                    <View style={{
                        marginTop:5,
                        height:30,
                        width:width-10,
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection: 'row',}}>
                            <Image style={{height:20,width:20,}}
                             source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/search2.png')}/>

                            <TextInput style={styles.textInput}
                               placeholder='请输入姓名搜索对话'>
                             </TextInput>
                    </View>
                </View>
                </TouchableOpacity>
                <View style={styles.message}>
                    <TouchableOpacity>
                    <View style={styles.messageList}>
                        <Image style={styles.imageStyles}
                        source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/img_1.png')}/>
                        <Text style={styles.text}>求职小秘书</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.messageList}>
                        <Image style={styles.imageStyles}
                        source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/Z_Letter_96px_1121603_easyicon.net.png')}/>

                        <Text style={styles.text}>猎聘小秘书</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{height:25, backgroundColor: '#C7C7C7'}}>

                <Text style={{fontSize: 15, Color: '#333',paddingBottom: 5,paddingTop: 5,marginLeft:10,}}>最近沟通</Text>
                </View>
                <View>
                    <Text  style={styles.text}>历史消息记录</Text>
                </View>
            </View>

        )

    };
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF'
    },
    TextView: {
        height: 40,

        alignItems:'center',

    },
    textInput:{
        fontSize: 18,
        marginLeft:5,

        width: width-35
    },
    imageStyles:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:5
    },
    message:{
        height:120,
        alignItems:'center',
        width:width

    },
    messageList:{
        flexDirection:'row',
        height:60,
        width:width,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor:'rgba(0,0,0,0.4)',
        backgroundColor:'#F5FCFF'
    },
    text:{
        fontSize:18,
        width:width-60,
        marginLeft: 10
    }




});