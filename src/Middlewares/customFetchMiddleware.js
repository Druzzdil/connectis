import customFetch from '../hooks/apiFetch/customFetch'
import {getTransactionsMockData} from '../Services/mockData'

export const customFetchMiddleware = async (params) => {
    if (process.env.NODE_ENV === 'development' && params.url === 'connectctis_get_user_data') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: getTransactionsMockData, error: undefined, headers: {} });
            }, 1000);
        });
    } else {
        return customFetch(params);
    }
};
