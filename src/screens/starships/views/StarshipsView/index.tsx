import React from 'react';
import { FlatList, View } from 'react-native';

import { Flex, Typography } from 'src/components';

import { StarshipsParams, StarshipsViewProps } from './types';

const StarshipRenderer = (starship: StarshipsParams) => {
    return (
        <Flex>
            <Typography>{starship.name}</Typography>
            <Typography>{starship.length}</Typography>
            <Typography>{starship.model}</Typography>
            <Typography>{starship.passengers}</Typography>
            <Typography>{starship.MGLT}</Typography>
            <Typography>{starship.cargoCapacity}</Typography>
            <Typography>{starship.starshipClass}</Typography>
        </Flex>
    );
};

export const StarshipsView: React.FC<StarshipsViewProps> = ({ starships }) => {
    const dataList = (
        <FlatList
            data={starships}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i, index) => String(index)}
            renderItem={({ item }) => {
                console.log(item, 'item');
                return <StarshipRenderer {...item} />;
            }}
        />
    );

    return <View>{dataList}</View>;
};
