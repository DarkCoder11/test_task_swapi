import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenRoutes } from 'src/navigation/routes';

export type VehiclesParamsList = {
    [ScreenRoutes.Vehicle]: { vehicleId: string };
};

export type VehiclesScreenNavigatorStack = StackNavigationProp<VehiclesParamsList, ScreenRoutes.Vehicle>;
