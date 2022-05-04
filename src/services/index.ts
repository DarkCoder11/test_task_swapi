import api from './api';

export const fetchUrl = async (url: string) => {
    const { data } = await api.get(url);
    return data;
};
