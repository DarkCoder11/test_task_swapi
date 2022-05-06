import React from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { getVehicleImageUrl } from 'src/utils';
import { ScreenRoutes } from 'src/navigation/routes';
import { styles } from 'src/screens/character/styles';
import { getVehicleById } from 'src/services/api/vehicles';
import { FALLBACK_IMAGE_URI } from 'src/constants/constants';
import { Button, Flex, ImageFallback, Typography } from 'src/components';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

export const VehicleList: React.FC<{ vehicleId: string }> = ({ vehicleId }) => {
    const { data: vehicleData, isLoading } = useQuery([vehicleId], getVehicleById);

    const navigation = useNavigation<MainScreenNavigatorStack>();

    const uri = getVehicleImageUrl(vehicleId);

    const navigateToVehicle = () => {
        navigation.navigate(ScreenRoutes.Vehicle, { vehicleId });
    };

    return (
        <>
            {!isLoading && (
                <Flex flexDirection="row" alignItems="center">
                    <Button onPress={navigateToVehicle}>
                        <ImageFallback
                            imageUri={uri}
                            resizeMode="cover"
                            style={styles.vehicleImg}
                            fallbackStyles={styles.vehicleImg}
                            fallbackUri={FALLBACK_IMAGE_URI}
                        />
                    </Button>
                    <Flex marginString="0 10px">
                        <Typography type="bodyLarge" color="crawl-yellow" fontFamily="bold">
                            {vehicleData.name}
                        </Typography>
                    </Flex>
                </Flex>
            )}
        </>
    );
};
