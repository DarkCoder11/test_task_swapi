import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ onPress, children, style, disabled }) => (
    <TouchableOpacity style={style} activeOpacity={0.8} disabled={disabled} onPress={onPress}>
        {children}
    </TouchableOpacity>
);

export default Button;
