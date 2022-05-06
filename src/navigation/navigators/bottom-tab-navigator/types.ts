import { ScreenRoutes } from '../../routes';

export type MainParamsList = {
    [ScreenRoutes.Main]: undefined;
    [ScreenRoutes.Starships]: undefined;
    [ScreenRoutes.Planet]: { planetId: string };
};
