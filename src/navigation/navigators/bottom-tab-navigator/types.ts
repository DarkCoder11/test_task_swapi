import { ScreenRoutes } from '../../routes';

export type MainParamsList = {
    [ScreenRoutes.Main]: undefined;
    [ScreenRoutes.Starships]: undefined;
    [ScreenRoutes.Planet]: { planetId: string };
    [ScreenRoutes.Character]: { characterId: string };
    [ScreenRoutes.Vehicle]: { vehicleId: string };
};
