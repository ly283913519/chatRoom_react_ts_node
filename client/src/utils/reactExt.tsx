// 可复用的antd组件集合

import * as React from 'react';
import { message, notification} from "antd";

// 这里用到泛型来灵活化state和props的interface
export class ComponentExt<P = {}, S = {}> extends React.Component<P, S>{
    $message = message;
    $notification = notification;
}