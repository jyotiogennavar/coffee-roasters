import React, { useState } from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout/MainLayout";
import {
  PlanHeroContent,
  PlanContent,
  CoffeePreferences,
} from "../data/PlanPageData";

import HeroImageDesktop from "../assets/plan/desktop/image-hero-blackcup.jpg";
import HeroImageTablet from "../assets/plan/tablet/image-hero-blackcup.jpg";
import HeroImageMobile from "../assets/plan/mobile/image-hero-blackcup.jpg";
import IconArrow from "../assets/plan/desktop/icon-arrow.svg";

import { COLORS, FONT_FAMILY, FONT_SIZES, QUERIES } from "../constants";

const CreatePlan = () => {
  const heroContent = PlanHeroContent();
  const planContent = PlanContent();
  const preferences = CoffeePreferences();

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDrinkType, setSelectedDrinkType] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    if (index === 0) {
      setSelectedDrinkType(preferences.drinkType.options[index].type);
      // Disable "Grind Type" section if "Capsule" is selected
      if (preferences.drinkType.options[index].type === "Capsule") {
        setActiveIndex(null);
      }
    }
  };

  const handleWeightChange = (weight) => {
    setSelectedWeight(weight);
    // Calculate per shipment price based on weight and update state
    // Example calculation:
    // if (weight === "250g") {
    //  Update per shipment price
    // }
  };

  const handleFrequencyChange = (frequency) => {
    setSelectedFrequency(frequency);
    // Calculate per month cost based on frequency and update state
    // Example calculation:
    // if (frequency === "Every Week") {
    // Update per month cost
    // }
  };

  return (
    <MainLayout>
      <HeroSec>
        <HeroBackground>
          <source media="(min-width: 1024px)" srcSet={HeroImageDesktop} />
          <source media="(min-width: 768px)" srcSet={HeroImageTablet} />
          <img src={HeroImageMobile} alt="Hero Background" />
        </HeroBackground>
        <HeroContent>
          <HeroTitle>{heroContent.title}</HeroTitle>
          <HeroSubtext>{heroContent.content}</HeroSubtext>
        </HeroContent>
      </HeroSec>

      <StepsWrapper>
        <StepsCards>
          {planContent.map((plan) => (
            <StepsCard key={plan.num}>
              <span>{plan.num}</span>
              <h3>{plan.title}</h3>
              <p>{plan.content}</p>
            </StepsCard>
          ))}
        </StepsCards>
      </StepsWrapper>

      <PreferencesWrapper>
        <aside>
          <p
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => toggleAccordion(0)}
          >
            <span>01</span> Preferences
          </p>
          <p
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => toggleAccordion(1)}
          >
            <span>02</span> Bean type
          </p>
          <p
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => toggleAccordion(2)}
          >
            <span>03</span> Quantity
          </p>
          <p
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => toggleAccordion(3)}
          >
            <span>04</span> Grind option
          </p>
          <p
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => toggleAccordion(4)}
          >
            <span>05</span> Deliveries
          </p>
        </aside>

        <AccordionWrapper>
          {/* drink type */}
          <AccordionItem>
            <AccordionHeader
              onClick={() => toggleAccordion(0)}
              isActive={activeIndex === 0}
            >
              <span>{preferences.drinkType.question}</span>
              <img src={IconArrow} alt="arrow" />
            </AccordionHeader>
            {activeIndex === 0 && (
              <AccordionContent>
                {preferences.drinkType.options.map((card, index) => (
                  <Card key={index}>
                    <h3>{card.type}</h3>
                    <p>{card.description}</p>
                  </Card>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>

          {/* coffee type */}
          <AccordionItem>
            <AccordionHeader
              onClick={() => toggleAccordion(1)}
              isActive={activeIndex === 1}
            >
              <span>{preferences.coffeeType.question}</span>
              <img src={IconArrow} alt="arrow" />
            </AccordionHeader>
            {activeIndex === 1 && (
              <AccordionContent>
                {preferences.coffeeType.options.map((card, index) => (
                  <Card key={index}>
                    <h3>{card.type}</h3>
                    <p>{card.description}</p>
                  </Card>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>

          {/* Quantity */}
          <AccordionItem>
            <AccordionHeader
              onClick={() => toggleAccordion(2)}
              isActive={activeIndex === 2}
            >
              <span>{preferences.quantity.question}</span>
              <img src={IconArrow} alt="arrow" />
            </AccordionHeader>
            {activeIndex === 2 && (
              <AccordionContent>
                {preferences.quantity.options.map((card, index) => (
                  <Card key={index}>
                    <h3>{card.amount}</h3>
                    <p>{card.description}</p>
                  </Card>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>

          {/* Grind Type */}
          <AccordionItem>
            <AccordionHeader
              onClick={() => toggleAccordion(3)}
              isActive={activeIndex === 3}
            >
              <span>{preferences.grindType.question}</span>
              <img src={IconArrow} alt="arrow" />
            </AccordionHeader>
            {activeIndex === 3 && (
              <AccordionContent>
                {preferences.grindType.options.map((card, index) => (
                  <Card key={index}>
                    <h3>{card.type}</h3>
                    <p>{card.description}</p>
                  </Card>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>

          {/* Delivery Frequency */}
          <AccordionItem>
            <AccordionHeader
              onClick={() => toggleAccordion(4)}
              isActive={activeIndex === 4}
            >
              <span>{preferences.deliveryFrequency.question}</span>
              <img src={IconArrow} alt="arrow" />
            </AccordionHeader>
            {activeIndex === 4 && (
              <AccordionContent>
                {preferences.deliveryFrequency.options.map((card, index) => (
                  <Card key={index}>
                    <h3>{card.frequency}</h3>
                    <p>{card.cost}</p>
                  </Card>
                ))}
              </AccordionContent>
            )}
          </AccordionItem>

          <OrderSummary>
            <p>ORDER SUMMARY</p>
            <h4>
              “I drink coffee _____, with a _____ type of bean. _____ ground ala
              _____, sent to me _____.”
            </h4>
          </OrderSummary>
        </AccordionWrapper>
      </PreferencesWrapper>
    </MainLayout>
  );
};

const OrderSummary = styled.div`
  background-color: ${COLORS.darkGreyBlue};
  border-radius: 0.5rem;
  padding: 1rem 3rem;

  p {
    color: ${COLORS.grey};
  }

  h4 {
    color: ${COLORS.white};
    font-family: ${FONT_FAMILY.fontHeading};
    font-size: ${FONT_SIZES[300]};
    line-height: 3rem;
  }
`;

const PreferencesWrapper = styled.div`
  margin: 0 3vw 0 8vw;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media ${QUERIES.tabletAndUp} {
    margin: auto;
  }

  aside {
    flex: 1;
    max-width: 20rem;
    padding: 1rem 0;
    color: ${COLORS.grey};
    font-size: ${FONT_SIZES[300]};
    font-family: ${FONT_FAMILY.fontHeading};

    p:not(:first-child) {
      padding-top: 1rem;
      border-top: 1px solid ${COLORS.lightGray};

      &:active {
        color: ${COLORS.darkCyan};
      }
    }

    span {
      padding-right: 10px;
    }

    @media ${QUERIES.tabletAndUp} {
      display: none;
    }
  }
`;

const AccordionWrapper = styled.div`
  flex: 2;
  padding: 1rem;
  margin-inline: 2vw;
`;

const AccordionContent = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  gap: 2rem;

  @media ${QUERIES.tabletAndUp} {
    gap: 1.5rem;
  }

  @media ${QUERIES.mobileOnly} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  border-radius: 0.5rem;
  padding: 4rem 2rem;
  background-color: ${COLORS.lightGray};
  color: ${COLORS.darkGreyBlue};
  cursor: pointer;

  h3 {
    font-size: ${FONT_SIZES[300]};
    font-family: ${FONT_FAMILY.fontHeading};
  }

  &:hover {
    background-color: ${COLORS.darkCyan};
    color: ${COLORS.lightCream};
  }

  &:active {
    background-color: ${COLORS.paleOrange};
    color: ${COLORS.darkGreyBlue};
  }

  @media ${QUERIES.mobileOnly} {
    padding: 2rem;
  }
`;

const AccordionItem = styled.div`
  &:not(:first-child) {
    margin: 4rem 0;
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  color: ${COLORS.grey};
  font-size: clamp(1.5rem, 1.8vw + 1rem, 2.5rem);
  font-family: ${FONT_FAMILY.fontHeading};

  img {
    width: 1rem;
    height: 1rem;
    transition: transform 0.5s ease-in-out;
    transform: ${(props) =>
      props.isActive ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const HeroSec = styled.div`
  border-radius: 2vw;
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

const StepsWrapper = styled.div`
  margin: 4vw 2vw;
  padding: 5vw 3vw;
  border-radius: 1rem;
  background-color: ${COLORS.darkGreyBlue};
  font-family: ${FONT_FAMILY.fontHeading};
  color: ${COLORS.lightCream};

  @media ${QUERIES.tabletAndUp} {
    margin: 2vw auto;
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

  @media ${QUERIES.mobileOnly} {

    flex-direction: column;
    gap: 1rem;
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
    font-size: ${FONT_SIZES[200]};
    font-family: ${FONT_FAMILY.fontText};
  }

  @media ${QUERIES.mobileOnly} {
    gap: 0;
    text-align: center;
  }
`;

export default CreatePlan;
