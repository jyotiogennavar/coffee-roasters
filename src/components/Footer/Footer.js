import React from "react";
import styled from "styled-components";
import { COLORS, FONT_SIZES, WEIGHTS, QUERIES } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


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
          {[
            { to: "/", text: "Home" },
            { to: "/about-us", text: "About Us" },
            { to: "/create-a-plan", text: "Create a Plan" },
          ].map((link, index) => (
            <FooterLink key={index} to={link.to}>
              {link.text}
            </FooterLink>
          ))}
        </PageLinks>
        <SocialLinks as={motion.div}>
          {[
            { href: "/", icon: IconFb },
            { href: "/", icon: IconInstagram },
            { href: "/", icon: IconTwitter },
          ].map((social, index) => (
            <LinkIcon key={index} href={social.href}>
              <IconWrapper src={social.icon} />
            </LinkIcon>
          ))}
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

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const LinkStyle = styled.a`
  text-transform: uppercase;
  font-size: ${FONT_SIZES[100]};
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.grey};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${COLORS.lightCream};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;


  @media ${QUERIES.tabletAndUp} {
    padding-top: 2rem;
  }
`;

const LinkIcon = styled(LinkStyle)`
  width: 2em;
  color: ${COLORS.lightCream};
`;

const PageLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

`;

const FooterLink = styled(LinkStyle)`
  &:hover {
    color: ${COLORS.lightCream};
  }
`;

const Logo = styled.img`
  width: 10rem;
`;

const IconWrapper = styled.img``;

export default Footer;
