import {
    StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native';
import PageScrollView from 'react-native-page-scrollview';
import React, { Component } from 'react';
import  ScrollableTabView  from '../common/ScrollableTabView/ScrollableTabView';
import RefreshControl from './RefreshControl';
// 获取当前屏幕的宽高
const {width, height} = require('Dimensions').get('window');
const REQUEST_URL = 'https://easy-mock.com/mock/5be401bc7793476267aa761b/example/mock';


export default class PositionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
        };
    }
    componentDidMount() {
        this._fetchData();
    }


    _fetchData(){
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((data) => {
                let datalist = data.data;
                let dataBlog = [];
                let i = 0;

                datalist.map((item) => {
                    dataBlog.push({
                        key:i,
                        value:item
                    });
                    i++;
                });

                this.setState({
                    dataArray:dataBlog,
                    isLoading:false,
                });

                datalist = null;
                dataBlog = null;
            })
            .catch((err) => {
                this.setState({
                    error:true,
                    errorInfo:err
                })
            })
            .done()
    }


    _onRefresh = () => {
        setTimeout(() => {
            this._hw && this._hw.finishRefresh();
        }, 2000);
    };
    renderLoadingView(){
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={{height: 80}}
                    color='red'
                    size="large"
                />
            </View>
        )
    }
    //加载失败view
    renderErrorView(error) {
        return (
            <View style={styles.container}>
                <Text>
                    Fail: {error}
                </Text>
            </View>
        );
    }
    _renderFlatlist(){

        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo);
        }

        return (
            <ScrollView>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(item)=>this._renderItemView(item)}


                />
            </ScrollView>
        )
    }
    _goToAnotherScreen=() => {
        const {navigation} = this.props;
        navigation.navigate('AnotherScreen');};
    _goToPositionDetailsScreen=() => {
        const {navigation} = this.props;
        navigation.navigate('PositionDetailsScreen');};

    _renderItemView(item){
        console.log("uuu好好上课哈");
        // VirtualizedList: missing keys for items,
        // make sure to specify a key property on each item or provide a custom keyExtractor.
        // item数据结构中必须要有个key
        return (
            <View style={styles.cellStyle} >
                <TouchableOpacity onPress={() => this._goToPositionDetailsScreen()}>
                    <View style={styles.messageListItem}>
                        <View style={{
                            width:width,
                            height:30,
                            backgroundColor:'#F5FCFF',
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            alignItems: 'center',

                        }}>
                            <Text style={{
                                fontSize:20,
                                color:'black',

                                alignItems: 'center',
                                marginLift: 4

                            }}>{item.item.value.position}</Text>
                            <Text style={{
                                fontSize:16,
                                color:'red',

                                alignItems: 'center',
                                marginRight: 4

                            }}>{item.item.value.salary}万</Text>
                        </View>
                        <View style={{
                            width:width,
                            height:20,
                            backgroundColor:'#F5FCFF',
                            flexDirection: 'row',
                            justifyContent:'flex-start',
                            alignItems: 'center',


                        }}>
                            <Text style={styles.textItem}>{item.item.value.requirement}</Text>

                        </View>
                        <View style={{
                            height:70,
                            backgroundColor:'#F5FCFF',
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}
                        >
                            <Image style={{width:50,height:50,borderRadius:25}}
                                   source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/uzi.jpg')}/>
                            <View style={{
                                height:60,
                                alignItems: 'center',
                                justifyContent:'flex-start',

                                marginLeft: 20,
                            }}>
                                <View style={{
                                    width:width-50,
                                    height:25,
                                    backgroundColor:'#F5FCFF',
                                    flexDirection: 'row',
                                    justifyContent:'flex-start',
                                    alignItems: 'center',


                                }}>
                                    <Text style={{fontSize:18, color:'black',
                                    }}>{item.item.value.company}</Text>

                                </View>

                                <View style={{
                                    width:width-50,
                                    height:30,
                                    backgroundColor:'#F5FCFF',
                                    flexDirection: 'row',
                                    justifyContent:'flex-start',
                                    alignItems: 'center',


                                }}>
                                    <Text style={styles.textItem}>{item.item.value.work}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>



            </View>
        )
    }
    render() {
        let imgArr=[
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_2_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_1_Fotor.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_3.jpg'),
            require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_4_Fotor.jpg'),
        ];
        return (
            <View style={styles.container}>


                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabView.ScrollableTabBar />}
                    collapsableBar={
                        <View style={{ height: 325, backgroundColor: 'white' }} >
                            <View style={styles.container}>
                                <PageScrollView
                                    infiniteInterval={4000}
                                    goToNextPageSpeed={3}
                                    style={{width:width,height:205,}}
                                    imageArr={imgArr}
                                />
                            </View>
                            <View style={styles.imageStyles}>
                                <TouchableOpacity onPress={() => this._goToAnotherScreen()}>
                                    <Image style={{height:90,
                                        width:width-50,}}
                                           source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/time.jpg')}/>
                                </TouchableOpacity>
                            </View>


                        </View>
                    }
                    refreshControl={
                        <RefreshControl
                            ref={ref => (this._hw = ref)}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View tabLabel={'推荐'} style={{ height: 1000 }} >
                        {this._renderFlatlist()}
                    </View>
                    <View tabLabel={'订阅'} style={{ height: 500 }} >
                    {this._renderFlatlist()}
                    </View>
                    <View tabLabel={'公司'} style={{ height: 2000 }} />

                </ScrollableTabView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    },
    cellStyle:{
        flex: 1,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderStyle: null,

    },
    imageStyles:{
        height:120,
        width:width,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    messageList:{
        flex:1,

        width:width-1,
        backgroundColor:'#F5FCFF',
    },

    messageListItem:{
        height:120,
        borderColor:'#dddddd',
        backgroundColor:'#F5FCFF',
        borderWidth:1

    },
    textItem:{
        fontSize:15,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:3

    }
});

