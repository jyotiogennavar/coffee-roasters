import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";

import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  WEIGHTS,
  QUERIES,
} from "../constants";

import HeroImageDesktop from "../assets/about/desktop/image-hero-whitecup.jpg";
import HeroImageTablet from "../assets/about/tablet/image-hero-whitecup.jpg";
import HeroImageMobile from "../assets/about/mobile/image-hero-whitecup.jpg";

import ImageCommitment from "../assets/about/desktop/image-commitment.jpg";
import ImageQuality from "../assets/about/desktop/image-quality.jpg";

import { getCoffeeInfo, contactInformation } from "../data/AboutPageData";
import styled from "styled-components";

const AboutUs = () => {
  const Data = getCoffeeInfo();
  const ContactInfo = contactInformation();

  return (
    <MainLayout>
      <HeroSec>
        <HeroBackground>
          <source media="(min-width: 1024px)" srcSet={HeroImageDesktop} />
          <source media="(min-width: 768px)" srcSet={HeroImageTablet} />
          <img src={HeroImageMobile} alt="Hero Background" />
        </HeroBackground>
        <HeroContent>
          <HeroTitle>{Data.aboutUs.title}</HeroTitle>
          <HeroSubtext>{Data.aboutUs.content}</HeroSubtext>
        </HeroContent>
      </HeroSec>

      <CommitmentSection>
        <img src={ImageCommitment} alt="commitment" />
        <div>
          <h2>{Data.commitment.title}</h2>
          <p>{Data.commitment.content}</p>
        </div>
      </CommitmentSection>

      <QualitySection>
        <div>
          <h2>{Data.quality.title}</h2>
          <p>{Data.quality.content}</p>
        </div>
        <img src={ImageQuality} alt="commitment" />
      </QualitySection>

      <StepsWrapper>
        <p>Our Headquarters</p>
        <StepsCards>
          {ContactInfo.map((contact) => (
            <StepsCard key={contact.phone}>
              <img src={contact.icon} alt={contact.country} />
              <h3>{contact.country}</h3>
              <div>
                <p>{contact.address}</p>
                <p>{contact.phone}</p>
              </div>
            </StepsCard>
          ))}
        </StepsCards>
      </StepsWrapper>
    </MainLayout>
  );
};

const HeroSec = styled.div`
  border-radius: 3vw;
  overflow: hidden;
  margin-inline: 3vw;
  position: relative;

  @media ${QUERIES.mobileOnly} {
    margin: 2rem 0;
    border-radius: 0.8rem;
  }
`;
const HeroBackground = styled.picture`
  position: relative;
  z-index: -1;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 27%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 65ch;
  z-index: 1;
  padding: 1vw;

  color: ${COLORS.lightCream};

  * {
    margin-block: 0;
  }

  & * + * {
    margin-block-start: 1.5rem;
  }

  @media ${QUERIES.tabletAndUp} {
    left: 40%;
  }

  @media ${QUERIES.mobileOnly} {
    text-align: center;
    top: 60%;
    left: 50%;
    width: 100%;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw + 1rem, 4rem);

  font-family: ${FONT_FAMILY.fontHeading};
`;
const HeroSubtext = styled.p`
  font-size: ${FONT_SIZES[200]};
`;

const FlexContainer = styled.div`
  margin: 6vw 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  

  img {
    border-radius: 0.8rem;
  }

  h2 {
    font-family: ${FONT_FAMILY.fontHeading};
    font-size: ${FONT_SIZES[500]};
  }

  p {
    margin-top: 1.8rem;
  }
  @media ${QUERIES.mobileOnly} {
   flex-direction: column;

  }

`;

const CommitmentSection = styled(FlexContainer)`
  color: ${COLORS.darkGreyBlue};

  @media ${QUERIES.tabletAndUp} {
  margin-inline: 2vw;

  img {
    width: 50%;
  }
  }
`;

const QualitySection = styled(FlexContainer)`
  margin: 8vw 4vw 6vw;
  background-color: ${COLORS.darkGreyBlue};
  color: ${COLORS.lightCream};
  border-radius: 0.8rem;
  height: 28rem;
  padding-inline: 2vw;
  position: relative;
  z-index: -1;

  div {
    margin: 2rem;
    padding-bottom: 4rem;
  }

  img {
    margin-top: -8rem;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top  :30vw;
    flex-direction: column-reverse;
    height: 40rem;
    gap: 0;

    img {
      margin-top: -2rem;
      width: 90%;
      height: 75%;
    }

    div {
      margin: 0;
      text-align: center;
      padding-bottom: 0;
    }
  }
`;

// Headquarters

const StepsWrapper = styled.div`
  margin: 8rem 6rem 6rem;

  font-family: ${FONT_FAMILY.fontHeading};
  color: ${COLORS.darkGreyBlue};

  p {
    color: ${COLORS.grey};
    font-size: ${FONT_SIZES[300]};
  }

  @media ${QUERIES.mobileOnly} {
    margin: 6rem 0;
    text-align: center;
  }
`;

const StepsCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin: 2rem 0;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
  }
`;

const StepsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 50%;
  }

  h3 {
    font-size: ${FONT_SIZES[400]};
  }

  p {
    font-family: ${FONT_FAMILY.fontText};
    font-size: ${FONT_SIZES[200]};
  }

  @media ${QUERIES.mobileOnly} {
    gap: 0;
    text-align: center;
  }
`;

export default AboutUs;
