import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { ImageFallback } from 'src/components';
import { getNumFromStr, getCharacterImageUrl } from 'src/utils';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { ScreenRoutes } from 'src/navigation/routes';
import { getPlanetById } from 'src/services/api/planets';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import { styles, PlanetWrapper } from './styles';

import { PlanetType } from '../../types';

export const PlanetRenderer = (planet: PlanetType) => {
    // const navigation = useNavigation<MainScreenNavigatorStack>();
    // const { data, isLoading } = useQuery(id, getPlanetById);
    //
    // const id = getNumFromStr(data.url);
    // // const uri = getCharacterImageUrl(id);
    //
    //
    // const navigateToPlanet = () => {
    //     navigation.navigate(ScreenRoutes.Planet, { planetId: id });
    // };

    return (
        <PlanetWrapper>
            {/*<ImageFallback*/}
            {/*    imageUri={null}*/}
            {/*    style={styles.img}*/}
            {/*    resizeMode="cover"*/}
            {/*    fallbackStyles={styles.img}*/}
            {/*    fallbackUri={FALLBACK_IMAGE_URI}*/}
            {/*/>*/}
        </PlanetWrapper>
    );
};
