import React from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';

import { CharacterRenderer } from '../CharacterRenderer';
import { CharacterType } from '../../types';
export const CharacterView: React.FC<{ characters: CharacterType[] }> = ({ characters }) => {
    const dataList = (
        <FlatList
            data={characters}
            removeClippedSubviews={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(i, index) => String(index)}
            renderItem={({ item }) => {
                return <CharacterRenderer {...item} />;
            }}
        />
    );

    return <Flex>{dataList}</Flex>;
};
