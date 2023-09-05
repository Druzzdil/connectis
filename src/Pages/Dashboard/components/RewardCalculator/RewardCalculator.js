import React from 'react'
import {useDashboardData} from "../../../../Context/DashboardContext/DashboardContext";

const RewardCalculator = () => {
   const data = useDashboardData()

    console.log(data, 'data')
    return (
        <div>
            <h2>Reward Points Calculator</h2>
        </div>
    );
}

export default RewardCalculator
