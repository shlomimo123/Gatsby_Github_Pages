import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const MenuWrapper = styled.div``;

const List = styled.ul`
  padding-top: 20px;
`;

const Item = styled.li`
  display: inline-block;
  padding-right: 15px;
`;

const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

const MenuComponent = () => (
  <MenuWrapper>
    <List>
      <Item>
        <StyledLink to="/">HomePage </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">ContactUs </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/">About </StyledLink>
      </Item>
    </List>
  </MenuWrapper>
);

export default MenuComponent;
