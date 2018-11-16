import React,{Component} from 'react'
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
export  default class PositionPage extends Component {
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

                        {/*指示器*/}
                        <View style={styles.pagerViewStyle}>
                            {/*   返回圆点*/}
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



});
