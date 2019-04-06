import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const Header = ({ selected, onSelect }) => {
  console.log(selected, onSelect);

  return (
    <Menu
      selectedKeys={ selected }
      onSelect={ (e) => {
        onSelect(e.selectedKeys)
      } }
      mode="horizontal">
      <Menu.Item key="home">
        <NavLink to="/"><Icon type="home" />Home</NavLink>
      </Menu.Item>
      <Menu.Item key="beers">
        <NavLink to="/beers"><Icon type="heart" />Beers</NavLink>
      </Menu.Item>
      <Menu.Item key="orders">
        <NavLink to="/orders"><Icon type="pay-circle" />Orders</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default Header;