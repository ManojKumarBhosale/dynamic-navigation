import React, { memo } from "react";
import { Layout, NavBar } from "../../components/ui";

const { Sider } = Layout;

const SideBar = ({ sideNavItems = [], selectedKey }) => {
  return (
    <>
      {sideNavItems.length > 0 && (
        <Sider>
          <NavBar
            navItems={sideNavItems}
            selectedKey={selectedKey || sideNavItems[0]?.key}
          />
        </Sider>
      )}
    </>
  );
};

export default memo(SideBar);
