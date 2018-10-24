import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
// import { withRouter } from 'react-router-dom';
import ProTypes from 'prop-types';
import 'antd-mobile/dist/antd-mobile.css';
import './Footer.css';

import My from '../My/My';
import Heart from '../Heart/Heart';
import FindDoctor from '../FindDoctor/FindDoctor';


class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }
    render() {
        return (
            <div style={{
                height: '100vh'
            }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    style={{
                        position: 'fixed',
                        botttom: 0
                    }}
                >
                    <TabBar.Item
                        title="医生"
                        key="医生"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('./imgs/doctor.png')}) center center /  22px 22px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('./imgs/doctor-active.png')}) center center /  22px 22px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {/* {this.renderContent('生活')} */}
                        <FindDoctor></FindDoctor>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('./imgs/contact.png')}) center center /  22px 22px no-repeat`
                        }}
                        />}
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('./imgs/contact-active.png')}) center center /  22px 22px no-repeat`
                        }}
                        />}
                        title="消息"
                        key="消息"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {/* {this.renderContent('口碑')} */}
                        消息
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('./imgs/heart.png')}) center center /  22px 22px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('./imgs/heart-active.png')}) center center /  22px 22px no-repeat`
                            }}
                            />
                        }
                        title="心电"
                        key="心电"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {/* {this.renderContent('心电')} */}
                        <Heart></Heart>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('./imgs/my.png')}) center center /  22px 22px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('./imgs/my-active.png')}) center center /  22px 22px no-repeat`
                            }}
                            />
                        }
                        title="我的"
                        key="我的"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {/* {this.renderContent('我的')} */}
                        <My></My>
                    </TabBar.Item>
                </TabBar>
            </div>

        );
    }
}




export default Footer;

const styles = {
    posfix: {
        position: 'fixed',
        bottom: 0
    }
}