import { createContext, useContext } from "react";
import {useCustomFetch} from '../../hooks/index'
import API_URL from "src/url/url";
const DashboardDataContext = createContext(null);

const DashboardDataProvider = ({ children }) => {
    const { data, loading, error } = useCustomFetch({
        url: API_URL.GET_USER_DATA_URL,
    });

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

export default DashboardDataContext;
