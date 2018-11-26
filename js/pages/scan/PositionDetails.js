import React from 'react';
import {Button, View, Text, WebView, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
//import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Dimensions from 'Dimensions'

const screenWidth = Dimensions.get('window').width;

export default class PositionDetailsScreen extends React.Component {
   navigationOptions: {
        header: null
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView style={{width:screenWidth,height:'100%'}}>
                    <Text style={styles.text}>职位详情</Text>

                </ScrollView>

                <View style={styles.ButtomView}>
                    <TouchableOpacity>
                        <View style={styles.ButtonStyle1}
                              onPress={()=>{}}>
                            <Button title={"立即沟通"} color={'#E04214'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.ButtonStyle2}
                              onPress={()=>{}}>
                            <Button title={"应聘职位"} color={'white'} />
                        </View>
                    </TouchableOpacity>


                </View>
            </View>

        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    ButtomView:{
        flexDirection: 'row',
        alignItems:'center',
        height:40


    },
    ButtonStyle1:{
        width:150,
        marginLeft: 10,
        height:30,
        alignItems:'center',
        borderWidth: 0.5,
        borderColor:'#E04214'

    },
    ButtonStyle2:{
        backgroundColor:'#E04214',
        width: screenWidth-180,
        marginLeft: 15,
        height: 30 ,
        alignItems:'center',

    },
    text:{
        fontSize:25,
    alignItems:'center',
    justifyContent: 'center'}
});

