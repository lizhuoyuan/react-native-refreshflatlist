/**
 * Created by jiajiewang on 2017/6/27.
 */

import React from 'react';
import {
    View,
    requireNativeComponent,
    Platform,
} from 'react-native';

export default class AndroidSwipeRefreshLayout extends React.Component {

    //类型判断
    static propTypes = {
        ...View.propTypes,
        refreshing: React.PropTypes.bool,
        enabledPullUp: React.PropTypes.bool,
        enabledPullDown: React.PropTypes.bool,
        onSwipe: React.PropTypes.func,
        onRefresh: React.PropTypes.func,
    }

    setNativeProps(props) {
        this._nativeSwipeRefreshLayout.setNativeProps(props)
    }

    _onSwipe = (e) => {
        this.props.onSwipe(e.nativeEvent.movement)
    }

    _onRefresh = () => {
        this.props.onRefresh()
    }

    render() {
        return (
            <NativeSwipeRefreshLayout
                {...this.props}
                ref={ (component) => this._nativeSwipeRefreshLayout = component }
                onSwipe={this._onSwipe}
                onSwipeRefresh={this._onRefresh}
            />
        );
    }
}

const NativeSwipeRefreshLayout = Platform.OS == 'ios' ? View : requireNativeComponent('RCTSwipeRefreshLayout', AndroidSwipeRefreshLayout)
