import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { ChevronBack } from 'src/assets/icons';
import { Button, Flex, ImageFallback, Typography, Wrapper } from 'src/components';
import { getPlanetById } from 'src/services/api/planets';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { convertNumToReadableStr, getPlanetImageUrl } from 'src/utils';

import { styles } from './styles';
import { PlanetProps } from './types';

const checkUnknown = (info: string, title: string, symbol: string) => {
    if (info === 'unknown') {
        return null;
    }
    return `${title}: ${info} ${symbol}`;
};

const Planet: React.FC<PlanetProps> = ({ route }) => {
    const navigation = useNavigation();

    const id = route.params.planetId;

    const { data, isLoading } = useQuery(id, getPlanetById);
    const uri = getPlanetImageUrl(id);

    const navigateBack = () => {
        navigation.goBack();
    };

    console.log(data, 'data');

    return (
        <Wrapper>
            <Flex paddingString="15px 0 15px 15px">
                <Button onPress={navigateBack}>
                    <Flex flexDirection="row" alignItems="center" width="55px" justifyContent="space-between">
                        <ChevronBack width={20} height={20} />
                        <Typography>Back</Typography>
                    </Flex>
                </Button>
            </Flex>
            {!isLoading && (
                <Flex marginString="0 15px">
                    <Typography type="h1">{data.name}</Typography>
                    <Flex marginString="15px 0">
                        <ImageFallback
                            imageUri={uri}
                            resizeMode="cover"
                            style={styles.img}
                            fallbackUri={FALLBACK_IMAGE_URI}
                            fallbackStyles={styles.img}
                        />
                        <Flex marginString="10px 0">
                            <Typography fontFamily="semiBold" type="body" textTransform="capitalize">
                                Climate: {data.climate}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body">
                                {checkUnknown(data.diameter, 'Diameter', 'm')}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body" textTransform="capitalize">
                                Gravity: {data.gravity}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body">
                                {checkUnknown(data.orbital_period, 'Orbital period', 'hr')}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body">
                                {checkUnknown(String(convertNumToReadableStr(data.population)), 'Population', '')}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body">
                                {checkUnknown(data.rotation_period, 'Rotation period', 'hr')}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body">
                                {checkUnknown(data.surface_water, 'Surface water', '%')}
                            </Typography>
                            <Typography fontFamily="semiBold" type="body" textTransform="capitalize">
                                Terrain: {data.terrain}
                            </Typography>
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </Wrapper>
    );
};

export default Planet;
