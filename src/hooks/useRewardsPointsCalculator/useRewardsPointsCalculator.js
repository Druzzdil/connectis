const useRewardPointsCalculator = (transactions) => {
    const calculatePoints = (amount) => {
        if (amount <= 50) return 0;
        if (amount <= 100) return amount - 50;
        return 50 + (2 * (amount - 100));
    }

    return transactions.reduce((acc, transaction) => {
        return acc + calculatePoints(transaction.amount);
    }, 0);
}


export default useRewardPointsCalculator;
