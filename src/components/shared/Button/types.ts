import React from 'react';
import { ViewStyle } from 'react-native';

export type ButtonProps = {
    disabled?: boolean;
    onPress?: () => void;
    children?: React.ReactNode;
    style?: ViewStyle;
};
