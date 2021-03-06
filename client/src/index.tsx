// 入口文件
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Login from '@views/Page/login';
import Counter from '@views/Counter/index';

// 引入antd样式
import { ConfigProvider, DatePicker, message } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

// 引入数据库
import * as store from './store';
import { configure } from "mobx";
import { Provider } from 'mobx-react';
import "./styles/index.scss";

// 用于限制被observable(也就是store中添加了@observable)的数据的修改方式，让其只能在添加了@action的函数中进行修改。
configure({enforceActions: 'observed'});

const render = () => {
    ReactDom.render(
        <Provider {...store}>
            <Login/>
            <Counter/>
            {/*<p className={styles.test}>login page</p>*/}
        </Provider>,
        document.querySelector('#app')
    )
};

render();