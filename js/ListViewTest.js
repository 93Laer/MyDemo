/**
 * 创建人：赖天兵
 * 时间： 2018/2/22
 * 简书：https://www.jianshu.com/u/2229fd214880
 * 掘金：https://juejin.im/user/58647e21128fe1006d0f3f3e
 * github：https://github.com/93Laer
 * 描述：
 */
import React,{Component} from 'react'
import { ListView,View,Text} from 'react-native'
export default class ListViewTest extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 这里控制当当前这行的数据是否改变
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    render() {
        return <View style={{flex: 1, paddingTop: 22}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={{height:50,backgroundColor:'olive',margin: 10}}>{rowData}</Text>}
                />
        </View>
    }
}
