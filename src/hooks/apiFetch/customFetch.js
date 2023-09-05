async function customFetch(params) {
    const {
        url,
        method = 'GET',
        filters = {},
        headers,
    } = params;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const combinedHeaders = { ...defaultHeaders, ...headers };
    const queryParams = new URLSearchParams({
        ...filters
    });

    let options = {
        method,
        headers: combinedHeaders,
    };

    try {
        const response = await fetch(`${url}?${queryParams}`, options);

        if (!response.ok) {
            return Promise.reject(
                new Error(`An error occurred: ${response.statusText}`)
            );
        }

        const data = await response.json();
        return {error: undefined, data, headers };
    } catch (error) {
        return Promise.reject(error);
    }
}

export default customFetch;
