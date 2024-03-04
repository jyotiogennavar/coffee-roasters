import React, { Children } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY} from '../../constants';

import Navbar from '../Navbar';
import Footer from '../Footer/Footer';



const MainLayout = ({children}) => {
  return (
    <MainWrapper>
      <Navbar/>
      <div>{children}</div> 
      <Footer/>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  
  margin-left: 3vw;
  margin-right: 3vw;

  font-family: ${FONT_FAMILY.fontText};
  font-size: ${FONT_SIZES[200]};
  font-weight: ${WEIGHTS.normal};
`

export default MainLayout;
