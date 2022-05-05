import React from 'react';

import { Flex, ImageFallback, Typography } from 'src/components';
import { getNumFromStr, getStarshipImageUrl } from 'src/utils';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';

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
    console.log(starship, 'starship');
    return (
        <StarshipCard>
            <Flex paddingString="10px 0 10px 0">{modelAndNameMatch(starship.name, starship.model)}</Flex>
            <ImageFallback imageUri={uri} style={styles.fallbackImg} fallbackUri={FALLBACK_IMAGE_URI} />
            <Flex paddingString="10px 0 10px 0">
                <Typography>Crew: {starship.crew}</Typography>
                <Typography textTransform="capitalize">Class: {starship.starship_class}</Typography>
                <Typography>Max Speed: {starship.max_atmosphering_speed}</Typography>
            </Flex>
        </StarshipCard>
    );
};
