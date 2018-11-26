import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,
    TouchableOpacity, View, Image
} from 'react-native';

const {width, height} = require('Dimensions').get('window');
export default class JobSeek extends Component {
   /* _ItemDivideComponent(){
        return(
            <View style={{height: 0.5,width:width-8, backgroundColor: 'rgba(0,0,0,0.4)'}}/>
        )
    }*/
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                            <View style={styles.messageListItem}>

                                <View style={{
                                    width:width,
                                    height:20,
                                    flexDirection: 'row',
                                    justifyContent:'flex-start',
                                    alignItems: 'center',


                                }}>
                                    <Text style={styles.textItem}>{this.props.requirement}</Text>

                                </View>
                                <View style={{
                                    height:70,
                                    flexDirection: 'row',
                                    alignItems: 'center',

                                }}
                                >
                                    <Image style={{width:50,height:50,borderRadius:25}}
                                           source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/uzi.jpg')}/>
                                    <View style={{
                                        height:60,
                                        alignItems: 'center',
                                        justifyContent:'flex-start',

                                        marginLeft: 20,
                                    }}>
                                        <View style={{
                                            width:width-50,
                                            height:25,
                                            flexDirection: 'row',
                                            justifyContent:'flex-start',
                                            alignItems: 'center',


                                        }}>
                                            <Text style={{fontSize:15, color:'black',
                                            }}>{this.props.company}</Text>

                                        </View>

                                        <View style={{
                                            width:width-50,
                                            height:30,
                                            flexDirection: 'row',
                                            justifyContent:'flex-start',
                                            alignItems: 'center',


                                        }}>
                                            <Text style={styles.textItem}>{this.props.work}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                    <View style={{
                        height:80,
                        alignItems:'center',
                        borderTopWidth: 0.3,
                        borderBottomWidth: 0.3,
                        borderColor: '#dddddd'
                    }}>
                        <View style={styles.phone}>
                            <Image style={styles.imageIcon}
                            source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/phone.png')}/>
                            <Text style={styles.text}>{this.props.phone}</Text>
                        </View>
                        <View style={styles.phone}>
                            <Image style={styles.imageIcon}
                                   source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/mail.png')}/>
                            <Text style={styles.text}>{this.props.mail}</Text>
                        </View>
                        <View style={styles.phone}>
                            <Image style={styles.imageIcon}
                                   source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/money.png')}/>
                            <Text style={styles.text}>{this.props.salary}</Text>
                        </View>
                    </View>
                    <View style={{height:40,
                    flexDirection:'row',
                    arguments:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',
                           height:40,
                        width:width-30}}>

                        <Text style={styles.mediumText}>当前状态 :</Text>
                        <Text style={styles.textItems}>{this.props.text}</Text>
                        </View>


                        <Image style={{height:12,
                        width:12,
                            marginTop:14
                        }}
                               source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/Arrow.png')}/>
                    </View>
                    <View>


                    </View>
                </ScrollView>
                {/*
                <View>
                    工作
                </View>
                <View>
                    教育经历
                </View>
                <View>
                    职业意向
                </View>
                <View>
                    语言能力
                </View>
                <View>
                    项目经历
                </View>
                <View>
                    自我评价
                </View>*/}
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

    messageListItem:{
        height:90,
        borderColor:'#dddddd',

        borderBottomWidth:1

    },
    textItem:{
        fontSize:15,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:3

    },
    phone:{
        flexDirection:'row',
        marginTop:5,
        height:20



    },
    imageIcon:{
        height:20,
        width:20,
        marginLeft:5,

    },
    text:{
        width:width-40,
        marginLeft:10,
        alignItems:'center',
        color:'rgba(0,0,0,0.4)'


    },
    mediumText:{
        marginTop:12.5,
        fontSize:15,
        color:'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10

    },
    textItems:{
        marginTop:12.5,
        fontSize:15,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10

    }
});