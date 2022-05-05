import { fetchUrl } from 'src/services';
import { QUERY_KEYS } from 'src/services/api/keys';
import api from 'src/services/api';

export const getCharacters = ({ pageParam = QUERY_KEYS.GetCharacters }) => {
    return fetchUrl(pageParam);
};

export const getCharacterById = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[0];

    const { data } = await api.get(QUERY_KEYS.GetCharacterId + id);
    return data;
};
