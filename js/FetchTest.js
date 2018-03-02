/**
 * 创建人：赖天兵
 * 时间： 2018/2/22
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React,{Component} from 'react'
import {Text,ListView,Image,View,StyleSheet} from 'react-native'
export default class FetchTest extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    componentWillMount() {
        this.getData()
    }

    getData = ()=> {
        //请求网络
        fetch(`https://api.github.com/search/repositories?q=Android&sort=stars`)
            .then(response=>response.json())
            .then(json=> {
                //console.error(json);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(json.items)
                })
            })
            .catch((error)=> {
                console.error(error);
            })
            .done()
    }
    //绘制item
    renderItem = (item)=> {
        return <View style={styles.itemStyle}>
            <Image style={{width:88,height:88,backgroundColor:'#ffffff'}} source={{uri:item.owner.avatar_url}}/>
            <Text style={{marginLeft:40}}>{item.name}</Text>
        </View>;
    }

    render() {
        return <View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27282d',
    },
    itemStyle: {
        backgroundColor: '#70c8ac',
        margin: 10,
        alignItems: 'center',
        flexDirection:'row'
    }
});