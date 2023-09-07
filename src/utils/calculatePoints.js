export const calculatePoints = (amount) => {
    amount = parseFloat(amount);
    let points = 0;

    if (amount > 100) {
        points += (amount - 100) * 2;
        amount = 100;
    }

    if (amount > 50) {
        points += (amount - 50);
    }

    return points;
}


export const calculateTotalPoints = (transactions) => {

    if (!Array.isArray(transactions)) {
        return 0;
    }

    return transactions.reduce((totalPoints, transaction) => {
        return totalPoints + calculatePoints(transaction.amount);
    }, 0);
}

export default calculateTotalPoints;
