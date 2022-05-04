import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, HomeRed, Save, SaveRed } from 'src/assets/icons';

import { styles } from './styles';

import MainScreenNavigator from '../main-screen-navigator';
import StarshipsNavigator from '../starships-screen-navigator';
import { NavigatorRoutes, ScreenRoutes } from '../../routes';

const Tab = createBottomTabNavigator();

const getTabIconsMapping = (route: NavigatorRoutes, focused: boolean) => {
    const iconMap: { [key in NavigatorRoutes]?: () => any } = {
        [NavigatorRoutes.Main]: () => (focused ? HomeRed : Home),
        [NavigatorRoutes.Starships]: () => (focused ? SaveRed : Save),
    };
    return iconMap[route]?.();
};

const TabIcon: React.FC<{ children: any }> = ({ children }) => {
    return <View style={{ alignItems: 'center', justifyContent: 'center' }}>{children}</View>;
};

const getTabBarIcon = (route: NavigatorRoutes, focused: boolean, activeColor: string, inactiveColor: string) => {
    const Icon = getTabIconsMapping(route, focused);

    return (
        <TabIcon>
            <Icon height={26} width={26} color={focused ? activeColor : inactiveColor} />
        </TabIcon>
    );
};

const BottomTabNavigator = () => {
    const theme = useTheme();

    const activeColor = theme.colors.secondary;
    const inactiveColor = theme.colors.primary;

    return (
        <Tab.Navigator
            initialRouteName={ScreenRoutes.Main}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarBounces: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                tabBarIcon: ({ focused }) =>
                    getTabBarIcon(route.name as NavigatorRoutes, focused, activeColor, inactiveColor),
            })}
        >
            <Tab.Screen name={NavigatorRoutes.Main} component={MainScreenNavigator} />
            <Tab.Screen name={NavigatorRoutes.Starships} component={StarshipsNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
