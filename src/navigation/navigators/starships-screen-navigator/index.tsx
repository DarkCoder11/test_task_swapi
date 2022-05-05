import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Starships, Starship } from 'src/screens';
import { ScreenRoutes } from 'src/navigation/routes';

const Stack = createStackNavigator();

const StarshipsScreenNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={ScreenRoutes.Starships} component={Starships} />
            <Stack.Screen name={ScreenRoutes.Starship} component={Starship} />
        </Stack.Navigator>
    );
};

export default StarshipsScreenNavigator;
