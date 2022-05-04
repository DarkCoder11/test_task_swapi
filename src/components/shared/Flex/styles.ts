import styled from 'styled-components/native';

import { FlexProps } from './types';

export const BaseFlex = styled.View<FlexProps>`
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
  ${({ marginString }) => marginString && `margin: ${marginString}`};
  ${({ paddingString }) => paddingString && `padding: ${paddingString}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`};
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
  ${({ placeContent }) => placeContent && `place-content: ${placeContent}`};
  ${({ flexGrow }) => flexGrow !== undefined && `flex-grow: ${flexGrow}`};
  ${({ flexShrink }) => flexShrink !== undefined && `flex-shrink: ${flexShrink}`};
  ${({ flexBasis }) => flexBasis !== undefined && `flex-basis: ${flexBasis}`};
  ${({ debug }) => debug && 'border-color: red; border-width: 1px'};
`;
