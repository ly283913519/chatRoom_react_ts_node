import * as React from 'react';
import { Button } from "antd";
// import 'antd/lib/button/style/index.less'

@log
class Login extends  React.Component{
    render() {
        return (
            <div>
                login page
                <Button type="primary">login</Button>
            </div>
        )
    }
}


function log(target: any) {
    console.log(target);
}

export default Login;