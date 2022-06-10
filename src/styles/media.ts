import breakPoints from './breakPoints';

export const mediaQuery = (maxWidth: number): string => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  xxlarge: mediaQuery(breakPoints.xxlarge),
  xlarge: mediaQuery(breakPoints.xlarge),
  large: mediaQuery(breakPoints.large),
  medium: mediaQuery(breakPoints.medium),
  small: mediaQuery(breakPoints.small),
  xsmall: mediaQuery(breakPoints.xsmall),
  custom: mediaQuery,
};

export default media;
