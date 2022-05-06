import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScreenRoutes } from 'src/navigation/routes';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { Button, Flex, ImageFallback, Typography } from 'src/components';
import { convertNumToReadableStr, getNumFromStr, getPlanetImageUrl } from 'src/utils';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import { styles, PlanetWrapper } from './styles';

import { Planet } from '../../types';

export const PlanetRenderer = (planet: Planet) => {
    const navigation = useNavigation<MainScreenNavigatorStack>();

    const id = getNumFromStr(planet.url);
    const uri = getPlanetImageUrl(id);

    const navigateToPlanet = () => {
        navigation.navigate(ScreenRoutes.Planet, { planetId: id });
    };

    const surfaceWater = planet.surface_water === 'unknown' ? null : `Surface water: ${planet.surface_water}%`;
    const population = isNaN(Number(planet.population))
        ? null
        : `Population: ${convertNumToReadableStr(planet.population)}`;

    return (
        <>
            {planet.name !== 'unknown' && (
                <PlanetWrapper>
                    <Button onPress={navigateToPlanet}>
                        <ImageFallback
                            imageUri={uri}
                            style={styles.img}
                            resizeMode="contain"
                            fallbackStyles={styles.img}
                            fallbackUri={FALLBACK_IMAGE_URI}
                        />
                    </Button>
                    <Flex marginString="5px 5px">
                        <Button onPress={navigateToPlanet}>
                            <Typography type="bodyLarge">{planet.name}</Typography>
                        </Button>
                        {population && <Typography type="body">{population}</Typography>}
                        <Flex width="190px">
                            <Typography type="body" textTransform="capitalize">
                                {planet.climate}
                            </Typography>
                        </Flex>
                        <Flex width="190px">
                            <Typography type="body" textTransform="capitalize">
                                {planet.terrain}
                            </Typography>
                        </Flex>
                        {surfaceWater && <Typography type="body">{surfaceWater}</Typography>}
                    </Flex>
                </PlanetWrapper>
            )}
        </>
    );
};
