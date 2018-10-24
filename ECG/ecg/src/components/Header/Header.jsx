import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {NavBar , Icon} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import ProTypes from "prop-types";
class Header extends Component {
    render() {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {window.location.href='/'}}
                rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
                ]}
                >返回首页</NavBar>
            </div>
        );
    }
}

export default Header;
