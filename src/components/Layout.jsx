import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orangered;
  }
`;

export const Layout = () => (
  <>
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
    </nav>
    <main>
      <Outlet />
    </main>
  </>
);
