import React from "react";
import styled from "styled-components";
import { motion} from "framer-motion";

import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  WEIGHTS,
  QUERIES,
} from "../constants";

import Button from "../components/Button/Button";
import MainLayout from "../components/MainLayout/MainLayout";

import {
  getCoffeeData,
  getFeaturesData,
  getSubscriptionSteps,
} from "../data/HomePageData";

// Images
import HeroImageDesktop from "../assets/home/desktop/image-hero-coffeepress.jpg";
import HeroImageTablet from "../assets/home/tablet/image-hero-coffeepress.jpg";
import HeroImageMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";

const Home = () => {
  const coffeeData = getCoffeeData();
  const features = getFeaturesData();
  const subscriptionSteps = getSubscriptionSteps();


  return (
    <MainLayout>
      <HeroSec>
        <HeroBackground>
          <source media="(min-width: 1024px)" srcSet={HeroImageDesktop} />
          <source media="(min-width: 768px)" srcSet={HeroImageTablet} />
          <img src={HeroImageMobile} alt="Hero Background" />
        </HeroBackground>
        <HeroContent>
          <HeroTitle>Great coffee made simple.</HeroTitle>
          <HeroSubtext>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </HeroSubtext>
          <Button>Create Your Plan</Button>
        </HeroContent>
      </HeroSec>

      <ProductTitle>our collection</ProductTitle>
      <Products>
        {coffeeData.map((coffee) => (
          <ProductCard key={coffee.name}>
            <img src={coffee.image} alt={coffee.name} loading="lazy" />
            <div>
              <ProductName>{coffee.name}</ProductName>
              <p>{coffee.description}</p>
            </div>
          </ProductCard>
        ))}
      </Products>

      <FeatureWrapper>
        <div>
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </FeatureWrapper>
      <FeatureCards>
        {features.map((feature) => (
          <FeatureCard key={feature.key}>
            <img src={feature.icon} alt={feature.title} />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </FeatureCard>
        ))}
      </FeatureCards>

      <StepsWrapper>
        <p>How it works</p>
        <StepsCards>
          {subscriptionSteps.map((steps) => (
            <StepsCard key={steps.stepNumber}>
              <span>{steps.stepNumber}</span>
              <h3>{steps.title}</h3>
              <p>{steps.description}</p>
            </StepsCard>
          ))}
        </StepsCards>

        <Button>Create your plan</Button>
      </StepsWrapper>
    </MainLayout>
  );
};

const HeroSec = styled.div`
  /* border-radius: 3vw; */
  overflow: hidden;
  margin-inline: 2vw;
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

// Products

const Products = styled.div`
  margin-top: -5rem;
  display: flex;
  gap: 2rem;
  padding-inline: 2rem;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 2rem;
    flex-direction: column;
    align-items: stretch;
  }

  @media ${QUERIES.mobileOnly} {
    align-items: center;
  }
`;

const ProductTitle = styled.h2`
  text-align: center;
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: clamp(2.5rem, 5vw + 1rem, 12rem);
  background: linear-gradient(to bottom, ${COLORS.grey}, ${COLORS.lightCream});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  position: relative;
  z-index: -1;
`;
const ProductCard = styled.div`
  text-align: center;
  font-size: ${FONT_SIZES[200]};
  width: 40ch;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    align-items: center;
    text-align: left;

    img {
      width: 60%;
    }

    p {
      width: 40ch;
    }
  }

  @media ${QUERIES.mobileOnly} {
    display: block;
    text-align: center;
    width: 30ch;

    img {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }
`;

const ProductName = styled.h3`
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES[400]};
  font-weight: ${WEIGHTS.semibold};
`;

// Features

const FeatureWrapper = styled.div`
  margin-top: 5rem;
  background-color: ${COLORS.darkGreyBlue};
  color: ${COLORS.lightCream};
  border-radius: 10px;
  font-size: ${FONT_SIZES[200]};
  height: 28rem;

  position: relative;
  z-index: -1;

  div {
    max-width: 70ch;
    text-align: center;
    padding: 2rem 0 3rem;
    margin-inline: auto;
  }

  h2 {
    font-family: ${FONT_FAMILY.fontHeading};
    font-size: ${FONT_SIZES[500]};
  }

  @media ${QUERIES.mobileOnly} {
    padding: 0.5rem;
  }
`;

const FeatureCards = styled.div`
  margin-top: -12rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  color: ${COLORS.lightCream};

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: center;
  }

  @media ${QUERIES.mobileOnly} {
    margin-top: -5rem;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  background-color: ${COLORS.darkCyan};
  border-radius: 10px;
  padding: 2rem;

  font-size: ${FONT_SIZES[200]};
  width: 40ch;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  h3 {
    font-family: ${FONT_FAMILY.fontHeading};
    font-size: ${FONT_SIZES[300]};
  }

  img {
    padding: 1rem;
  }

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    align-items: center;
    text-align: left;
    gap: 2rem;
   
   
  }

  @media ${QUERIES.mobileOnly} {
    width: 30ch;
  }
`;

// Subscription Plans

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
  gap: 1rem;
  max-width: 30ch;

  span {
    font-size: ${FONT_SIZES[600]};
    color: ${COLORS.paleOrange};
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

export default Home;
