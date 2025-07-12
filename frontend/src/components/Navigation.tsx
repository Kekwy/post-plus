import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {HomeOutlined, UserOutlined, EditOutlined} from '@ant-design/icons';

const items = [
  {
    key: '/home',
    label: <Link to="/home">首页</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: '/home/articles',
    label: <Link to="/home/articles">文章</Link>,
    icon: <EditOutlined />,
  },
  {
    key: '/home/about',
    label: <Link to="/home/about">关于</Link>,
    icon: <UserOutlined />,
  },
];

const Navigation = () => {
  const location = useLocation();
  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      items={items}
    />
  );
};

export default Navigation;
