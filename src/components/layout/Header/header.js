import React from 'react';
import Link from 'gatsby-link';
import MenuComponent from '../Menu/menu';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  color: white;
`;

const MenuAndLogoWrapper = styled.div`
  margin: 0;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const HeaderLogo = styled.h1`
  margin: 0;
`;

const HeaderComponent = () => (
  <header>
    <HeaderWrapper>
      <MenuAndLogoWrapper>
        <HeaderLogo>Gatsby</HeaderLogo>
        <MenuComponent />
      </MenuAndLogoWrapper>
    </HeaderWrapper>
  </header>
);

export default HeaderComponent;
