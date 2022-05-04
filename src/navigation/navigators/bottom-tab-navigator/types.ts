import { ScreenRoutes } from '../../routes';

export type MainParamsList = {
    [ScreenRoutes.Main]: undefined;
    [ScreenRoutes.Starships]: undefined;
};

export type TabIconParams = {
    children: any;
    focused: boolean;
};
