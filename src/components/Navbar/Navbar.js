import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/shared/desktop/logo.svg';


const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo src={logoIcon} alt='logo'></Logo>
      <NavItems>
        <NavLink><Link to='/'>Home</Link></NavLink>
        <NavLink><Link to='/about-us'>About Us</Link></NavLink> 
        <NavLink><Link to='/create-a-plan'>Create a Plan</Link></NavLink> 
      </NavItems>
    </NavbarWrapper>
  
  )
}

const NavbarWrapper = styled.div`

`

const Logo = styled.img`

`

const NavItems = styled.ul`

`

const NavLink = styled.a`

`
export default Navbar;
