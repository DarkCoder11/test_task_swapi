import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Planet, Planets } from 'src/screens';
import { ScreenRoutes } from 'src/navigation/routes';

const Stack = createStackNavigator();

const PlanetsScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenRoutes.Planets} component={Planets} />
            <Stack.Screen name={ScreenRoutes.Planet} component={Planet} />
        </Stack.Navigator>
    );
};

export default PlanetsScreenNavigator;
