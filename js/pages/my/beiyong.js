import React, {Component} from 'react';
import {

    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ImageData from "./imageData.json";


const {width, height} = require('Dimensions').get('window');

//引入计时器类库
export default class  extends Component {

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
        //开启定时器
        this.startTimer();
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    //注册
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    //是否展示水平指示器
                    showsHorizontalScrollIndicator={false}
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
        );
    }

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
                <Image key={i} source={{uri: imgItem.icon}} style={{width: width, height: 200,marginTop:10}}/>
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
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    pagerViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.4)',

        position: 'absolute',
        bottom: 0,
        //主轴方向
        flexDirection: 'row',
        alignItems: 'center',
    },
});
