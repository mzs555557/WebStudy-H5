import React, {Component} from 'react';
import {List , InputItem, WhiteSpace , Card ,WingBlank} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
class Login extends Component {
    render() {
        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                    <Card.Header
                        title="This is title"
                        thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div>This is content of `Card`</div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }
}

export default Login;
