import PageScrollView from "react-native-page-scrollview";
import React, {Component} from "react";
import {
    StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native';
const {width, height, scale} = Dimensions.get('window');
export default class ScrollViewPage extends Component {
    render(){
        let imgArr=[
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_2_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_1_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_3.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_4_Fotor.jpg'),
        ];
        return(
            <View style={styles.container}>

                <PageScrollView
                    infiniteInterval={4000}
                    goToNextPageSpeed={3}
                    style={{width:width,height:180,}}
                    imageArr={imgArr}
                />
            </View>
        )
    }
};
const styles=StyleSheet.create({
    container:{
        flex:1,

    },

});



