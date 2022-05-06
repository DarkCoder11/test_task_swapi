import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Vehicles, Vehicle } from 'src/screens';
import { ScreenRoutes } from 'src/navigation/routes';

const Stack = createStackNavigator();

const VehiclesScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenRoutes.Vehicles} component={Vehicles} />
            <Stack.Screen name={ScreenRoutes.Vehicle} component={Vehicle} />
        </Stack.Navigator>
    );
};

export default VehiclesScreenNavigator;
