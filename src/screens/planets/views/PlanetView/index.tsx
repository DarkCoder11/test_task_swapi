import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';
import { getNumFromStr } from 'src/utils';

import { PlanetRenderer } from '../PlanetRenderer';
import { Planet } from '../../types';

export const PlanetView: React.FC<{ planets: Planet[] }> = ({ planets }) => {
    const planetDataList = useMemo(() => {
        return (
            <FlatList
                data={planets}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => {
                    return <PlanetRenderer id={getNumFromStr(item.url)} />;
                }}
            />
        );
    }, [planets]);

    return <Flex>{planetDataList}</Flex>;
};
