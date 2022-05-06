import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenRoutes } from 'src/navigation/routes';

export type StarshipParamsList = {
    [ScreenRoutes.Starship]: { id: string; uri: string };
    [ScreenRoutes.Starships]: { id: string; uri: string };
};

export type StarshipScreenScreenNavigatorStack = StackNavigationProp<StarshipParamsList, ScreenRoutes.Starship>;
