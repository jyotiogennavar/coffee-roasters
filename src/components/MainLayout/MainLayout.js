import React, { Children } from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = ({children}) => {
  return (
    <>
      <Navbar/>
      <div>{children}</div> 
      <Footer/>
    </>
  )
}

export default MainLayout;
