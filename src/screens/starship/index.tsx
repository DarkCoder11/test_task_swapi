import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { ActivityIndicator, View } from 'react-native';

import { Button, Flex, ImageFallback, RenderStat, Typography, Wrapper } from 'src/components';
import { ChevronBack } from 'src/assets/icons';
import { getStarshipById } from 'src/services/api/starships';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';

import { StarshipProps } from './types';
import { Container, styles } from './styles';

const Starship: React.FC<StarshipProps> = ({ route }) => {
    const id = route.params.id;
    const uri = route.params.uri;
    const navigation = useNavigation();

    const { data, isLoading } = useQuery([id, 'starship'], getStarshipById);

    const navigateBack = () => {
        navigation.goBack();
    };

    const infoList = [
        {
            name: 'Model',
            stat: data?.model,
        },
        {
            name: 'Manufacturer',
            stat: data?.manufacturer,
        },
        {
            name: 'Class',
            stat: data?.starship_class,
        },
        {
            name: 'MGLT',
            stat: data?.MGLT,
        },
        {
            name: 'Passengers',
            stat: data?.passengers,
        },
        {
            name: 'Atmosphering speed',
            stat: data?.max_atmosphering_speed,
            symbol: 'C',
        },
        {
            name: 'Crew',
            stat: data?.crew,
        },
        {
            name: 'Cost',
            stat: data?.cost_in_credits,
            symbol: '$',
        },
        {
            name: 'Cargo',
            stat: data?.cargo_capacity,
            symbol: 'V',
        },
        {
            name: 'Hyperdrive rating',
            stat: data?.hyperdrive_rating,
        },
        {
            name: 'Consumables',
            stat: data?.consumables,
        },
    ];

    const infoRenderer = infoList.map((item) => {
        return (
            <View key={item.name}>
                <RenderStat title={item.name} stat={item.stat} symbol={item.symbol && item.symbol} />
            </View>
        );
    });

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
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Container showsVerticalScrollIndicator={false} bounces={false}>
                    <Flex marginString="10px 0">
                        <Typography type="h1">{data.name}</Typography>
                    </Flex>
                    <ImageFallback
                        imageUri={uri}
                        resizeMode="cover"
                        style={styles.img}
                        fallbackStyles={styles.img}
                        fallbackUri={FALLBACK_IMAGE_URI}
                    />
                    <Flex marginString="10px 0">{infoRenderer}</Flex>
                </Container>
            )}
        </Wrapper>
    );
};

export default Starship;
