


import React, { Component } from 'react';
import {
    Text, View, FlatList, TouchableOpacity,StatusBar ,Image, StyleSheet,ScrollView
} from 'react-native';

import FindFlatList from '../pages/scan/FindFlatList'
import ScrollViewPage from '../model/ScrollViewPage'
export default class FindPage extends Component {

    // 配置页面导航header选项
    static navigationOptions = {
        headerTitle: '首页',
        headerStyle:{
            backgroundColor: '#284280',
            height:20,

        }
    };

    // 初始化
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    _OccPlanScreen=() => {
        const {navigation} = this.props;
        navigation.navigate('OccPlanScreen');};
    render () {
        return (
            <ScrollView style={{backgroundColor:'#f3f3f4'}}>
            <View style={{flex:1 ,}}>

                {/* 顶部背景 */}
                <StatusBar
                    backgroundColor="#8DD1F9"
                    barStyle="light-content"
                />

                {/* 商品列表 */}
                <View style={{flex:1 ,backgroundColor:'#f3f3f4'}}>
                    <ScrollViewPage />

                    <FindFlatList/>
                </View>
                <Text style={styles.text}
                      onPress={() => this._OccPlanScreen()}>按我哟</Text>

            </View>
            </ScrollView>
        )
    }
}
//navigate={this.props.navigation.navigate}
const styles = StyleSheet.create ({
    ScrollViewContent: {
        height:150,
        paddingBottom:10,
        borderBottomColor:'#eee',
        borderBottomWidth:2
    },
    text:{
        fontSize:20
    }
})

/*export default class FindPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
        }

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

    _renderItemView(item){
        console.log("uuu好好上课哈");
        // VirtualizedList: missing keys for items,
        // make sure to specify a key property on each item or provide a custom keyExtractor.
        // item数据结构中必须要有个key
        return (
            <View style={styles.cellStyle}>
                <TouchableOpacity>
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

    render() {

        return (
            <View style={styles.container}>

               // {/*这里渲染选项卡UI*/
            // {this._renderFlatlist()}
           // </View>
       // )

   // }


/*const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cellStyle:{
        flex: 1,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderStyle: null,

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


/*import React, {Component} from 'react'
import {View, StyleSheet, Platform, Dimensions} from 'react-native'
import RefreshListView, {RefreshState} from '../RefreshListView'
import Cell from './ItemCell'
import data from '../Pages/ListItem.json'

const {width} = Dimensions.get('window');

export default class FindPage extends Component {
    state: {
        dataList: Array<any>,
        refreshState: number,
    }

    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
        }
    }

    componentDidMount() {
        this.onHeaderRefresh()
    }

    onHeaderRefresh = () => {
        this.setState({refreshState: RefreshState.HeaderRefreshing})
        // 模拟网络请求
        setTimeout(() => {
            // 模拟网络加载失败的情况
            if (Math.random() < 0.2) {
                this.setState({refreshState: RefreshState.Failure})
                return
            }
            //获取测试数据
            let dataList = this.getTestList(true)

            this.setState({
                dataList: dataList,
                refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
            })
        }, 2000)
    }

    onFooterRefresh = () => {
        this.setState({refreshState: RefreshState.FooterRefreshing})

        // 模拟网络请求
        setTimeout(() => {
            // 模拟网络加载失败的情况
            if (Math.random() < 0.2) {
                this.setState({refreshState: RefreshState.Failure})
                return
            }
            //获取测试数据
            let dataList = this.getTestList(false)

            this.setState({
                dataList: dataList,
                refreshState: dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        }, 2000)
    }

    // 获取测试数据
    getTestList(isReload: boolean): Array<Object> {
        // fetch(api.recommend)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         console.log(JSON.stringify(json));
        //
        //         let newList = json.data.map((info) => {
        //             return {
        //                 id: info.id,
        //                 imageUrl: info.squareimgurl,
        //                 title: info.mname,
        //                 subtitle: `[${info.range}]${info.title}`,
        //                 price: info.price
        //             }
        //         })
        //         return isReload ? newList: [...this.state.dataList, ...newList]
        //     })

        let newList = data.map((data) => {
            return {
                imageUrl: data.squareimgurl,
                title: data.mname,
                subtitle: `[${data.range}]${data.title}`,
                price: data.price,
            }
        })
        return isReload ? (Math.random() < 0.2 ? [] : newList) : [...this.state.dataList, ...newList]
    }

    keyExtractor = (item: any, index: number) => {
        return index
    }

    renderCell = (info: Object) => {
        return <Cell info={info.item}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}

                    // 可选
                    footerRefreshingText='玩命加载中...'
                    footerFailureText='我擦嘞，居然加载失败了...'
                    footerNoMoreDataText='我是有底线的...'
                    footerEmptyDataText='好像什么东西都没有...'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    title: {
        fontSize: 18,
        height: 84,
        textAlign: 'center'
    }
})*/

