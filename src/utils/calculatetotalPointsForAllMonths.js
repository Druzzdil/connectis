import {calculatePoints} from "./calculatePoints";
const calculatetotalPointsForAllMonths = (data) => {
    let totalPoints = 0;

    data?.forEach(entry => {
        const transactionsForFirstMonth = entry.transactionsForFirstMonth.map(transaction => {
            return calculatePoints(transaction.amount);
        });

        const transactionsForSecondMonth = entry.transactionsForSecondMonth.map(transaction => {
            return calculatePoints(transaction.amount);
        });

        const transactionsForThirdMonth = entry.transactionsForThirdMonth.map(transaction => {
            return calculatePoints(transaction.amount);
        });

        totalPoints += transactionsForFirstMonth.reduce((acc, points) => acc + points, 0);
        totalPoints += transactionsForSecondMonth.reduce((acc, points) => acc + points, 0);
        totalPoints += transactionsForThirdMonth.reduce((acc, points) => acc + points, 0);
    });

    return totalPoints;
};

export default calculatetotalPointsForAllMonths
