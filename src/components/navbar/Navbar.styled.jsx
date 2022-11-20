import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  height: 8rem;
`;

export const NavbarLink = styled(NavLink)`
  margin: 0 1rem;
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
`;

export const NavbarImg = styled.img`
  width: 150px;
`;
