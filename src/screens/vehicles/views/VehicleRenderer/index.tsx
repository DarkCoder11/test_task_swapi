import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ScreenRoutes } from 'src/navigation/routes';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { getVehicleImageUrl, getNumFromStr } from 'src/utils';
import { Button, Flex, ImageFallback, RenderStat, Typography } from 'src/components';
import { VehiclesScreenNavigatorStack } from 'src/navigation/navigators/vehicles-screen-navigator/types';

import { styles, PlanetWrapper } from './styles';

import { Vehicle } from '../../types';

export const VehicleRenderer = (vehicle: Vehicle) => {
    const navigation = useNavigation<VehiclesScreenNavigatorStack>();

    const id = getNumFromStr(vehicle.url);
    const uri = getVehicleImageUrl(id);

    const navigateToVehicle = () => {
        navigation.navigate(ScreenRoutes.Vehicle, { vehicleId: id });
    };

    const infoList = useMemo(
        () => [
            {
                name: 'Cargo Capacity',
                stat: vehicle?.cargo_capacity,
                symbol: 'V',
            },
            {
                name: 'Crew',
                stat: vehicle?.crew,
            },
            {
                name: 'Class',
                stat: vehicle?.vehicle_class,
                width: '170px',
            },
            {
                name: 'Max Speed',
                stat: vehicle?.max_atmosphering_speed,
                symbol: 'C',
            },
        ],
        [vehicle?.cargo_capacity, vehicle?.crew, vehicle?.max_atmosphering_speed, vehicle?.vehicle_class],
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
            <Button onPress={navigateToVehicle}>
                <ImageFallback
                    imageUri={uri}
                    style={styles.img}
                    resizeMode="contain"
                    fallbackStyles={styles.img}
                    fallbackUri={FALLBACK_IMAGE_URI}
                />
            </Button>
            <Flex marginString="0 5px" width="170px">
                <Button onPress={navigateToVehicle}>
                    <Typography type="bodyLarge" fontFamily="bold">
                        {vehicle.name}
                    </Typography>
                </Button>
                {infoRenderer}
            </Flex>
        </PlanetWrapper>
    );
};
