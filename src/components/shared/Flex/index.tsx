import React from 'react';

import { FlexProps } from './types';
import { BaseFlex } from './styles';

const Flex: React.FC<FlexProps> = ({ children, ...flexProps }) => {
    return <BaseFlex {...flexProps}>{children}</BaseFlex>;
};

export default Flex;
