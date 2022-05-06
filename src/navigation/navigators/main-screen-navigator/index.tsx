import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main, Planet } from 'src/screens';
import { ScreenRoutes } from 'src/navigation/routes';

const Stack = createStackNavigator();

const MainScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenRoutes.Main} component={Main} />
            <Stack.Screen name={ScreenRoutes.Planet} component={Planet} />
        </Stack.Navigator>
    );
};

export default MainScreenNavigator;
