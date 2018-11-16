
/**
 * 列表的Item
 */
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'
import data from '../Pages/ListItem.json'
const color = {
    theme: '#06C1AE',
    border: '#e0e0e0',
    background: '#f3f3f3'
}

export default class ItemCell extends PureComponent {

    render() {
        let info = data;

        let image = info.imgurl.replace('w.h', '60').replace('http','https');

        return (

            <View style={styles.container}>
            <View style={styles.messageListItem}>
                <View style={{
                    width:width,
                    height:40,
                    backgroundColor:'#F5FCFF',
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems: 'center',

                }}>
                    <Text style={{
                        fontSize:20,
                        color:'black',

                        alignItems: 'center',
                        marginLift: 4

                    }}>{info.position}</Text>
                    <Text style={{
                        fontSize:16,
                        color:'red',

                        alignItems: 'center',
                        marginRight: 4

                    }}>{info.salary}</Text>
                </View>
                <View style={{
                    width:width,
                    height:30,
                    backgroundColor:'#F5FCFF',
                    flexDirection: 'row',
                    justifyContent:'flex-start',
                    alignItems: 'center',


                }}>
                    <Text style={styles.textItem}>{info.requirement}</Text>

                </View>
                <View style={{
                    height:80,
                    backgroundColor:'#F5FCFF',
                    flexDirection: 'row',
                    alignItems: 'center',

                }}
                >
                    <Image style={{width:60,height:60,borderRadius:30}}
                           source={{uri:image.imgurl}}/>
                    <View style={{
                        height:70,
                        alignItems: 'center',
                        justifyContent:'flex-start',

                        marginLeft: 20,
                    }}>
                        <View style={{
                            width:width-60,
                            height:30,
                            backgroundColor:'#F5FCFF',
                            flexDirection: 'row',
                            justifyContent:'flex-start',
                            alignItems: 'center',


                        }}>
                            <Text style={{fontSize:18, color:'black',
                            }}>{info.company}</Text>
                        </View>
                        <View style={{
                            width:width-60,
                            height:30,
                            backgroundColor:'#F5FCFF',
                            flexDirection: 'row',
                            justifyContent:'flex-start',
                            alignItems: 'center',


                        }}>
                            <Text style={styles.textItem}>{info.propertys}</Text>
                            <Text style={styles.textItem}>{info.numbers}</Text>
                            <Text style={styles.textItem}>{info.work}</Text>
                        </View>
                    </View>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1,

    },

    messageListItem:{
        height:155,
        borderColor:'rgba(0,0,0,0.4)',
        backgroundColor:'#F5FCFF',
        borderWidth:1

    },
    textItem:{
        fontSize:15,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:3

    }
})
