import * as React from 'react';
import { Button } from "antd";
import { ComponentExt } from '@utils/reactExt';

@log
class Login extends  ComponentExt{
    render() {
        return (
            <div>
                <p className='test'>login page</p>
                <Button type="primary" onClick={this.showMsg}>login</Button>
            </div>
        )
    }

    showMsg = () => {
        this.$message.success('这是一个通知');
    }
}


function log(target: any) {
    console.log(target);
}

export default Login;