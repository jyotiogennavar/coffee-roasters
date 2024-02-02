import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Header from "../components/Header";
import Button from "../components/Button/Button";
import MainLayout from '../components/MainLayout/MainLayout';

// Images
import HeroImageDesktop from '../assets/home/desktop/image-hero-coffeepress.jpg';
import HeroImageTablet from '../assets/home/tablet/image-hero-coffeepress.jpg';
import HeroImageMobile from '../assets/home/mobile/image-hero-coffeepress.jpg';

import IconCoffee from '../assets/home/desktop/icon-coffee-bean.svg';
import IconGift from '../assets/home/desktop/icon-gift.svg';
import IconTruck from '../assets/home/desktop/icon-truck.svg';

import Danche from '../assets/home/desktop/image-danche.png';
import GranEspresso from '../assets/home/desktop/image-gran-espresso.png';
import Piccollo from '../assets/home/desktop/image-piccollo.png';
import Planalto from '../assets/home/desktop/image-planalto.png';


const Home = () => {
  return (
    <MainLayout>
      <Header/>
      <div>
        Home page  
      </div>

    </MainLayout>

  )
}

export default Home;