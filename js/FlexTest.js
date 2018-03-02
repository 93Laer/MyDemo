/**
 * 创建人：赖天兵
 * 时间： 2018/2/11
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React,{Component}from 'react';
import {Text,View}from 'react-native'
var Dimensions = require('Dimensions');
var PixelRatio = require('PixelRatio');
export default class FlexTest extends Component{
    render() {
        //todo 打印屏幕宽高
        //return <Text >
        //    window.width={Dimensions.get('window').width + '\n'}
        //    window.height={Dimensions.get('window').height + '\n'}
        //    pxielRatio={PixelRatio.get()}
        //</Text>

        //todo 控件宽高设置
        //return <View>
        //    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        //    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        //    <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
        //</View>

        //todo flex 使用
        return<View style={{flex: 1}}>
            <Text style={{width: 50, height: 50,backgroundColor: 'powderblue'}} >文本1</Text>
            <Text style={{width: 50, height: 50, flex:1,backgroundColor: 'skyblue'}} >文本2</Text>
            <Text style={{width: 50, flex:1, height: 50,backgroundColor: 'red'}} >文本3</Text>
            <Text style={{ width: 50,flex:1, backgroundColor: 'steelblue'}} >文本4</Text>
            <Text style={{flex:1, backgroundColor: 'olive'}} >文本5</Text>
            <Text style={{flex:2, backgroundColor: 'green'}} >文本6</Text>
        </View>

    }
}