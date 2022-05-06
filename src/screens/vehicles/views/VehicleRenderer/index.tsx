import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';

import { getVehicleImageUrl } from 'src/utils';
import { ScreenRoutes } from 'src/navigation/routes';
import { getVehicleById } from 'src/services/api/vehicles';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { Button, Flex, ImageFallback, RenderStat, Typography } from 'src/components';
import { VehiclesScreenNavigatorStack } from 'src/navigation/navigators/vehicles-screen-navigator/types';

import { styles, PlanetWrapper } from './styles';

export const VehicleRenderer = ({ id }: { id: string }) => {
    const navigation = useNavigation<VehiclesScreenNavigatorStack>();

    const { data: vehicle, isLoading } = useQuery([id, 'vehicles'], getVehicleById);

    const uri = getVehicleImageUrl(id);

    const navigateToVehicle = () => {
        navigation.navigate(ScreenRoutes.Vehicle, { vehicleId: id });
    };

    const infoList = [
        {
            name: 'Cargo',
            stat: vehicle?.cargo_capacity,
            symbol: 'V',
        },
        {
            name: 'Crew',
            stat: vehicle?.crew,
        },
        {
            name: 'Max Speed',
            stat: vehicle?.max_atmosphering_speed,
            symbol: 'C',
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
                    <Button onPress={navigateToVehicle}>
                        <ImageFallback
                            imageUri={uri}
                            style={styles.img}
                            resizeMode="cover"
                            fallbackStyles={styles.img}
                            fallbackUri={FALLBACK_IMAGE_URI}
                        />
                    </Button>
                    <Flex marginString="0 5px" width="170px">
                        <Button onPress={navigateToVehicle}>
                            <Typography type="bodyLarge" fontFamily="bold">
                                {vehicle?.name}
                            </Typography>
                        </Button>
                        {infoRenderer}
                    </Flex>
                </PlanetWrapper>
            )}
        </>
    );
};
