import React from "react";
import { Menu } from "antd";
import NavItem from "./NavItem";

const NavBar = ({
  navItems = [],
  mode = "inline",
  theme = "dark",
  selectedKey = navItems.length && navItems[0].key,
}) => {
  return (
    <Menu selectedKeys={[selectedKey]} mode={mode} theme={theme}>
      {navItems.map((item) => (
        <NavItem key={item.key} item={item} />
      ))}
    </Menu>
  );
};

export default NavBar;
