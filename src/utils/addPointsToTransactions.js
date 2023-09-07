import { calculatePoints } from "./calculatePoints";

const addPointsToTransactions = (data) => {
    return data?.map(entry => {
        const transactionsForFirstMonth = entry.transactionsForFirstMonth?.map(transaction => {
            const points = calculatePoints(transaction.amount);
            return {
                ...transaction,
                points
            };
        }) || [];

        const transactionsForSecondMonth = entry.transactionsForSecondMonth?.map(transaction => {
            const points = calculatePoints(transaction.amount);
            return {
                ...transaction,
                points
            };
        }) || [];

        const transactionsForThirdMonth = entry.transactionsForThirdMonth?.map(transaction => {
            const points = calculatePoints(transaction.amount);
            return {
                ...transaction,
                points
            };
        }) || [];

        const combinedTransactions = [
            ...transactionsForFirstMonth,
            ...transactionsForSecondMonth,
            ...transactionsForThirdMonth
        ];

        return {
            ...entry,
            transactionsForFirstMonth,
            transactionsForSecondMonth,
            transactionsForThirdMonth,
            combinedTransactions
        };
    });
};

export default addPointsToTransactions;
