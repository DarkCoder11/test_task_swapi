import { StackNavigationProp } from '@react-navigation/stack';

import { ScreenRoutes } from 'src/navigation/routes';

import { MainParamsList } from '../bottom-tab-navigator/types';

export type StarshipsScreenScreenNavigatorStack = StackNavigationProp<MainParamsList, ScreenRoutes.Starships>;
