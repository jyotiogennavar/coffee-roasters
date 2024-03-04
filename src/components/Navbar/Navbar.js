import React, { useState } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/shared/desktop/logo.svg";
import hamburgerIcon from "../../assets/shared/mobile/icon-hamburger.svg"
import closeIcon from "../../assets/shared/mobile/icon-close.svg"

import { COLORS, FONT_SIZES, WEIGHTS, QUERIES, FONT_FAMILY } from "../../constants";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <NavbarWrapper>
      <Logo src={logoIcon} alt="logo" />
      <MenuButton onClick={toggleMenu}>
        {menuOpen ? (
          <img src={closeIcon} alt="close icon" />
        ) : (
          <img src={hamburgerIcon} alt="hamburger icon" />
        )}
      </MenuButton>

      <NavItems open={menuOpen}>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/about-us">
          About Us
        </NavLink>
        <NavLink to="/create-a-plan">
          Create a Plan
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
  margin: 1.5rem auto;

  @media ${QUERIES.mobileOnly} {
    flex-wrap: wrap;
    padding-inline: 0;
  }

`;

const Logo = styled.img`
  height: 1.25rem;
`;

const MenuButton = styled.button`
  display: none; // Hide by default for non-mobile views
  background: none;
  border: none;
  cursor: pointer;

  @media ${QUERIES.mobileOnly} {
    display: block; // Show for mobile views
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;

  @media ${QUERIES.mobileOnly} {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 1.5rem;
    position: absolute;
    top: 2rem; // Position below the NavbarWrapper
    left: 0;
    width: 100%;
    background-color: ${COLORS.white};
    padding: 2rem;
    background-color: ${COLORS.lightCream};
    font-family: ${FONT_FAMILY.fontHeading};
    font-size: ${FONT_SIZES[300]};
  }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
  font-size: ${FONT_SIZES[100]};
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.grey};
  text-decoration: none;

  &:hover {
    color: ${COLORS.darkGreyBlue};
  }
`;
export default Navbar;
