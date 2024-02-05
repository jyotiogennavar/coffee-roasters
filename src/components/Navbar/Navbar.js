import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/shared/desktop/logo.svg";

import { COLORS, FONT_SIZES, WEIGHTS } from "../../constants";
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo src={logoIcon} alt="logo"></Logo>
      <NavItems>
        <NavLink>
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink>
          <Link to="/about-us">About Us</Link>
        </NavLink>
        <NavLink>
          <Link to="/create-a-plan">Create a Plan</Link>
        </NavLink>
      </NavItems>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-inline: 2rem;
`;

const Logo = styled.img`
  height: 1.25rem;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: baseline;
  justify-content: flex-start;
`;

const NavLink = styled.a`
  text-transform: uppercase;

  font-size: ${FONT_SIZES[100]};
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.grey};

  & > a {
    text-decoration: none;
  }

  &:hover {
    color: ${COLORS.darkGreyBlue};
  }
`;
export default Navbar;
