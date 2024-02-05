import React from "react";
import styled from "styled-components";
import { COLORS, FONT_SIZES, WEIGHTS } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logoIcon from "../../assets/shared/desktop/logo.svg";
import IconFb from "../../assets/shared/desktop/icon-facebook.svg";
import IconInstagram from "../../assets/shared/desktop/icon-instagram.svg";
import IconTwitter from "../../assets/shared/desktop/icon-twitter.svg";
import logoWhite from "../../assets/shared/desktop/logo-white.png"

const Footer = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Logo src={logoWhite}></Logo>
        <PageLinks>
          <FooterLink>
            <Link to="/">Home</Link>
          </FooterLink>
          <FooterLink>
            <Link to="/about-us">About Us</Link>
          </FooterLink>
          <FooterLink>
            <Link to="/create-a-plan">Create a Plan</Link>
          </FooterLink>
        </PageLinks>
        <SocialLinks as={motion.div}>
          <LinkIcon href="/">
            <IconWrapper src={IconFb} />
          </LinkIcon>
          <LinkIcon href="/">
            <IconWrapper src={IconInstagram} />
          </LinkIcon>
          <LinkIcon href="/">
            <IconWrapper src={IconTwitter} />
          </LinkIcon>
        </SocialLinks>
      </FlexContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: ${COLORS.darkGreyBlue};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const LinkIcon = styled.a`
  width: 2em;
  color: ${COLORS.lightCream};

  &:hover {
    color: ${COLORS.paleOrange};
  }
`;
const PageLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;


`;

const FooterLink = styled.a`
  text-transform: uppercase;
  
  font-size: ${FONT_SIZES[100]};
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.grey};

  & > a {
    text-decoration: none;
  }

  &:hover {
    color: ${COLORS.lightCream};
  }
`;


const Logo = styled.img`
  width: 10rem;
`;

const IconWrapper = styled.img``;
export default Footer;
