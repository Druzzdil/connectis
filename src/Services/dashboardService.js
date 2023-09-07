import {customFetchMiddleware} from '../Middlewares/customFetchMiddleware';

export const fetchUserData = async (params) => {
    try {
        return await customFetchMiddleware(params);
    } catch (error) {
        throw error;
    }
};
