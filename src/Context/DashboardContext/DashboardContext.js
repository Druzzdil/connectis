import { createContext, useContext, useEffect, useState } from "react";
import {fetchUserData} from '../../Services/dashboardService'
const DashboardDataContext = createContext(null);

 export const DashboardDataProvider = ({ children }) => {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     useEffect(() => {
         const fetchData = async () => {
             setLoading(true);
             try {
                 const result = await fetchUserData({ url: 'connectctis_get_user_data' });
                 setData(result.data);
             } catch (e) {
                 setError(e);
             } finally {
                 setLoading(false);
             }
         };

         fetchData();
     }, []);

    return (
        <DashboardDataContext.Provider value={{ data, loading, error }}>
            {children}
        </DashboardDataContext.Provider>
    );
};

export const useDashboardData = () => {
    const context = useContext(DashboardDataContext);
    if (!context) {
        throw new Error("useDashboardData must be used within DashboardDataProvider");
    }
    return context;
};
