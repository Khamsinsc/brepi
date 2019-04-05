import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <NavLink to="/"></NavLink><Icon type="home" />Home
      </Menu.Item>
      <Menu.Item key="beers">
        <NavLink to="/beers"></NavLink><Icon type="heart" />Beers
      </Menu.Item>
      <Menu.Item key="orders">
        <NavLink to="/orders"><Icon type="pay-circle" />Orders</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default Header;