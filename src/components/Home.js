import React, { useEffect } from 'react';
import { Tooltip, Icon, Badge, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { menupage } from '../actions/actions';
const { Content, Footer } = Layout;
const imgURL = 'http://wallsdesk.com/wp-content/uploads/2016/10/Beer-HD-Desktop.jpg';
const githubURL = "https://github.com/Khamsinsc/brepi";
const antDesignURL = 'https://ant.design/';
const divStyle = {
  marginTop: '10px',
  background: '#fff',
  padding: 24,
  maxHeight: "85vh",
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'hidden'
}

const Home = ({ onClick, onMount }) => {
  useEffect(() => onMount(['home']), []);

  return (
    <Layout className="layout">
      <Content style={ { padding: '0 50px' } }>
        <div style={ divStyle }>
          <h1>This is a homepage for Brepi exercise</h1>
          <NavLink to='/beers'>
            <Tooltip title="Click to enter!">
              <img onClick={ () => onClick(['beers']) } className="bgimg" src={ imgURL } />
            </Tooltip>
          </NavLink>
        </div>
      </Content>
      <Footer style={ { textAlign: 'center' } }>
        Created by Khamsinsc@GFA
         <a href={ githubURL }> <span>{ `Github:  ` }</span>
          <Badge>
            <Icon type='github' /><span className="head-example" />
          </Badge>
        </a>
        <p>Designed with <a href={ antDesignURL }><Icon type='ant-design' /> Antdesign </a></p>
      </Footer>
    </Layout >
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (e) => {
      dispatch(menupage(e))
    },
    onMount: (page) => {
      dispatch(menupage(page));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
