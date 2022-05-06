import React, { useMemo } from 'react';
import { View } from 'react-native';

import { FemaleIcon, MaleIcon } from 'src/assets/icons';
import { CharacterType } from 'src/screens/main/types';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { getNumFromStr, getCharacterImageUrl } from 'src/utils';
import { ImageFallback, Flex, Typography, RenderStat } from 'src/components';

import { styles, CharacterWrapper } from './styles';

export const CharacterRenderer = (character: CharacterType) => {
    const id = getNumFromStr(character.url);
    const uri = getCharacterImageUrl(id);

    const dataList = useMemo(() => {
        return [
            {
                title: 'Height',
                stat: character?.height,
                symbol: 'cm',
            },
            {
                title: 'Mass',
                stat: character?.mass,
                symbol: 'kg',
            },
            {
                title: 'Hair Color',
                stat: character?.hair_color,
            },
            {
                title: 'Skin Color',
                stat: character?.skin_color,
            },
        ];
    }, [character?.hair_color, character?.height, character?.mass, character?.skin_color]);

    const dataListRenderer = dataList.map(
        (item) =>
            item.stat && (
                <View key={item.title}>
                    <RenderStat textType="h3" stat={item.stat} title={item.title} symbol={item.symbol && item.symbol} />
                </View>
            ),
    );

    return (
        <CharacterWrapper>
            <ImageFallback
                imageUri={uri}
                style={styles.img}
                resizeMode="cover"
                fallbackStyles={styles.img}
                fallbackUri={FALLBACK_IMAGE_URI}
            />
            <Flex marginString="10px">
                <Flex flexDirection="row" alignItems="center">
                    {character.gender === 'female' ? (
                        <FemaleIcon width={20} height={20} />
                    ) : (
                        <MaleIcon width={20} height={20} />
                    )}
                    <Flex marginString="0 0 0 5px" width="70%">
                        <Typography type="bodyLarge">{character.name}</Typography>
                    </Flex>
                </Flex>
                {dataListRenderer}
            </Flex>
        </CharacterWrapper>
    );
};
