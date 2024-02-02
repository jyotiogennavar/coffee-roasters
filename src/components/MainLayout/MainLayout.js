import React, { Children } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import GlobalStyles from '../GlobalStyles';
import {COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY} from '../../constants';

import Navbar from '../Navbar/Navbar';
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
  background-color: ${COLORS.lightCream};
`

export default MainLayout;
