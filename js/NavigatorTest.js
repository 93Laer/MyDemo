/**
 * 创建人：赖天兵
 * 时间： 2018/2/24
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React from 'react';
import { View, Text,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
class HomeScreen  extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    //这里跳转的页面是我们已经在StackNavigator中注册了的，如果是没注册又会发生什么呢
                    onPress={() => this.props.navigation.navigate('Details')}
                    />
            </View>
        )
    }
}
class DetailsScreen  extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details again"
                    //这里跳转的页面是我们已经在StackNavigator中注册了的，如果是没注册又会发生什么呢
                    onPress={() => this.props.navigation.navigate('Details')}
                    />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack('Home')}
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