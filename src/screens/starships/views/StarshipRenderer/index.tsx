import React from 'react';
import { View } from 'react-native';

import { Flex, ImageFallback, Typography } from 'src/components';
import { getNumFromStr, getStarshipImageUrl } from 'src/utils';
import { useImageColors } from 'src/hooks';
import { FALLBACK_IMAGE_URI, SOUND_SPEED } from 'src/constants/constants';

import { styles, StarshipCard } from './styles';

import { StarshipsParams } from '../../types';

const modelAndNameMatch = (name: string, model: string) => {
    if (name.match(model)) {
        return (
            <Typography type="h1-small" fontFamily="semiBold">
                {name}
            </Typography>
        );
    }
    return (
        <Flex>
            <Typography type="h1-small" fontFamily="semiBold">
                {name}
            </Typography>
            <Typography type="bodyLarge">{model}</Typography>
        </Flex>
    );
};

export const StarshipRenderer = (starship: StarshipsParams) => {
    const id = getNumFromStr(starship.url);
    const uri = getStarshipImageUrl(id);
    const { colors, picLoading } = useImageColors(uri);

    const maxSpeed =
        starship.max_atmosphering_speed !== 'n/a'
            ? `${Number(starship.max_atmosphering_speed) * SOUND_SPEED} km/h`
            : 'n/a';

    console.log(picLoading, starship.model, 'starship');
    return (
        <View>
            <StarshipCard colors={colors} picLoading={picLoading}>
                <Flex paddingString="10px 0 10px 0">{modelAndNameMatch(starship.name, starship.model)}</Flex>
                <ImageFallback
                    imageUri={uri}
                    style={styles.img}
                    resizeMode="cover"
                    fallbackStyles={styles.fallbackImg}
                    fallbackUri={FALLBACK_IMAGE_URI}
                />
                <Flex paddingString="10px 0 10px 0">
                    <Typography>Crew: {starship.crew}</Typography>
                    <Typography textTransform="capitalize">Class: {starship.starship_class}</Typography>
                    <Typography>Max Speed: {maxSpeed} </Typography>
                </Flex>
            </StarshipCard>
        </View>
    );
};
