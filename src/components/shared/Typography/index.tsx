import React from 'react';

import { StyledText } from './styles';
import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({ onPress, textStyle, children, ...styleProps }) => {
    return (
        <StyledText style={textStyle} {...{ onPress, ...styleProps }}>
            {children}
        </StyledText>
    );
};

export default Typography;
