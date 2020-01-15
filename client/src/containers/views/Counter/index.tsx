import * as React from 'react';
import { ComponentExt } from "@utils/reactExt";
import {inject, observer} from "mobx-react";
import { hot } from 'react-hot-loader';

//这里注意需要添加?，因为这个属性是从store中拿过来的，不填写的话，父组件会报错说没有传这个值。
interface Iprops {
    globalStore?: IGlobalStore.GlobalStore,
}


// 用hot装饰器装饰了整个模块，这样更新这个模块内容的同时可以保留数据
@hot(module)
// @inject 注入globalStore，@observer变为可观测的对象
@inject('globalStore')
@observer
class Counter extends ComponentExt<Iprops> {

    increase = () => {
        this.props.globalStore.increase();
    }

    decrease = () => {
        this.props.globalStore.decrease();
    }

    render() {
        const { num } = this.props.globalStore;
        return(
            <div>
                <span>{ num }</span>
                <button onClick={this.increase}>增加++</button>
                <button onClick={this.decrease}>减少--</button>
            </div>
        )
    }
}

export default Counter;
