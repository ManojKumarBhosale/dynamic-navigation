import React from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "../../components/ui";
import SideBar from "../SideBar";
import TopBar from "../TopBar";
import App from "../../routes";
import { getHeaderNavItems, getSideNavItems } from "./menuItems";
import styled from "styled-components";

const { Content } = Layout;
const StyledLayout = styled(Layout)`
  height: calc(100vh - 60px);
`;
const StyledContent = styled(Content)`
  padding: 15px;
`;

const headerNavItems = getHeaderNavItems();
const getNavItemKeysFromUrlPath = (path) => {
  const [, headerNavKey, subNavKey] = path.split("/");
  return { headerNavKey, subNavKey };
};

const MainApp = () => {
  const { pathname } = useLocation();
  const { headerNavKey, subNavKey } = pathname
    ? getNavItemKeysFromUrlPath(pathname)
    : headerNavItems[0].key;

  const sideNavItems = getSideNavItems(headerNavKey) || [];

  return (
    <Layout>
      <TopBar headerNavItems={headerNavItems} selectedKey={headerNavKey} />
      <StyledLayout>
        <SideBar sideNavItems={sideNavItems} selectedKey={subNavKey} />
        <StyledContent>
          <App />
        </StyledContent>
      </StyledLayout>
    </Layout>
  );
};

export default MainApp;
