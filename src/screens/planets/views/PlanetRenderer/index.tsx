import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { ScreenRoutes } from 'src/navigation/routes';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { Button, Flex, ImageFallback, RenderStat, Typography } from 'src/components';
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

    const infoList = useMemo(
        () => [
            {
                name: 'Population',
                stat: String(convertNumToReadableStr(planet?.population)),
            },
            {
                name: 'Climate',
                stat: planet?.climate,
                width: '160px',
            },
            {
                name: 'Terrain',
                stat: planet?.terrain,
                width: '160px',
            },
            {
                name: 'Suface Water',
                stat: planet?.surface_water,
                symbol: '%',
            },
        ],
        [planet?.climate, planet?.population, planet?.surface_water, planet?.terrain],
    );

    const infoRenderer = infoList.map((item) => (
        <View key={item.name}>
            <RenderStat
                title={item.name}
                stat={item.stat}
                symbol={item.symbol && item.symbol}
                width={item.width && item.width}
            />
        </View>
    ));

    return (
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
                    <Typography type="bodyLarge" fontFamily="bold">
                        {planet.name}
                    </Typography>
                </Button>
                {infoRenderer}
            </Flex>
        </PlanetWrapper>
    );
};
