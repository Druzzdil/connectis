import './App.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardDataProvider from './Context/DashboardContext/DashboardContext'

function App() {
  return (
    <DashboardDataProvider>
      <Dashboard />
    </DashboardDataProvider>
  );
}

export default App;
