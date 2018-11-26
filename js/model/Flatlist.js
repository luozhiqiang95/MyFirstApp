

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
//import ImageData from "/Users/luozhiqiang/myproject/MyApp2/js/pages/my/MyList.json";
const {width, height} = require('Dimensions').get('window');
export default class CVFlatlist extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            dataArray: this.props.data,//存储列表使用的数据
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
            <View style={{height: 0.5,width:width-12, backgroundColor: 'rgba(0,0,0,0.4)',justifyContent:'center'}}/>
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

                <View style={styles.container}>
                    <View style={{height:40,
                        flexDirection:'row',
                        arguments:'center'}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',
                            height:40,
                            width:width-30}}>

                            <Text style={styles.mediumText}>{item.title}</Text>
                            <Text style={styles.textItem}>{this.props.text}</Text>
                        </View>


                        <Image style={{height:12,
                            width:12,
                            marginTop:14
                        }}
                               source={{url:item.image}}/>
                    </View>
                </View>

            </TouchableOpacity>
        )
    };
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


    Text: {
        fontSize: 25, color: 'black'

    },
    mediumText: {
        marginTop: 12.5,
        fontSize: 15,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',

        marginLeft: 10

    },
    textItem: {
        fontSize: 15,
        color: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3

    },
})