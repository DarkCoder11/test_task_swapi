import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';
import { getNumFromStr } from 'src/utils';

import { StarshipsViewProps } from '../../types';
import { StarshipRenderer } from '../StarshipRenderer';

export const StarshipsView: React.FC<StarshipsViewProps> = ({ starships }) => {
    const starshipsDataList = useMemo(() => {
        return (
            <FlatList
                data={starships}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => {
                    return <StarshipRenderer id={getNumFromStr(item.url)} />;
                }}
            />
        );
    }, [starships]);

    return <Flex>{starshipsDataList}</Flex>;
};
