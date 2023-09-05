import { useEffect, useState } from "react";
import customFetch from '../apiFetch/customFetch';

function useCustomFetch(params) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (params.url) {
                    const response = await customFetch(params);
                    setData(response.data);
                } else {
                    setData(null);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params]);

    return { data, loading, error };
}

export default useCustomFetch;
