/**
 * Created by laer on 2018/2/5.
 */
import React,{Component }from 'react';
//import PropsText from './js/PropsTest.js';
//import StateTest from './js/StateTest.js';
//import StyleTest from './js/StyleTest.js';
//import FlexTest from './js/FlexTest.js';
//import FlexboxTest from './js/FlexboxTest.js';
//import TextInputTest from './js/TextInputTest.js';
//import ScrollViewTest from './js/ScrollViewTest.js';
//import ListViewTest from './js/ListViewTest.js';
//import FetchTest from './js/FetchTest.js';
import NavigatorTest from './js/NavigatorTest.js';
export default class HomePager extends Component {
    render() {
        //todo 属性测试
        //var params = {name: 'Laitianbing', age: 18, sex: 'man'}
        // return<PropsText name={'Laitianbing'} sex={22} age={23}/>
        //return<PropsText name = {params.name} sex = {params.sex} age = {params.age}/>
        //return<PropsText {...params}/>//params前面三个点和Markdown语言的...及安卓的...都是一个意思就是多个的意思，就是说携带多个属性或是说携带全部属性

        //todo 测试state
        //return<StateTest/>

        //todo 测试style
        //return<StyleTest/>

        //todo 测试flexbox
        //return <FlexTest/>

        //todo 测试flexbox
        //  return <FlexboxTest/>

        //todo 处理文本输入
        //return <TextInputTest/>

        //todo ScrollView 的使用
        //return<ScrollViewTest/>
        //todo ListView 的使用
        //return <ListViewTest/>
        //todo FetchTest 的使用
        //return <FetchTest/>
        //todo NavigatorTest 的使用
        return <NavigatorTest/>
    }
}
