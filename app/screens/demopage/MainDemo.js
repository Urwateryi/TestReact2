/**
 * Description:引导页
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import ImageBackGroundDemo from "./widgets/ImageBackGroundDemo";
import InputDemo from "./widgets/InputDemo";
import RefDemo from "./widgets/RefDemo";
import StorageDemo from "./widgets/StorageDemo";

import Colors from '../../resources/Colors'
import TxtPicPageDemo from "./widgets/TxtPicPageDemo";
import {jumpPager} from "../../utils/PageUtil";
import AnimateDemo from "./widgets/AnimateDemo";
import LifeCycleDemo from "./widgets/LifeCycleDemo";
import { RnAndroidCommunicationDemo } from "./widgets/RnAndroidCommunicationDemo";
import SkipDemo from "./widgets/SkipDemo";
import PickerDemo from "./widgets/PickerDemo";
import CameraRollDemo from "./widgets/CameraRollDemo";
import LinkDemo from "./widgets/LinkDemo";
import ModalDemo from "./widgets/ModalDemo";
import PropsDemo from "./widgets/PropsDemo";

var strList=[
    {
        key:'Text',
        content:'TextDemo'
    },
    {
        key:'Image',
        content:'ImageDemo'
    },
    {
        key:'Camera',
        content:'CameraDemo'
    },
    {
        key:'ImageBackground ',
        content:'ImageBackGroundDemo'
    },
    {
        key:'Input',
        content:'InputDemo'
    },
    {
        key:'Button',
        content:'ButtonDemo'
    },
    {
        key:'ScrollView',
        content:'ScrollViewDemo'
    },
    {
        key:'CameraRoll',
        content:'CameraRollDemo'
    },
    {
        key:'Ref',
        content:'RefDemo'
    },
    {
        key:'WebView',
        content:'WebViewDemo'
    },
    {
        key:'Storage',
        content:'StorageDemo'
    },
    {
        key:'Picker',
        content:'PickerDemo'
    },
    {
        key:'Refresh',
        content:'RefreshDemo'
    },
    {
        key:'CheckBox',
        content:'CheckBoxDemo'
    },
    {
        key:'Toast',
        content:'ToastDemo'
    },
    {
        key:'Link',
        content:'LinkDemo'
    },
    {
        key:'Modal',
        content:'ModalDemo'
    },
    {
        key:'Video',
        content:'VideoDemo'
    },
    {
        key:'Media',
        content:'MediaDemo'
    },
    {
        key:'Swiper',
        content:'SwiperDemo'
    },
    {
        key:'Props',
        content:'PropsDemo'
    },
    {
        key:'AsyncStorage',
        content:'AsyncStorageDemo";'
    },
    {
        key:'长列表FlatList',
        content:'FlatListDemo'
    },
    {
        key:'分组列表SectionList',
        content:'SectionListDemo'
    },
    {
        key:'图文列表',
        content:'TxtPicPageDemo'
    },
    {
        key:'页面跳转，数据回传',
        content:'SkipDemo'
    },
    {
        key:'网络请求',
        content:'NetDemo'
    },
    {
        key:'生命周期',
        content:'LifeCycleDemo'
    },
    {
        key:'动画',
        content:'AnimateDemo'
    },
    {
        key:'进度圈',
        content:'AnimateDemo'
    },
    {
        key:'自定义控件',
        content:'CustomCompontDemo'
    },
    {
        key:'聚合页面',
        content:'此页面主要测试聚合页面'
    },
    {
        key:'与Android交互',
        content:'RnAndroidCommunicationDemo'
    },
    {
        key:'与iOS交互',
        content:'此页面主要测试与原生iOS交互'
    },
    {
        key:'热更新',
        content:'此页面主要测试与原生iOS交互'
    },
    {
        key:'打包',
        content:'PickUpDemo'
    },
];

export default class MainDemo extends PureComponent{
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={strList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item) => item.key;

    //列表的每一行
    renderItem({item}) {
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.clickItem.bind(this,item)}>
                <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        //跳转方法一：
        // console.log(item.content+"///"+item.key)
        // const {navigate} = this.props.navigation;
        // navigate(item.content);

        //跳转方法二：
        jumpPager(this.props.navigation.navigate,item.content)
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.bg,
    },
    item:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        fontSize:18,
        backgroundColor:'white',
        height:55,
        borderBottomWidth: 1,
        borderBottomColor:Colors.border
    }, one: {
        fontSize: 30,
        textAlign: 'center',
        color: Colors.gray,
    }
});