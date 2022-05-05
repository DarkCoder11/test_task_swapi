import React from 'react';
import { FlatList, View } from 'react-native';

import { StarshipsViewProps } from '../../types';
import { StarshipRenderer } from '../StarshipRenderer';

export const StarshipsView: React.FC<StarshipsViewProps> = ({ starships }) => {
    const dataList = (
        <FlatList
            data={starships}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i, index) => String(index)}
            renderItem={({ item }) => <StarshipRenderer {...item} />}
        />
    );

    return <View>{dataList}</View>;
};
