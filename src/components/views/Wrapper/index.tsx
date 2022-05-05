import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from './styles';
import { WrapperProps } from './types';

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
    <Container>
        <SafeAreaView>{children}</SafeAreaView>
    </Container>
);

export default Wrapper;
