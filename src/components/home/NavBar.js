import React from 'react';
import style from "./NavBar.module.css"
import { Layout, Menu} from 'antd';
import {
    UploadOutlined,
    HomeOutlined,
    LogoutOutlined,
    PictureOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

// Manapulate the items in the list
const items = [
    getItem('Welcome', '/welcome', <HomeOutlined />),
    getItem('Upload Picture', '/upload-pic', <UploadOutlined />),
    getItem('Search Picture', '/search', <PictureOutlined />, [
        getItem('By tag', '/search/by-tag'),
        getItem('By picture', '/search/by-pic'),
    ]),
    getItem("System Management","/management",<SettingOutlined />),
    getItem('Logout', '/logout', <LogoutOutlined />),
];

// If you want to change logo, do this in style sheet
const logo = style.logo

export default function NavBar (props) {
    let history = useHistory()

    const onClick = (e)=>{
        let path = e.key
        if (path === "/logout"){
            history.push("/login")
            localStorage.removeItem("token")
        }else{
            history.push(path)
        }

    }

    return (
        <Sider>
            <div className={logo} />
            <Menu onClick={onClick} theme="dark" defaultSelectedKeys={['/welcome']} mode="inline" items={items} />
        </Sider>
    );
}