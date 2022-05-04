import colors from './colors';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: Record<Colors, string>;
        borderRadius: string;
        structural: StructuredElements;
    }
}

export type Colors = keyof typeof colors;

export type StructuredElements = {
    fieldHeight: string;
    defaultFieldWidth: string;
};
