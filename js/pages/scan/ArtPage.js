
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import ArtData from "/Users/luozhiqiang/myproject/MyApp2/js/pages/scan/ArtFlatList.json";

const {width, height} = require('Dimensions').get('window');
export default class ArtPage extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            dataArray:ArtData.data,

        }
    };
    _ItemDivideComponent(){
        return(
            <View style={{height: 0.5,width:width-8, backgroundColor: 'rgba(0,0,0,0.4)'}}/>
        )
    }
    _renderArtItemView({item}){

        console.log('我是呀呀呀呀'+item.string)
        return(
            <View style={styles.container}>

                <TouchableOpacity>
                    <View style={{height:120,alignItems:'center',justifyContent: 'center'}}>
                        <View style={styles.item_container}>
                            <View style={{width:160,height:100,marginLeft:10}}>
                                <Image style={styles.imageStyles}
                                       source={{url:item.img}}/>
                            </View>

                            <View style={styles.item_view}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.string}>{item.string}</Text>
                                <View style={{flexDirection: 'row',height:25, alignItems:'center',}}>
                                    <Image style={{height:14,width:14,}}
                                           source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/ic_check_box.png')}/>
                                    <Text style={{fontSize:13}}>{item.point}</Text>
                                </View>
                                <Text style={{fontSize:16}}> ¥{item.price}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
    _renderArtFlatlist(){
        return (
            <ScrollView>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(item)=>this._renderArtItemView(item)}
                    ItemSeparatorComponent={this._ItemDivideComponent}
                />
            </ScrollView>
        )
    };

    render(){
        return(
            <View style={{flex:1}}>

                <View style={styles.textView}>
                    <Text style={{fontSize:20,color:'black'}}>精选好课</Text>
                    <Text style={{fontSize:18,color: '#333'}}> | 职场精英精品分享 </Text>
                </View>
                {this._renderArtFlatlist()}
            </View>
        )
    }
}
const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: '#f5fcff',


        },textView: {
            flexDirection: 'row',
            alignItems:'center',
            height:30,
            backgroundColor: '#f5fcff',
            justifyContent:'center'


        },
        item_container: {
            height:100,
            flexDirection: 'row',



        },
        imageStyles:{
            height:100,
            width:160,


        },
        item_view:{
            width:width-200,
            justifyContent:'space-around',

            marginLeft: 25


        },
        title:{
            fontSize:18},
        string:{
            fontSize:14
        },

    }

)

