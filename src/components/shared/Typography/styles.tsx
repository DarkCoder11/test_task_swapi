import styled from 'styled-components/native';

import { fonts } from 'src/theme';

import { TypographyStyleProps } from './types';

export const StyledText = styled.Text<TypographyStyleProps>`
  ${({ type }) => {
      switch (type) {
          case 'bodySmall':
              return 'font-size: 10px; line-height: 11px';
          case 'bodyLarge':
              return 'font-size: 16px; font-weight: 400';
          case 'label':
              return 'font-size: 10px; font-weight: bold; text-transform: uppercase';
          case 'labelAlt':
              return 'font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px';
          case 'h1':
              return 'font-size: 30px; font-weight: bold';
          case 'h1-small':
              return 'font-size: 20px; font-weight: bold';
          case 'h2':
              return 'font-size: 14px; font-weight: bold';
          case 'h3':
              return 'font-size: 14px;';
          case 'h4':
              return 'font-size: 12px; font-weight: bold';
          default:
              return 'font-size: 12px';
      }
  }};
  ${({ fontFamily = 'regular' }) => `fontFamily: ${fonts[fontFamily]}`};
  ${({ theme, color }) => {
      switch (color) {
          case 'primary':
              return `color: ${theme.colors.primary}`;
          case 'secondary':
              return `color: ${theme.colors.secondary}`;
          case 'light':
              return `color: ${theme.colors.light}`;
          case 'dark':
              return `color: ${theme.colors.dark}`;
          default:
              return `color: ${theme?.colors?.dark}`;
      }
  }}

  ${({ textAlign = 'left' }) => textAlign && `textAlign: ${textAlign}`};
  ${({ textTransform }) => textTransform && `textTransform: ${textTransform}`};
`;
