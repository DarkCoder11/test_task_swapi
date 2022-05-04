import React from 'react';

import { Container } from './styles';
import { WrapperProps } from './types';

const Wrapper: React.FC<WrapperProps> = ({ children }) => <Container>{children}</Container>;

export default Wrapper;
