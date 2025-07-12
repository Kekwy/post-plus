import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ConfigProvider} from "antd";
import {createStyles} from 'antd-style';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";

const useStyle = createStyles(({prefixCls, css}) => ({
  linearGradientButton: css`
      &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
          > span {
              position: relative;
          }

          &::before {
              content: '';
              background: linear-gradient(135deg, #6253e1, #04befe);
              position: absolute;
              inset: -1px;
              opacity: 1;
              transition: all 0.3s;
              border-radius: inherit;
          }

          &:hover::before {
              opacity: 0;
          }
      }
  `,
}));

function App() {
  const {styles} = useStyle();

  return (

    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Router>
        <div className="App">
          <Routes>
            {/* 首页路由 */}
            <Route
              path="/"
              element={
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                  <Link to="/home">
                    <Button type="primary">进入首页</Button>
                  </Link>
                </header>
              }
            />
            {/* HomePage 及其子路由 */}
            <Route path="/home/*" element={<HomePage/>}/> {/* 注意 /* 通配符 */}
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
