import React,{Component}from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    TouchableHighlight


} from 'react-native';
//import {createStackNavigator} from 'react-navigation';
import ImageData from "/Users/luozhiqiang/myproject/MyApp2/js/pages/my/MyList.json";
//import AppcreateStackNavigator from '../navigators/AppcreateStackNavigator'
//import SettingScreen from'../pages/scan/SettingScreen';
const {width, height} = require('Dimensions').get('window');
export default class MyPage extends Component{
    static navigationOptions = {
        header:null,
    };

    constructor(props) {
        super(props);
        this.state = {
            dataArray: ImageData.data,//存储列表使用的数据

        };
    }
    _SettingList = () => {
        const {navigation} = this.props;
        navigation.navigate('SettingScreen');
    };
    _goToAnotherScreen=() => {
        const {navigation} = this.props;
        navigation.navigate('AnotherScreen');};
    _CV_Page=() => {
        const {navigation} = this.props;
        navigation.navigate('CVScreen');};

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
    getView({item}) {
        //这里返回的就是每个Item


        return (
            <TouchableHighlight onPress={() => this._goToAnotherScreen()}>
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
            </TouchableHighlight>
        )
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={{width:width,height:130,marginTop:25}}
                    source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/timg.jpg')}
                                     >
                        <TouchableHighlight onPress={() => this._CV_Page()}>
                        <View style={{flexDirection:'row',}} >
                            <View style={{alignItems:'center',
                                    justifyContent: 'center',width:width-70,marginLeft:35}}>
                                <Image style={{width:50,height:50,borderRadius:25,marginTop:20,}}
                                source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/uzi.jpg')}/>

                                <Text style={styles.bigtext}>罗志强</Text>
                                <Text style={styles.text}> 求职职位:App开发工程师</Text>
                            </View>

                            <View style={{width:70,}}>
                                <TouchableOpacity onPress={() => this._SettingList()}>
                                <Image style={{width:25,height:25,marginTop:15,}}
                                    source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/ic_sort.png')}
                                      />
                                </TouchableOpacity>
                            </View>
                        </View>
                        </TouchableHighlight>
                    </ImageBackground>
                    <View>
                    <View style={styles.textView}>
                        <TouchableOpacity>
                        <View style={styles.Text}>
                            <Text style={styles.texts}>95%</Text>
                            <Text style={styles.texts}>我的简历</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View>
                            <Text style={styles.texts}>50%</Text>
                            <Text style={styles.texts}>应聘记录</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View>
                            <Text style={styles.texts}>0</Text>
                            <Text style={styles.texts}>收藏/关注</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View>
                            <Text style={styles.texts}>0</Text>
                            <Text style={styles.texts}>谁看过我</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                        <View style={{height:40,flexDirection:'row',alignItems:'center',  backgroundColor: '#fff',
                            borderTopColor: '#d5d5d5',
                            borderTopWidth: 0.5}}>
                            <Text style={styles.text}>求职意向</Text>
                            <View style={{ flexDirection: 'row',
                                width:width-70,
                                justifyContent:'flex-end',
                                backgroundColor:'#fff',
                                alignItems:'center',
                                borderTopColor: '#d5d5d5',
                                borderTopWidth: 0.5
                            }}>
                                <Text style={styles.text}
                                      onPress={() => this._CV_Page()}>离职目前正在找工作</Text>
                                <Image style={{ height:40,
                                    width:40,marginRight:10,}}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/js/pages/my/img/kasha.png')}/>
                            </View>
                        </View>

                    </View>
                    <View>
                        {this._renderFlatlist()}

                    </View>


                </View>
            </ScrollView>
        )

}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textView:{
        height:60,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
        backgroundColor: '#f3f3f4',
    },
    Text:{

        justifyContent:'center',
        width:60,



    },
    bigtext:{
        fontSize:25,
        color:'black',
        marginTop:5

    }
    ,
    texts:{
        fontSize: 14
    },
    cellStyle:{
        height:48,
        backgroundColor: '#f3f3f4',
        flexDirection: 'row',



    },
    liftView:{
        marginLeft:10,
        flexDirection: 'row',
        width:150,
        backgroundColor:'white',
        alignItems:'center'
    },
    rightView:{
        flexDirection: 'row',
        width:width-150,
        justifyContent:'flex-end',
        backgroundColor:'white',
        alignItems:'center'


    },
    imagesView:{
        marginLeft:10,
        height:18,
        width:18,
    },
    text:{
        fontSize:16,
        marginLeft:15,
        color:'#333',
        justifyContent: 'center',
        alignItems: 'center',

    }
})