import { DefaultTheme } from 'styled-components/native';

import colors from './colors';
import { StructuredElements } from './types';

export const fonts = {
    bold: 'Poppins-Bold',
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    semiBold: 'Poppins-SemiBold',
} as const;

export const structural: StructuredElements = {
    fieldHeight: '40px',
    defaultFieldWidth: '280px',
};

export const baseTheme: DefaultTheme = {
    colors,
    borderRadius: '4px',
    structural,
} as const;
