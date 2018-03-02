/**
 * 创建人：赖天兵
 * 时间： 2018/2/6
 * 描述：
 */
import React,{Component }from 'react';
import {Text,View}from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
export default class StateTest extends Component {

//方式一
        state = {
            num: 0
        }


    // 构造
    constructor(props) {
        super(props);

//方式二
//        this.state = {
//            num: 0
//        }

        // 每1000毫秒对num+1
        setInterval(() => {
            //这种方式修改state是无效的，必须调用setState（）才能起作用
            //this.state= ++this.state.num;

            //this.setState(previousState => {
            //    return {num: ++this.state.num};
            //});

            //也可以这样写，这样写也就可以直接拿到props，有可能我们的业务需要用到props
            this.setState((prevState, props) =>{
                return {num: ++this.state.num};
            } );

            // todo 添加监听是否更新的callback
            //
            //this.setState(prevState =>{
            //    return {num: ++this.state.num};
            //});

        }, 1000);
    }

    render() {
        var msg = this.state.num
        return (
            <View>
                <Text size={32} color= {'red'}>{msg}</Text>
                <Toast ref="toast"/>
            </View>

        );
    }
}