import React, {Component} from 'react';
import {
    ScrollView, Text, TouchableHighlight, StyleSheet,
    TouchableOpacity, View, Image
} from 'react-native';
import JobSeek from '../../pages/scan/JobSeek'
import CV_MODEL from "../../model/CV_MODEL";


const {width, height} = require('Dimensions').get('window');

export default class CVScreen extends Component {
    _CVScreenDetails=() => {
        console.log("props")
        console.log(this.props)
        const {navigation} = this.props;
        navigation.navigate('CVScreenDetails');};

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{
                    width:width,
                    height:30,
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    alignItems: 'center',

                }}>
                    <Text style={{
                        fontSize:15,
                        color:'black',

                        alignItems: 'center',
                        marginLift: 4

                    }}>个人信息</Text>
                    <TouchableOpacity onPress={() => this._CVScreenDetails()}>
                        <Image style={{
                            height:15,
                            width:15,
                            marginRight: 4

                        }}
                               source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/pen.png')}/>
                    </TouchableOpacity>
                </View>
                <JobSeek

                    requirement='罗志强'
                    company='部门副经理  |四川奕新事业有限公司'
                    work='男 |26 |上海杨浦区 |工作两年'
                    phone='18090967627'
                    mail='luozhiqinag95@163.com'
                    salary='12万'
                    text='离职，目前在找工作'
                />
                <View style={{
                    height:5,
                    width:width,
                    backgroundColor:'#f3f3f4'
                }}>
                </View>
                <CV_MODEL
                    Text='工作经历' onPress={this.props}
                    />
                <CV_MODEL
                    Text='教育经历'/>
                <CV_MODEL
                    Text='职业意向'/>
                <CV_MODEL
                    Text='语言能力'/>
                <CV_MODEL
                    Text='项目经验'/>
                <CV_MODEL
                    Text='自我评价'/>


            </View>
            </ScrollView>
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
});