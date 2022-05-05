import { fetchUrl } from 'src/services';
import { QUERY_KEYS } from 'src/services/api/keys';
import api from 'src/services/api';

export const getStarships = ({ pageParam = QUERY_KEYS.GetStartships }) => {
    return fetchUrl(pageParam);
};

export const getStarshipById = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[0];

    const { data } = await api.get(QUERY_KEYS.GetStartshipId + id);
    return data;
};
