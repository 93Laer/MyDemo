/**
 * 创建人：赖天兵
 * 时间： 2018/2/24
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React, { Component } from 'react';
import {
    Text
    ,StyleSheet
    } from 'react-native';

export default class HelloWorldApp extends Component {
  render(){
      return(
          //<Text style={styles.helloWorld}>Hello world!</Text>
          <Text style={{color: 'red',fontSize:34,fontWeight:'bold'}}>Hello world!</Text>
      );
  }
}
const  styles=StyleSheet.create({
    helloWorld:{
        color:'red',//颜色红色
        fontSize:34,//
        fontWeight:'bold'//粗体
    }
})
