import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';

import { StarshipsViewProps } from '../../types';
import { StarshipRenderer } from '../StarshipRenderer';

export const StarshipsView: React.FC<StarshipsViewProps> = ({ starships }) => {
    const dataList = useMemo(() => {
        return (
            <FlatList
                data={starships}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => {
                    return <StarshipRenderer {...item} />;
                }}
            />
        );
    }, [starships]);

    return <Flex>{dataList}</Flex>;
};
