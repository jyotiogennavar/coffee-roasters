import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../../constants';
import { motion } from 'framer-motion';

import logoIcon from '../../assets/shared/desktop/logo.svg';
import IconFb from '../../assets/shared/desktop/icon-facebook.svg';
import IconInstagram from '../../assets/shared/desktop/icon-instagram.svg';
import IconTwitter from '../../assets/shared/desktop/icon-twitter.svg';

const Footer = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Logo src={logoIcon}></Logo>
        <PageLinks>

        </PageLinks>
        <SocialLinks as={motion.div}>
          <Link href='https://www.facebook.com/'>{IconFb}</Link>
          <Link href='https://www.instagram.com/'>{IconInstagram}</Link>
          <Link href='https://twitter.com/'>{IconTwitter}</Link>
        </SocialLinks>

      </FlexContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-inline: 2rem;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
`

const Link = styled.a`
  width: 2em;
  color : ${COLORS.lightCream};

  &:hover {
    color  :${COLORS.paleOrange} ;
  }
`
const PageLinks = styled.div`

`
const Logo = styled.img`

`
export default Footer;
