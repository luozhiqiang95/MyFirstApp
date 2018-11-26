

/* 首页 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    FlatList,
    RefreshControl, ActivityIndicator
} from 'react-native'
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions'
//import Toast from 'react-native-root-toast'
const screenWidth = Dimensions.get('window').width;
const urlBanner = 'http://www.wanandroid.com/banner/json'
let pageNo = 0;//当前第几页
let itemNo = 0;

export default class SearchPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            isShow:false,
            //下拉刷新
            refreshing: false,
            //加载更多
            isLoading: true,
            dataArray: [],
            // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            showFoot: '1',
            data:'',
            items:[],
            urls:[],
            //列表数据
            dataList:'',
            //总页数
            pageCount:0
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isShow: true,
            })
            this.getRequest(urlBanner)
            this.getRequestList(0)
        },0)
    }

    //列表点击事件
    itemClick(item, index) {
        // alert('新闻标题：' + item.author_name + '\n时间：' + item.date+'\n'+item.thumbnail_pic_s);
        this.props.navigation.navigate('Details', {
            title: index,
            url:this.state.urls[index],
        })
        // alert(this.state.items[0]+',index:'+index)
    }

    //banner点击
    bannerItemClick(item, index) {
        this.props.navigation.navigate('Details', {
            url:this.state.urls[index],
        })
    }
    //轮播
    _imageBanner  () {
        //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
        return(
            this.state.items.map((item,index)=> {
                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.5}
                        onPress={this.bannerItemClick.bind(this, item, index)}>
                        <Image
                            key={index}
                            style={{height: 200, width: screenWidth}}
                            resizeMode='cover'
                            source={{uri: item}}/>

                    </TouchableOpacity>
                )
            })

        )
    }

    //重新遍历map集合
    addMap(resultData){

        for (let i = 0; i < resultData.length; i++) {
            this.state.items.push(resultData[i].imagePath)
            this.state.urls.push(resultData[i].url)
        }
        this.setState({
            items: this.state.items,
            urls: this.state.urls,
        })
    }

    /*轮播*/
    _headerBannerView(){
        if(this.state.isShow){
            return (
                <ScrollView style={{}}>
                    <Swiper
                        removeClippedSubviews={false}
                        key={this.state.urls.length}
                        autoplay = {true}
                        height = {200}
                        showsPagination = {true}
                        horizontal={true}>
                        {this._imageBanner()}
                    </Swiper>

                </ScrollView>
            )}else {
            return (
                <View style={styles.imgView}>
                    <Image source={ require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/img_4_Fotor.jpg')} style={styles.bannerImg} />
                </View>
            )
        }
    }

    //请求banner
    getRequest (url) {
        /*网络请求的配置*/
        const opts = {
            method: 'GET',
        }
        fetch(url, opts)
            .then((response) => {
                this.setState({refreshing: false});
                return response.json();
            })
            .then((responseJson) => {
                this.setState({
                    data:responseJson.datas,
                });
                // alert(this.state.data[0].imagePath)
                this.addMap(responseJson.data)
            })
            .catch((error) => {
                alert(error)
            })
    }


    /*加载列表数据*/
    getRequestList(pagerNo){
        const opts = {
            method: 'GET',
        }
        fetch('http://www.wanandroid.com/article/list/'+pagerNo+'/json', opts)
            .then((response) => {
                this.setState({refreshing: false});
                return response.json();
            })
            .then((responseJson) => {
                let data = responseJson.data.datas;
                let dataBlob = [];
                let i = itemNo;

                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });
                let foot = 0;
                if(pageNo>=responseJson.data.pageCount){
                    //listView底部显示没有更多数据了
                    foot = 1;
                }

                this.setState({
                    dataList: responseJson.data.datas,
                    dataArray:this.state.dataArray.concat(dataBlob),
                    refreshing: false,
                    isLoading:false,
                    showFoot:foot,
                    pageCount:responseJson.data.pageCount,
                });
                //必须置空否则重复添加
                data = null;
                dataBlob = null;
                // alert(this.state.dataList[0].title)
            })
            .catch((error) => {
                alert(error)
            })
    }

    //下拉刷新
    _onRefresh () {
        this.setState({refreshing: true})
        this.getRequestList(0)
    }

    //上拉加载更多
    _renderFooter(){
        if (this.state.showFoot === 1) {
            return (
                <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if(this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载数据...</Text>
                </View>
            );
        } else if(this.state.showFoot === 0){
            return (
                <View style={styles.footer}>
                </View>
            );
        }else {
            return(
                <Text/>
            )
        }
    }

    _onEndReached(){
        //如果是正在加载中或没有更多数据了，则返回
        if(this.state.showFoot !== 0 ){
            return ;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了，返回
        if((pageNo!==1) && (pageNo>=this.state.pageCount)){
            return;
        } else {
            pageNo++;
        }
        //底部显示正在加载更多数据
        this.setState({showFoot:2});
        //获取数据
        this.getRequestList(pageNo);
    }


    //列表点击事件
    itemClick (item, index) {
        // alert('新闻标题：' + item.author_name + '\n时间：' + item.date+'\n'+item.thumbnail_pic_s);
        this.props.navigation.navigate('Details', {
            title: item.value.title,
            url: item.value.link,
        })
    }
    //列表分割线
    _itemDivide = () => {
        return (
            <View style={{height: 10}}/>
        )
    }
    //FlatList的key
    _keyExtractor = (item, index) => index.toString()

    //子item渲染
    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.itemClick.bind(this, item, index)}>
                <View style={{backgroundColor: '#ffffff', padding: 10, flexDirection: 'column'}}>

                    <Text style={{
                        marginRight: 10,
                        marginLeft: 10,
                        width: screenWidth-20,
                    }}>{item.value.title}</Text>

                    <View style={{flex: 1,flexDirection: 'row', paddingLeft: 10, paddingRight: 10,marginTop:10}}>
                        <Text style={{
                            width:screenWidth-100,
                            marginTop:10,
                            color:'#666666',
                            fontSize:12}}>{item.value.chapterName}</Text>
                        <Text style={styles.subTitle}> {item.value.niceDate}</Text>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }

    render() {
        return(
            <FlatList
                data={this.state.dataArray}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                ListHeaderComponent={this._headerBannerView()}
                ItemSeparatorComponent={this._itemDivide}
                ListFooterComponent={this._renderFooter.bind(this)}
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={1}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    subTitle:{
        marginTop:10,
        color:'#666666',
        fontSize:12,
        flex:1
    },
    imgStyle:{
        width:'100%',
        height:200,
        flex:1
    },
    imgView: {
        flex: 1,
        height: 200,
    },
    bannerImg: {
        width: '100%',
        height: 200,
        flex: 1
    },
    imgStyles: {
        width: screenWidth * 0.3,
        height: 80
    },
    footer:{
        flexDirection:'row',
        height:24,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
    },

})/**import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
    RefreshControl
} from 'react-native'
import ImageData from "./imageData.json";





const {width, height, scale} = Dimensions.get('window');
export  default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //当前页码
            currentPage: 0,
        }
    }
    static defaultProps = {
        duration: 3000
    }
    componentDidMount() {
        // 开启定时器
        this.startTimer();}

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    static navigationOptions = {
        title: "求职",

    };
    //开始拖拽
    _onScrollBeginDrag() {
        //停止定时器
        this.timer && clearTimeout(this.timer);
    }
    //停止拖拽,开启定时器
    _onScrollEndDrag() {
        this.startTimer();
    }

    //一页切换结束时执行
    _onAnimationEnd(e) {
        //计算水平偏移量
        let offSetX = e.nativeEvent.contentOffset.x;
        console.log(offSetX);
        //根据偏移量 求出当前页
        const currentPage = Math.floor(offSetX / width);
        console.log(offSetX);
        //更新 状态机
        this.setState({
            currentPage: currentPage,
        });
    }

    //返回圆点
    renderPagerCircle() {
        let indicatorArr = [];

        let impsArr = ImageData.data;
        let style;
        //遍历
        for (let i = 0; i < impsArr.length; i++) {
            style = (i === this.state.currentPage) ? {color: 'orange'} : {color: '#ffffff'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize: 25}, style]}>•</Text>
            )
        }
        return indicatorArr;
    }

    //返回所有图片
    rendImage() {
        //数组
        let allImage = [];
        //数据
        let impsArr = ImageData.data;
        //遍历
        for (let i = 0; i < impsArr.length; i++) {
            let imgItem = impsArr[i];
            allImage.push(
                <Image key={i} source={{uri: imgItem.icon}} style={{width: width, height: 200}}/>
            )
        }
        return allImage;
    }


    //开启定时器
    startTimer() {
        //拿到scrollview
        let scrollView = this.refs.scrollView;
        let imgCount = ImageData.data.length;
        //添加定时器
        // selfThis = this;
        this.timer = setInterval(() => {
            let activePage = 0;
            if ((this.state.currentPage + 1 >= imgCount)) {
                activePage = 0;
                //  this.timer && clearInterval(this.timer);
            } else {
                activePage = this.state.currentPage + 1;
            }
            //更新状态机
            this.setState({
                currentPage: activePage
            });
            //让scrollView 滚动
            const currentX = activePage * width;

            //  scrollView.scrollTo({x:currentX, y:0, animated:true})
            scrollView.scrollResponderScrollTo({x:currentX, y:0, animated:true});
        }, this.props.duration);

    }

    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.mainStyle}>
                    <View style={{height:225, width:width}}>
                        <ScrollView
                            ref='scrollView'
                            //是否展示水平指示器
                            showsHorizontalScrollIndicator={true}
                            //滚动条是否停在滚动视图的尺寸的整数倍位置
                            pagingEnabled={true}
                            //ScrollView 的滑动方向
                            horizontal={true}
                            //手拖拽时 停止计时器
                            //滑动完一贞
                            onMomentumScrollEnd={(e)=>{this._onAnimationEnd(e)}}
                            //开始拖拽
                            onScrollBeginDrag={()=>{this._onScrollBeginDrag()}}
                            //结束拖拽
                            onScrollEndDrag={()=>{this._onScrollEndDrag()}}
                        >
                            {this.rendImage()}
                        </ScrollView>


                        <View style={styles.pagerViewStyle}>

                            {this.renderPagerCircle()}
                        </View>
                    </View>

                    <View style={styles.imageView}>
                        <TouchableOpacity>
                            <View style={styles.imageStyles}>
                                <Image style={{height:100,
                                    width:width-30,}}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/scrollViewImage/time.jpg')}/>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.switchView}>
                            <TouchableOpacity>
                                <View style={styles.item}>
                                    <Text style={styles.text}>订阅</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.item}>
                                    <Text style={styles.text}>公司</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.item}>
                                    <Text style={styles.text}>求职</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.messageList}>
                        <View style={styles.messageListItem}>
                            <View style={{
                                width:width,
                                height:40,
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

                                }}>猎头顾问</Text>
                                <Text style={{
                                    fontSize:16,
                                    color:'red',

                                    alignItems: 'center',
                                    marginRight: 4

                                }}>11-13万</Text>
                            </View>
                            <View style={{
                                width:width,
                                height:30,
                                backgroundColor:'#F5FCFF',
                                flexDirection: 'row',
                                justifyContent:'flex-start',
                                alignItems: 'center',


                            }}>
                                <Text style={styles.textItem}>上海</Text>
                                <Text style={styles.textItem}>|  3年以上</Text>
                                <Text style={styles.textItem}>|  统招本科</Text>
                            </View>
                            <View style={{
                                height:80,
                                backgroundColor:'#F5FCFF',
                                flexDirection: 'row',
                                alignItems: 'center',

                            }}
                            >
                                <Image style={{width:60,height:60,borderRadius:30}}
                                       source={require('/Users/luozhiqiang/myproject/MyApp2/res/images/uzi.jpg')}/>
                                <View style={{
                                    height:70,
                                    alignItems: 'center',
                                    justifyContent:'flex-start',

                                    marginLeft: 20,
                                }}>
                                    <View style={{
                                        width:width-60,
                                        height:30,
                                        backgroundColor:'#F5FCFF',
                                        flexDirection: 'row',
                                        justifyContent:'flex-start',
                                        alignItems: 'center',


                                    }}>
                                        <Text style={{fontSize:18, color:'black',
                                        }}>志同道合科技有限公司</Text>
                                    </View>
                                    <View style={{
                                        width:width-60,
                                        height:30,
                                        backgroundColor:'#F5FCFF',
                                        flexDirection: 'row',
                                        justifyContent:'flex-start',
                                        alignItems: 'center',


                                    }}>
                                        <Text style={styles.textItem}>国内上市公司 </Text>
                                        <Text style={styles.textItem}>|  100～500人 </Text>
                                        <Text style={styles.textItem}>|  专业咨询 </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>

                </ScrollView>
                <TextInput style={styles.textInput}
                           placeholder="搜索关键字">
                </TextInput>
            </View>
        )
    }
};

const styles=StyleSheet.create({

    container:{
        flex:1,


        backgroundColor: '#f5fcff',
    },
    inputView:{
        width:width-8,
        height:35,
        marginTop:35,



    },
    textInput:{
        width:width-8,
        height:35,
        borderColor:'black',
        borderWidth:2,
        position: 'absolute',
        marginTop:30,
        marginLeft:3,
        backgroundColor:'white'



    },
    imageView: {
        height:120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    mainStyle:{
        width:width,
        marginTop:20




    },
    imageStyles:{
        height:100,
        width:width-30,


        backgroundColor:'#F5FCFF'
    },
    images:{
        height:80,
        width:width-30,
        marginLeft:15,
        marginTop:5


    },
    switchView:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        height:30,
        backgroundColor:'white',
    },
    item: {
        height:30,
        width:(width)/3,
        borderColor:'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        fontSize:18,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',

    },
    messageList:{
        flex:1,

        width:width,
        backgroundColor:'#F5FCFF',
    },

    messageListItem:{
        height:155,
        borderColor:'rgba(0,0,0,0.4)',
        backgroundColor:'#F5FCFF',
        borderWidth:1

    },
    textItem:{
        fontSize:15,
        color:'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:3

    }, pagerViewStyle: {
        width: width,
        height:25,
        backgroundColor: 'rgba(0,0,0,0.4)',

        position: 'absolute',
        bottom: 25,
        //主轴方向
        flexDirection: 'row',
        alignItems: 'center',
    },



});*/