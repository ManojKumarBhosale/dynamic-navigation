import React, { memo } from "react";
import styled from "styled-components";
import { NavBar, Layout } from "./../../components/ui";

const { Header } = Layout;

const StyledImg = styled.img`
  width: 200px;
  height: 60px;
  object-fit: fill;
`;

const StyledHeader = styled(Header)`
  height: 60px;
  opacity: 1;
  background: #ffffff;
  padding: 0;
  display: flex;
  align-items: center;
`;

const TopBar = ({ headerNavItems, selectedKey }) => {
  return (
    <StyledHeader>
      <div>
        <StyledImg src="/images/logo-placeholder.png" alt="Company Logo" />
      </div>
      <div>
        <NavBar
          navItems={headerNavItems}
          selectedKey={selectedKey}
          mode="horizontal"
          theme="light"
        />
      </div>
    </StyledHeader>
  );
};

export default memo(TopBar);
