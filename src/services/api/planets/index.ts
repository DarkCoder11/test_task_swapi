import { fetchUrl } from 'src/services';
import { QUERY_KEYS } from 'src/services/api/keys';
import api from 'src/services/api';

export const getPlanets = ({ pageParam = QUERY_KEYS.GetPlanets }) => {
    return fetchUrl(pageParam);
};

export const getPlanetById = async ({ queryKey }: { queryKey: string[] }) => {
    const [prodId, _] = queryKey;

    const { data } = await api.get(QUERY_KEYS.GetPlanetId + prodId);
    return data;
};
