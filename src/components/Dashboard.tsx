import React from 'react';
import { Layout, Space, Tag } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
export const Dashboard = () => (
  <div>
    <Layout>
      <Header
        style={{
          fontWeight: 600,
          textAlign: 'center',
          backgroundImage: 'linear-gradient(to top right, #FFE4E1,#FFF8DC)',
          padding: '0 16px',
        }}
      >
        <a style={{ color: '#BC8F8F' }} href='/'>
          SURVEY
        </a>
      </Header>
      <Content
        style={{
          textAlign: 'center',
          padding: '24px',
          backgroundImage: 'linear-gradient(to bottom right,#FFE4E1,#FFF8DC)',
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          color: '#FFFFFF',
          fontWeight: 600,
          textAlign: 'center',
          backgroundImage: 'linear-gradient(to top right,#FFE4E1,#FFF8DC)',
          padding: '0 16px',
        }}
      >
        <Space size={[0, 8]} wrap>
          <a href='https://twitter.com/home?lang=en' target='_blank' rel='noreferrer'>
            <Tag icon={<TwitterOutlined rev={undefined} />} color='#BC8F8F'>
              Twitter
            </Tag>
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <Tag icon={<YoutubeOutlined rev={undefined} />} color='#BC8F8F'>
              Youtube
            </Tag>
          </a>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
            <Tag icon={<FacebookOutlined rev={undefined} />} color='#BC8F8F'>
              Facebook
            </Tag>
          </a>
          <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'>
            <Tag icon={<LinkedinOutlined rev={undefined} />} color='#BC8F8F'>
              LinkedIn
            </Tag>
          </a>
        </Space>
      </Footer>
    </Layout>
  </div>
);
