import React from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';

import { PlanetRenderer } from '../PlanetRenderer';
import { PlanetType } from '../../types';

export const PlanetView: React.FC<{ planets: PlanetType[] }> = ({ planets }) => {
    const dataList = (
        <FlatList
            data={planets}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i, index) => String(index)}
            renderItem={({ item }) => {
                return <PlanetRenderer {...item} />;
            }}
        />
    );

    return <Flex>{dataList}</Flex>;
};
