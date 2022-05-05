import React from 'react';

import { Flex, Typography, Wrapper } from 'src/components';

import { PlanetProps } from './types';

const Planet: React.FC<PlanetProps> = ({ route }) => {
    console.log(route);
    return (
        <Wrapper>
            <Flex>
                <Typography>Planet</Typography>
            </Flex>
        </Wrapper>
    );
};

export default Planet;
