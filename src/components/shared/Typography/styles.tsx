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
          case 'background':
              return `color: ${theme.colors.background}`;
          case 'grey':
              return `color: ${theme.colors.grey}`;
          case 'sith-red':
              return `color: ${theme.colors['sith-red']}`;
          case 'jedi-blue':
              return `color: ${theme.colors['jedi-blue']}`;
          case 'naboo':
              return `color: ${theme.colors.naboo}`;
          case 'rebel-green':
              return `color: ${theme.colors['rebel-green']}`;
          case 'empire-blue':
              return `color: ${theme.colors['empire-blue']}`;
          case 'crawl-yellow':
              return `color: ${theme.colors['crawl-yellow']}`;
          case 'white':
              return `color: ${theme.colors.white}`;
          default:
              return `color: ${theme?.colors.white}`;
      }
  }}

  ${({ textAlign = 'left' }) => textAlign && `textAlign: ${textAlign}`};
  ${({ textTransform }) => textTransform && `textTransform: ${textTransform}`};
`;
