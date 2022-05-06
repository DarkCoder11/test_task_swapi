import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useQuery } from 'react-query';

import { ScreenRoutes } from 'src/navigation/routes';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { Button, Flex, ImageFallback, RenderStat, Typography } from 'src/components';
import { convertNumToReadableStr, getPlanetImageUrl } from 'src/utils';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';
import { getPlanetById } from 'src/services/api/planets';

import { styles, PlanetWrapper } from './styles';

export const PlanetRenderer = ({ id }: { id: string }) => {
    const navigation = useNavigation<MainScreenNavigatorStack>();

    const { data: planet, isLoading } = useQuery([id, 'planet'], getPlanetById);

    const uri = getPlanetImageUrl(id);

    const navigateToPlanet = () => {
        navigation.navigate(ScreenRoutes.Planet, { planetId: id });
    };

    const infoList = [
        {
            name: 'Population',
            stat: String(convertNumToReadableStr(planet?.population)),
        },
        {
            name: 'Suface Water',
            stat: planet?.surface_water,
            symbol: '%',
        },
    ];

    const infoRenderer = infoList.map((item) => (
        <View key={item.name}>
            <RenderStat title={item.name} stat={item.stat} symbol={item.symbol && item.symbol} />
        </View>
    ));

    return (
        <>
            {!isLoading && (
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
            )}
        </>
    );
};
