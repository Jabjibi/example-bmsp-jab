import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  GithubOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

import AboutMe from '../aboutme/AboutMe';
import DashboardGit from '../dashboad/DashboadGit';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dasboad Git', '1', <GithubOutlined />),
  getItem('About Me', '2', <UserOutlined />),
  // getItem('', 'sub1', , [
  //   getItem('About Jab', '3'),
  //    getItem('Bill', '4'),
  //    getItem('Alex', '5'),
  // ]),
  getItem('My friend', 'sub2', <TeamOutlined />, [getItem('N.Boss', '6')]),
  getItem('Files', '9', <FileOutlined />),
];
const breadcrumb ={
  '1':[{ title: "Dashboad Git"}],
  '2':[{ title: "About Me", title: "About Jab"}]
};

const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" 
          defaultSelectedKeys={['1']}
          mode="inline" 
          items={items} 
          onClick={({ key }) => setSelectedKey(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb 
            style={{ margin: '16px 0' }}
            items= {breadcrumb[selectedKey] || []} 
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* 🔸 select in menu kub ex.key === '3' */}
            {selectedKey === '1' && <DashboardGit />}
            {selectedKey === '2' && <AboutMe />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Nav;