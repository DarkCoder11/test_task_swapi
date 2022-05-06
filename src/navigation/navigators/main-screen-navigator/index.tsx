import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, Character, Planet, Vehicle } from 'src/screens';
import { ScreenRoutes } from 'src/navigation/routes';

const Stack = createStackNavigator();

const MainScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenRoutes.Main} component={Main} />
            <Stack.Screen name={ScreenRoutes.Planet} component={Planet} />
            <Stack.Screen name={ScreenRoutes.Character} component={Character} />
            <Stack.Screen name={ScreenRoutes.Vehicle} component={Vehicle} />
        </Stack.Navigator>
    );
};

export default MainScreenNavigator;
