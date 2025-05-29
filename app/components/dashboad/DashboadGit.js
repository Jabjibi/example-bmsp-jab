import React, { useEffect, useState } from 'react';
import { Card, Avatar, Row, Col, Table, Tag, Typography, Spin, message } from 'antd';
import {
  GithubOutlined,
  UserOutlined,
  UserAddOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const DashboardGit = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);

  useEffect(() => {
    // Fetch user profile data
    fetch('https://api.github.com/users/Jabjibi')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        return res.json();
      })
      .then(data => {
        setUserData(data);
        setLoadingUser(false);
      })
      .catch(err => {
        console.error(err);
        message.error('Unable to retrieve');
        setLoadingUser(false);
      });

    // Fetch user repositories
    fetch('https://api.github.com/users/Jabjibi/repos')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return res.json();
      })
      .then(data => {
        setRepos(data);
        setLoadingRepos(false);
      })
      .catch(err => {
        console.error(err);
        message.error('Unable to retrie Repository ได้');
        setLoadingRepos(false);
      });
  }, []);

  const columns = [
    {
      title: 'Name Repository',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a href={record.html_url} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      render: (lang) => (
        <Tag color={lang === 'JavaScript' ? 'gold' : lang === 'TypeScript' ? 'blue' : 'default'}>
          {lang || 'N/A'}
        </Tag>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['md'],
    },
    {
      title: 'Last Update',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render: (date) => new Date(date).toLocaleDateString(),
      responsive: ['lg'],
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>
        <GithubOutlined /> GitHub Dashboard
      </Title>
      {loadingUser ? (
        <Spin spinning={loadingUser} tip="loading data of user...">
          <div style={{ height: 80 }} />
        </Spin>

      ) : (
        userData && (
          <Card style={{ marginBottom: '24px' }}>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={6} md={4}>
                <Avatar size={100} src={userData.avatar_url} />
              </Col>
              <Col xs={24} sm={18} md={20}>
                <Title level={4}>{userData.name || userData.login}</Title>
                <Paragraph>
                  <UserOutlined style={{ marginRight: 6 }} />
                  <strong>Followers:</strong> {userData.followers}
                  {'  |  '}
                  <UserAddOutlined style={{ margin: '0 6px 0 12px' }} />
                  <strong>Following:</strong> {userData.following}
                  {'  |  '}
                  <FolderOpenOutlined style={{ margin: '0 6px 0 12px' }} />
                  <strong>Public Repos:</strong> {userData.public_repos}
                </Paragraph>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile GitHub
                </a>
              </Col>
            </Row>
          </Card>
        )
      )}
      {loadingRepos ? (
        <Spin spinning={true} tip="Loading of Repository...">
          <div style={{ minHeight: 200 }} /> {/* ให้ Spin มีพื้นที่แสดง */}
        </Spin>
      ) : (
        <Table
          columns={columns}
          dataSource={repos}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      )}

    </div>
  );
};

export default DashboardGit;
