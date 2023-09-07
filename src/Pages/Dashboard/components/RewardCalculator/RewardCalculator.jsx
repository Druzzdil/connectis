import React from 'react'
import {useDashboardData} from '../../../../Context/DashboardContext/DashboardContext'
import calculateTotalPoints from "../../../../utils/calculatePoints";
import addPointsToTransactions from "../../../../utils/addPointsToTransactions"
import calculatetotalPointsForAllMonths from "../../../../utils/calculatetotalPointsForAllMonths"
import styles from './rewardCalculator.module.css';
import TransactionList from "../TransactionList/TransactionList";
const RewardCalculator = () => {
    const contextData = useDashboardData();

    if (!contextData || !contextData.data) {
        return <div id="loader">loading...</div>;
    }

    const data = contextData.data[0];
    const pointsForFirstMonths = calculateTotalPoints(data.transactionsForFirstMonth);
    const pointsForSecondMonth = calculateTotalPoints(data.transactionsForSecondMonth);
    const pointsForThirdMonth = calculateTotalPoints(data.transactionsForThirdMonth);

    const updatedData = addPointsToTransactions(contextData.data);
    const totalPoints = calculatetotalPointsForAllMonths(contextData.data);

    return (
        <div>
            <h2 className={styles.centeredHeader}>Reward Points Calculator</h2>
            <div className={styles.gridContainer}>
                <div>
                    <h3>Points earned for first Month</h3>
                    <div className={styles.lastMonth}>{pointsForFirstMonths}</div>
                    <TransactionList transactions={updatedData[0].transactionsForFirstMonth}/>
                </div>
                <div>
                    <h3>Points earned for Second Month</h3>
                    <div className={styles.lastMonth}>{pointsForSecondMonth}</div>
                    <TransactionList transactions={updatedData[0].transactionsForSecondMonth}/>
                </div>
                <div>
                    <h3>Points earned for Third Month</h3>
                    <div className={styles.lastMonth}>{pointsForThirdMonth}</div>
                    <TransactionList transactions={updatedData[0].transactionsForThirdMonth}/>
                </div>
            </div>
            <div>
                <h3 style={{marginLeft: '32px'}}>Points earned for Last 3 Month / Total = {totalPoints}</h3>
                <TransactionList transactions={updatedData[0].combinedTransactions}/>
            </div>
        </div>
    );
}

export default RewardCalculator
