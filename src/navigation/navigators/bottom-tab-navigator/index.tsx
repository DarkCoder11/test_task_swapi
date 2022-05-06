import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DarthVaderIcon, PlanetIcon, SpaceshipIcon, VehicleIcon } from 'src/assets/icons';
import VehiclesScreenNavigator from 'src/navigation/navigators/vehicles-screen-navigator';

import { styles } from './styles';

import MainScreenNavigator from '../main-screen-navigator';
import StarshipsNavigator from '../starships-screen-navigator';
import PlanetsScreenNavigator from '../planets-screen-navigator';
import { NavigatorRoutes, ScreenRoutes } from '../../routes';

const Tab = createBottomTabNavigator();

const getTabIconsMapping = (route: NavigatorRoutes) => {
    const iconMap: { [key in NavigatorRoutes]?: () => any } = {
        [NavigatorRoutes.Main]: () => DarthVaderIcon,
        [NavigatorRoutes.Starships]: () => SpaceshipIcon,
        [NavigatorRoutes.Planets]: () => PlanetIcon,
        [NavigatorRoutes.Vehicles]: () => VehicleIcon,
    };
    return iconMap[route]?.();
};

const TabIcon: React.FC = ({ children }) => {
    const theme = useTheme();
    const scaleX = useRef(new Animated.Value(2));
    const borderTopOpacity = useRef(new Animated.Value(0));

    const { addListener } = useNavigation();

    const animateTopBorder = (scaleXValue: number, opacityValue: number) => {
        Animated.timing(scaleX.current, {
            toValue: scaleXValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(borderTopOpacity.current, {
            toValue: opacityValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        const focusUnsubscribe = addListener('focus', () => {
            animateTopBorder(0.7, 1);
        });

        const blurUnsubscribe = addListener('blur', () => {
            animateTopBorder(2, 0);
        });

        return () => {
            focusUnsubscribe();
            blurUnsubscribe();
        };
    }, [addListener]);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Animated.View
                style={{
                    width: 25,
                    borderTopWidth: 2.5,
                    bottom: 10,
                    opacity: borderTopOpacity.current,
                    borderTopColor: theme.colors.white,
                    transform: [{ scaleX: scaleX.current }],
                }}
            />
            {children}
        </View>
    );
};

const getTabBarIcon = (route: NavigatorRoutes) => {
    const Icon = getTabIconsMapping(route);

    return (
        <TabIcon>
            <Icon height={26} width={26} />
        </TabIcon>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenRoutes.Main}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarBounces: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarIcon: ({ focused }) => getTabBarIcon(route.name as NavigatorRoutes),
            })}
        >
            <Tab.Screen name={NavigatorRoutes.Main} component={MainScreenNavigator} />
            <Tab.Screen name={NavigatorRoutes.Starships} component={StarshipsNavigator} />
            <Tab.Screen name={NavigatorRoutes.Planets} component={PlanetsScreenNavigator} />
            <Tab.Screen name={NavigatorRoutes.Vehicles} component={VehiclesScreenNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
