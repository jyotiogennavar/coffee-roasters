export const FONT_FAMILY = {
  fontHeading: 'Fraunces, serif',
  fontText: 'Barlow, sans-serif',
};

export const COLORS = {
  darkCyan: 'hsl(179, 81%, 29%)',
  darkGreyBlue: 'hsl(215, 19%, 25%)',
  paleOrange: 'hsl(25, 94%, 86%)',
  lightCream: 'hsl(43, 78%, 98%)',
  grey: 'hsl(215, 5%, 54%)',
  lightGray: 'hsl(45, 22%, 92%)',
  white: 'hsl(0, 0%, 100%)'
};

export const WEIGHTS = {
  normal: 400,
  semibold: 700,
  bold: 900,
};

export const FONT_SIZES = {
  100: '0.75rem',
  200: '1rem',
  300: '1.5rem',
  400: '2rem',
  500: '2.5rem',
  600: '4rem',
  button: '1.125rem', 
};

const BREAKPOINTS = {
  tablet : 48,
  mobile : 26,
}

export const QUERIES = {
  'mobileOnly': `(max-width: ${BREAKPOINTS.mobile}rem)`,
  'tabletAndUp': `(max-width: ${BREAKPOINTS.tablet + 0.01}rem)`, // Adding a small value to ensure tablets aren't included in mobileOnly
}