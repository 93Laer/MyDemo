/**
 * 创建人：赖天兵
 * 时间： 2018/2/24
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React from 'react';
import { StyleSheet,View, Text,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
class HomeScreen  extends React.Component {
    //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        //标题
        headerTitle: '主页面',
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    //这里跳转的页面是我们已经在StackNavigator中注册了的，如果是没注册又会发生什么呢
                    onPress={() => this.props.navigation.navigate('Details',{title:'这是主界面传递的title'})}
                    />
            </View>
        )
    }
}
class DetailsScreen  extends React.Component {
    //设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        //标题
        headerTitle: navigation.state.params.title,
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,
    });

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.navigation.state.params.title}</Text>
                <Button
                    title="Go to Details again"
                    //这里跳转的页面是我们已经在StackNavigator中注册了的，如果是没注册又会发生什么呢
                    onPress={() => this.props.navigation.navigate('Details',{title:'再一次跳转详情页'})}
                    />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                    />
            </View>
        );
    }
}
export default StackNavigator({
        //todo 1、直接展示
        //AppHome: {screen: HomeScreen}


        //todo 2、初始化多条线路，通过initialRouteName控制初始化那一个路由
        Home: {
            screen: HomeScreen,
        },
        Details: {
            screen: DetailsScreen,
        },
    },
    {
        //通过initialRouteName来控制初始化哪一个路由
        initialRouteName: 'Home',
    }
);
const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#4398ff',
    },
    headerTitleStyle: {
        //标题的文字颜色
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
});
