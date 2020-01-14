// 可复用的antd组件集合

import * as React from 'react';
import { message, notification} from "antd";

export class ComponentExt<P = {}, S = {}> extends React.Component<P, S>{
    $message = message;
    $notification = notification;
}