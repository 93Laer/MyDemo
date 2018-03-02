/**
 * Created by laer on 2018/2/5.
 */
import React,{Component }from 'react';
import {Text}from 'react-native';
import PropTypes from 'prop-types';
export default class  PropsTest extends Component{
    static defaultProps={ name: 'xiao ming'}
    //约束的关键就是这里在定义属性的时候指定属性的类型，类似安卓private String name;
    static propTypes={
        name: PropTypes.string
        , age: PropTypes.number
        , sex: PropTypes.string.isRequired }
    render(){
        //在这里我们使用props中的name属性
        return <Text>{this.props.name}+' age:'+{this.props.age}+'  sex:'+{this.props.sex}</Text>
    }
}