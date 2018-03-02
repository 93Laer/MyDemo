/**
 * 创建人：赖天兵
 * 时间： 2018/2/22
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React,{Component} from 'react';
import {
    Text,
    TextInput,
    View} from 'react-native';
export default class TextInputTest extends Component{
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render(){
        return <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                />
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '*').join(' ')}
            </Text>
        </View>
    }
}

