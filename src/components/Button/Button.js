import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY} from '../../constants';

const Button = ({children, onClick, ...rest}) => {
  return (
    <ButtonWrapper onClick={onClick} {...rest}>
        {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  height: 3rem;
  background-color: ${COLORS.darkCyan};
  border-radius: 0.375rem;
  padding: .8rem 3rem 1rem;
  cursor: pointer;
  border: none;

  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES.button};
  color: ${COLORS.lightCream};
  font-weight: ${WEIGHTS.bold};
  text-align: center;

  &:hover {
    background-color: #66D2CF;
  }

  &:disabled {
    background-color: #E2DEDB;
  }

`
export default Button;

