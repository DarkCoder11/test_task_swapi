import { fetchUrl } from 'src/services';
import { QUERY_KEYS } from 'src/services/api/keys';
import api from 'src/services/api';

export const getVehicles = ({ pageParam = QUERY_KEYS.GetVehicles }) => {
    return fetchUrl(pageParam);
};

export const getVehicleById = async ({ queryKey }: { queryKey: string[] }) => {
    const [prodId, _] = queryKey;

    const { data } = await api.get(QUERY_KEYS.GetVehicleId + prodId);
    return data;
};
