import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native';

import { Button, Flex, ImageFallback, Typography, Wrapper } from 'src/components';
import { ChevronBack } from 'src/assets/icons';
import { getStarshipById } from 'src/services/api/starships';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';

import { StarshipProps } from './types';
import { Container, styles } from './styles';

const Starship: React.FC<StarshipProps> = ({ route }) => {
    const id = route.params.id;
    const uri = route.params.uri;
    const navigation = useNavigation();

    const { data, isLoading } = useQuery(id, getStarshipById);

    const navigateBack = () => {
        navigation.goBack();
    };

    const infoList = [
        {
            name: 'Model',
            info: data?.model,
        },
        {
            name: 'Manufacturer',
            info: data?.manufacturer,
        },
        {
            name: 'Class',
            info: data?.starship_class,
        },
        {
            name: 'MGLT',
            info: data?.MGLT,
        },
        {
            name: 'Passengers',
            info: data?.passengers,
        },
        {
            name: 'Atmosphering speed',
            info: data?.max_atmosphering_speed,
        },
        {
            name: 'Crew',
            info: data?.crew,
        },
        {
            name: 'Cost',
            info: data?.cost_in_credits,
        },
        {
            name: 'Cargo capacity',
            info: data?.cargo_capacity,
        },
        {
            name: 'Hyperdrive rating',
            info: data?.hyperdrive_rating,
        },
        {
            name: 'Consumables',
            info: data?.consumables,
        },
    ];

    const infoRenderer = infoList.map((item) => {
        return (
            <Flex key={item.name} paddingString="5px 0" flexDirection="row" alignItems="center">
                <Typography fontFamily="semiBold" type="body">
                    {item.name}:
                </Typography>
                <Typography type="body"> {item.info}</Typography>
            </Flex>
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
                    {infoRenderer}
                </Container>
            )}
        </Wrapper>
    );
};

export default Starship;
