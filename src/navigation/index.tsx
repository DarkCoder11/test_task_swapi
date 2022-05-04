import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import BottomTabNavigator from './navigators/bottom-tab-navigator';

const Navigation = () => {
    const theme = useTheme();
    return (
        <NavigationContainer>
            <StatusBar showHideTransition="slide" backgroundColor={theme.colors.background} barStyle="dark-content" />
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
