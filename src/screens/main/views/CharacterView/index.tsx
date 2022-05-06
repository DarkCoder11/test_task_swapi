import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { Flex } from 'src/components';
import { getNumFromStr } from 'src/utils';

import { CharacterRenderer } from '../CharacterRenderer';
import { CharacterType } from '../../types';

export const CharacterView: React.FC<{ characters: CharacterType[] }> = ({ characters }) => {
    const characterDataList = useMemo(() => {
        return (
            <FlatList
                data={characters}
                showsVerticalScrollIndicator={false}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => {
                    return <CharacterRenderer id={getNumFromStr(item.url)} />;
                }}
            />
        );
    }, [characters]);

    return <Flex>{characterDataList}</Flex>;
};
