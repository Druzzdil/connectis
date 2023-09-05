
export const getDashboardData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const data = getTransactionsForThreeMonths(); // używając wcześniej dostarczonych mockowych danych
                if (!data) {
                    throw new Error('No data returned.');
                }
                resolve({ data, loading: false, error: null });
            } catch (error) {
                reject({ data: null, loading: false, error });
            }
        }, 1000); // symuluj 1s opóźnienie
    });
};
