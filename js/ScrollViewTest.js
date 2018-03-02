/**
 * 创建人：赖天兵
 * 时间： 2018/2/22
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React,{Component} from 'react'
import {ScrollView,Image} from 'react-native'
export default class ScrollViewTest extends Component{
    render(){
        return<ScrollView>
            <Image source={require('../img/img1.jpg')} />
            <Image source={require('../img/img2.jpg')} />
            <Image source={require('../img/img3.jpg')} />
            <Image source={require('../img/img4.jpg')} />
            <Image source={require('../img/img5.jpg')} />
            <Image source={require('../img/img6.jpg')} />
        </ScrollView>
    }
}
