/**
 * 创建人：赖天兵
 * 时间： 2018/2/22
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
export default class FlexboxTest extends Component{
    render(){
        //todo column（默认布局方向）
        //return <View style={styles.containerStyleColumn}>
        //    <View style={styles.itemStyle}/>
        //    <View style={styles.itemStyle}/>
        //    <View style={styles.itemStyle}/>
        //    <View style={styles.itemStyle}/>
        //</View>
        //todo column-reverse
        //return <View style={styles.containerStyleColumnReverse}>
        //    <View style={styles.itemStyle}/>
        //    <View style={styles.itemStyle}/>
        //    <View style={styles.itemStyle}/>
        //</View>

        //todo row
        //return <View style={stylesRow.containerStyleRow}>
        //    <View style={stylesRow.itemStyle}/>
        //    <View style={stylesRow.itemStyle}/>
        //    <View style={stylesRow.itemStyle}/>
        //</View>
         //todo column-reverse
        //return <View style={stylesRow.containerStyleRowReverse}>
        //    <View style={stylesRow.itemStyle}/>
        //    <View style={stylesRow.itemStyle}/>
        //    <View style={stylesRow.itemStyle}/>
        //</View>
         //todo flexWrap:nowrap
        //return <View style={stylesWrap.containerStyleRowNoWrap}>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //    <View style={stylesWrap.itemStyle}/>
        //</View>
        //todo flexWrap:wrap
        return <View style={stylesWrap.containerStyleRowWrap}>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
            <View style={stylesWrap.itemStyle}/>
        </View>

    }
}
const styles=StyleSheet.create({
    containerStyleColumn:{
        flex:1,
        backgroundColor:'black'
    },
    containerStyleColumnReverse:{
        flex:1,
        backgroundColor:'black',
        flexDirection:'column-reverse'
    },
    itemStyle:{
        height:60,
        margin:20,
        backgroundColor:'red'
    },
});

const stylesRow=StyleSheet.create({
    containerStyleRow:{
        flexDirection:'row',
        height:200,
        backgroundColor:'black'
    },
    containerStyleRowReverse:{
        flexDirection:'row-reverse',
        height:200,
        backgroundColor:'black'
    },
    itemStyle:{
        width:60,
        margin:20,
        backgroundColor:'red'
    },
});
const stylesWrap=StyleSheet.create({
    containerStyleRowNoWrap:{
        flexDirection:'row',
        backgroundColor:'black',
        //flexWrap:'nowrap'默认
    },
    containerStyleRowWrap:{
        flexDirection:'row',
        height:200,
        backgroundColor:'black',
        flexWrap:'wrap'
    },
    itemStyle:{
        height:50,
        width:60,
        margin:10,
        backgroundColor:'red'
    },
});