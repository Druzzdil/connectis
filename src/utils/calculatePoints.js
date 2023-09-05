const calculatePoints = (transactionAmount) => {
    let points = 0;

    if (transactionAmount > 100) {
        points += (transactionAmount - 100) * 2 + 50;
    } else if (transactionAmount > 50) {
        points += transactionAmount - 50;
    }

    return points;
}

export default calculatePoints;
