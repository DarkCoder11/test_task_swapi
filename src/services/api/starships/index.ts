import { fetchUrl } from 'src/services';
import { QUERY_KEYS } from 'src/services/api/keys';

export const getStarships = ({ pageParam = QUERY_KEYS.GetStartships }) => {
    return fetchUrl(pageParam);
};
