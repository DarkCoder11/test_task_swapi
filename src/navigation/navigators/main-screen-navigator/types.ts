import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenRoutes } from 'src/navigation/routes';

import { MainParamsList } from '../bottom-tab-navigator/types';

export type MainScreenNavigatorStack = StackNavigationProp<MainParamsList, ScreenRoutes.Main>;
