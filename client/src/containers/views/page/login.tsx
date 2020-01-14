import * as React from 'react';
import { Button } from "antd";

@log
class Login extends  React.Component{
    render() {
        return (
            <div>
                <p className='test'>login page</p>
                <Button type="primary">login</Button>
            </div>
        )
    }
}


function log(target: any) {
    console.log(target);
}

export default Login;