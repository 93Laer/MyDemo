/**
 * 创建人：赖天兵
 * 时间： 2018/2/6
 * 描述：多种方式定义样式，以及当传入一个样式数组时，以哪个样式为准
 */
import React,{ Component } from  'react';
import {StyleSheet,Text} from 'react-native';
export default class StyleTest extends Component{
    render(){
        //todo 设置样式一,直接在render中定义样式
        var mStyle = {color:'red',fontSize:34};
        //return<Text style={mStyle}> https://github.com/93Laer </Text>
        //内属于安卓中的匿名内部内
        //return<Text style={{color:'red',fontSize:34}}> https://github.com/93Laer </Text>

        //todo 设置样式二，通过StyleSheet创建样式
        //return<Text style={styles.bigblue}> https ://github.com/93Laer </Text>

        //todo 测试给组件设置多个样式,结论是当设置多个style时以最后一个为准，可理解为最后一个将之前的样式覆盖了
        //return<Text style={[mStyle,{color: 'blue',fontSize:20}]}> https ://github.com/93Laer </Text>
        return<Text style={[styles.bigblue,styles.red]}> https ://github.com/93Laer </Text>
    }
}


const styles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontSize:34,
        fontWeight:'bold'
    },
    red:{
        color:'red',
        fontSize:14
    }
});