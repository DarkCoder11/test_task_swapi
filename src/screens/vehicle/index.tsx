import React from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { getVehicleImageUrl } from 'src/utils';
import { ChevronBack } from 'src/assets/icons';
import { getVehicleById } from 'src/services/api/vehicles';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { Flex, RenderStat, Button, Typography, Wrapper, ImageFallback } from 'src/components';

import { styles } from './styles';
import { VehicleProps } from './types';

const Vehicle: React.FC<VehicleProps> = ({ route }) => {
    const navigation = useNavigation();

    const id = route.params.vehicleId;

    const { data, isLoading } = useQuery([id, 'vehicle'], getVehicleById);

    const uri = getVehicleImageUrl(id);

    const navigateBack = () => {
        navigation.goBack();
    };

    const dataList = [
        {
            title: 'Model',
            stat: data?.model,
        },
        {
            title: 'Manufacturer',
            stat: data?.manufacturer,
        },

        {
            title: 'Cargo',
            stat: data?.cargo_capacity,
            symbol: 'v',
        },
        {
            title: 'Consumables',
            stat: data?.consumables,
        },
        {
            title: 'Cost',
            stat: data?.cost_in_credits,
            symbol: '$',
        },
        {
            title: 'Crew',
            stat: data?.crew,
        },
        {
            title: 'Lenght',
            stat: data?.length,
            symbol: 'm',
        },
        {
            title: 'Max Speed',
            stat: data?.max_atmosphering_speed,
            symbol: 'C',
        },
        {
            title: 'Passengers',
            stat: data?.passengers,
        },
        {
            title: 'Class',
            stat: data?.vehicle_class,
        },
    ];

    const dataListRendered = dataList.map((item) => {
        return (
            item.stat && (
                <View key={item.title}>
                    <RenderStat stat={item.stat} title={item.title} symbol={item.symbol && item.symbol} />
                </View>
            )
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

export default Vehicle;
