import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React,{Component} from "react";
const {width, height} = require('Dimensions').get('window');
 export default class CV_MODEL extends Component{
     _CVScreenDetails=() => {
         console.log("hello")
         console.log(this.props)
          this.props.onPress.navigation.navigate('CVScreenDetails');
     };

     render() {


        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this._CVScreenDetails()}>
               < View style={{
                        width:width-10,
                        height:30,
                        backgroundColor:'#fff',
                        flexDirection: 'row',
                        justifyContent:'space-between',
                        alignItems: 'center',

                    }}>
                        <Text style={{
                            fontSize:15,
                            color:'black',

                            alignItems: 'center',
                            marginLift: 4

                        }}>{this.props.Text}</Text>

                            <Image style={{
                                height:15,
                                width:15,
                                marginRight: 10

                            }}
                                   source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/pen.png')}/>


            </View>
                </TouchableOpacity>
                <View style={{
                    height:5,
                    width:width,
                    backgroundColor:'#f3f3f4'



                }}>
                </View>
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
         paddingLeft: 10,
        // paddingRight: 24
    },

})