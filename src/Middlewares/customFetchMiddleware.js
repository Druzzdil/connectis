import customFetch from '../hooks/apiFetch/customFetch'
import {getTransactionsMockData} from '../Services/mockData'
import API_URL from "../Services/url/url";

const ENV = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production'
}
export const customFetchMiddleware = async (params) => {
    if (process.env.NODE_ENV === ENV.DEVELOPMENT && params.url === API_URL.GET_USER_DATA_URL) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: getTransactionsMockData, error: undefined, headers: {} });
            }, 2000);
        });
    } else {
        return customFetch(params);
    }
};
