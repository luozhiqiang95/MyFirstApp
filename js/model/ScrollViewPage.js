import PageScrollView from "react-native-page-scrollview";
import React, {Component} from "react";
import {
    StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native';
const {width, height, scale} = Dimensions.get('window');
export default class ScrollViewPage extends Component {
    render(){
        let imgArr=[
            require('/Users/luozhiqiang/myproject/MyApp2/js/pages/img_2_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/js/pages/img_1_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/js/pages/4_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/js/pages/img_4_Fotor.jpg'),
        ];
        return(
            <View style={styles.container}>

                <PageScrollView
                    infiniteInterval={4000}
                    goToNextPageSpeed={3}
                    style={{width:width,height:180,marginTop:30}}
                    imageArr={imgArr}
                />
            </View>
        )
    }
};
const styles=StyleSheet.create({
    container:{
        flex:1
    },

});



