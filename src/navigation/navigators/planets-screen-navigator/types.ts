import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenRoutes } from 'src/navigation/routes';

import { MainParamsList } from '../bottom-tab-navigator/types';

export type PlanetParamsList = {
    [ScreenRoutes.Planet]: { planetId: string };
};

export type PlanetScreenNavigatorStack = StackNavigationProp<PlanetParamsList, ScreenRoutes.Planet>;
