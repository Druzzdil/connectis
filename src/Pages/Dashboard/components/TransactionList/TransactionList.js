import React from 'react';
import styles from './transactionList.module.css';

const TransactionList = ({transactions}) => {
    return (
        <div className={styles.transactionList}>
            <h3>List of Transactions</h3>
            <table className={styles.transactionTable}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionList;
