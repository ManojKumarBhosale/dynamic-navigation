import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const NavItem = ({ item: { label, path, key }, ...others }) => {
  return (
    <Menu.Item key={key} {...others}>
      <Link to={path}>{label}</Link>
    </Menu.Item>
  );
};

export default NavItem;
