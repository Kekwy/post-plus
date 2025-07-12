import React, {useState} from 'react';
import {Button, Layout, theme} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './HomePage.css';
import Navigation from "../components/Navigation";
import HomeRoutes from "../components/HomeRoutes";

const HomePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer, borderRadiusLG},
  } = theme.useToken();

  const {Header, Sider, Content} = Layout;

  const containerStyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
  };

  return (
    <Layout style={containerStyle}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical"/>
        <Navigation/>
      </Sider>
      <Layout>
        <Header style={{padding: 0, background: colorBgContainer, display: "flex"}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <HomeRoutes/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;