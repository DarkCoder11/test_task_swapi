import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';

import { PlanetRenderer } from '../PlanetRenderer';
import { Planet } from '../../types';

export const PlanetView: React.FC<{ planets: Planet[] }> = ({ planets }) => {
    const dataList = useMemo(() => {
        return (
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
    }, [planets]);

    return <Flex>{dataList}</Flex>;
};
