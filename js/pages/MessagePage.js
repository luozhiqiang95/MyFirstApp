
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
import ImageData from "/Users/luozhiqiang/myproject/MyApp2/js/pages/my/MyList.json";
const {width, height} = require('Dimensions').get('window');
export default class MessagePage extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            dataArray: ImageData.data,//存储列表使用的数据
        };
    }

    _renderFlatlist() {


        return (
            <ScrollView>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(item) => this.getView(item)}
                    ItemSeparatorComponent={this._ItemDivideComponent}

                />
            </ScrollView>
        )
    }
    _ItemDivideComponent(){
        return(
            <View style={{height: 0.5,width:width-8, backgroundColor: 'rgba(0,0,0,0.4)'}}/>
        )
    }

    render() {
        return (

            <View style={styles.container}>

                {this._renderFlatlist()}

            </View>

        );
    }
    getView({item}) {
        //这里返回的就是每个Item


        return (
            <TouchableOpacity>
                <View style={styles.cellStyle}>
                    <View style={styles.liftView}>
                        <Image style={styles.imagesView}
                            source={{url:item.image}}/>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                    <View style={styles.rightView}>
                        <Text style={styles.text}>未完成</Text>
                        <Image style={{ height:40,
                            width:40,marginRight:10,}}
                            source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/kasha.png')}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };
}



const styles = StyleSheet.create({
    container: {
        flex:1,


        backgroundColor: '#F5FCFF',
    },
    cellStyle:{
        height:50,
        backgroundColor: 'white',
        flexDirection: 'row',



    },
    liftView:{
        marginLeft:10,
        flexDirection: 'row',
        width:150,
        backgroundColor:'#F5FCFF',
        alignItems:'center'
    },
    rightView:{
        flexDirection: 'row',
        width:width-150,
        justifyContent:'flex-end',
        backgroundColor:'#F5FCFF',
        alignItems:'center'


    },
    imagesView:{
        marginLeft:10,
        height:18,
        width:18,
    },
    text:{
        fontSize:20,
        marginLeft:15,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',

    }
});