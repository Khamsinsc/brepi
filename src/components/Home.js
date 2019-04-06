import React from 'react';
import { Tooltip, Icon, Badge, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
const { Content, Footer } = Layout;
const imgURL = 'http://wallsdesk.com/wp-content/uploads/2016/10/Beer-HD-Desktop.jpg';
const githubURL = "https://github.com/green-fox-academy/Khamsinsc";

const divStyle = {
  marginTop: '10px',
  background: '#fff',
  padding: 24,
  minHeight: '85vh'
}

const Home = () => {
  return (
    <Layout className="layout">
      <Content style={ { padding: '0 50px' } }>
        <div style={ divStyle }>
          <h1>This is a homepage for Brepi exercise</h1>
          <NavLink to='/beers'>
            <Tooltip title="Click to enter!">
              <img src={ imgURL } />
            </Tooltip>
          </NavLink>
        </div>
      </Content>
      <Footer style={ { textAlign: 'center' } }>
        Created by Khamsinsc@GFA <a href={ githubURL }> <span>{ `Github:  ` }</span>

          <Badge>
            <Icon type='github' /><span className="head-example" />
          </Badge>

        </a>
      </Footer>
    </Layout >
  )
}

export default Home;
