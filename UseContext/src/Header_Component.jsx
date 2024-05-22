import React from 'react';
import { Menu } from 'antd';

function Header_Component() {
    return (
        <>
            <div className="container-fluid">
                <div className="header">
                    <div className="logo">
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">About</Menu.Item>
                            <Menu.Item key="3">Service</Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header_Component