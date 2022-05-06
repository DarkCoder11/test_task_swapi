import React from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { ChevronBack } from 'src/assets/icons';
import { getPlanetById } from 'src/services/api/planets';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { convertNumToReadableStr, getPlanetImageUrl } from 'src/utils';
import { Button, Flex, ImageFallback, RenderStat, Typography, Wrapper } from 'src/components';

import { styles } from './styles';
import { PlanetProps } from './types';

const Planet: React.FC<PlanetProps> = ({ route }) => {
    const navigation = useNavigation();

    const id = route.params.planetId;

    const { data, isLoading } = useQuery([id, 'planet'], getPlanetById);
    const uri = getPlanetImageUrl(id);

    const navigateBack = () => {
        navigation.goBack();
    };

    const dataList = [
        {
            title: 'Climate',
            stat: data?.climate,
        },
        {
            title: 'Diameter',
            stat: data?.diameter,
            symbol: 'm',
        },
        {
            title: 'Gravity',
            stat: data?.gravity,
            symbol: 'm',
        },
        {
            title: 'Orbital period',
            stat: data?.orbital_period,
            symbol: 'hrs',
        },
        {
            title: 'Population',
            stat: String(convertNumToReadableStr(data?.population)),
        },
        {
            title: 'Rotation period',
            stat: data?.rotation_period,
            symbol: 'hr',
        },
        {
            title: 'Surface water',
            stat: data?.surface_water,
            symbol: '%',
        },
        {
            title: 'Terrain',
            stat: data?.terrain,
        },
    ];

    const dataListRendered = dataList.map(
        (item) =>
            item.stat && (
                <View key={item.title}>
                    <RenderStat stat={item.stat} title={item.title} symbol={item.symbol && item.symbol} />
                </View>
            ),
    );

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
                    <Typography type="h1">{data?.name}</Typography>
                    <Flex marginString="15px 0">
                        <ImageFallback
                            imageUri={uri}
                            resizeMode="cover"
                            style={styles.img}
                            fallbackStyles={styles.img}
                            fallbackUri={FALLBACK_IMAGE_URI}
                        />
                        {dataListRendered}
                    </Flex>
                </Flex>
            )}
        </Wrapper>
    );
};

export default Planet;
