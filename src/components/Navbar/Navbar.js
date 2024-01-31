import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about-us'>About Us</Link></li> 
      <li><Link to='/create-a-plan'>Create a Plan</Link></li> 
    </ul>
  )
}
export default Navbar;
