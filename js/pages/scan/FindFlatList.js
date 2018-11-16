import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,

    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    ScrollView,

} from 'react-native';

const {width, height} = require('Dimensions').get('window');
export default class FindFliatList extends Component{

    _OccPlanScreen=() => {
        const {navigation} = this.props;
        navigation.navigate('OccPlanScreen');};

    render(){


        return(
            <View style={styles.container} >
                <View style={styles.View}>
                <TouchableOpacity  onPress={() => this._OccPlanScreen()}>

                        <View style={styles.ItemView} >
                            <View style={styles.imageView}>
                            <Image style={styles.image}
                            source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/q.png')}/>
                            </View>
                            <Text style={styles.text}>职业规划</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ItemView}>
                                <View style={styles.imageView}>

                                <Image style={styles.image}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/w.png')}/>
                                </View>
                                <Text style={styles.text}>简历优化</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ItemView}>
                                <View style={styles.imageView}>
                                <Image style={styles.image}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/e.png')}/>
                                </View>
                                <Text style={styles.text}>应聘优先</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ItemView}>
                                <View style={styles.imageView}>
                                <Image style={styles.image}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/r.png')}/>
                                </View>
                                <Text style={styles.text}>面试指导</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ItemView}>
                                <View style={styles.imageView}>
                                <Image style={styles.image}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/t.png')}/>
                                </View>
                                <Text style={styles.text}>求职顾问</Text>
                            </View>

                        </TouchableOpacity>

                    </View>
            </View>



        )
    }}

const styles = StyleSheet.create({
    container:{


        marginTop: 20,
        height:100,
        backgroundColor :'#f3f3f4'




    },
    ItemView:{
        height:100,
        width:width/5,
        alignItems: 'center'


    },
    imageView:{height:50,
        width:50,
        borderRadius:25,
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'


    },
    image:{
        height:40,
        width:40,
        borderRadius:20,

    },
    text:{
        marginTop:10,
        fontSize:13
    },
    View:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'

    },

});
