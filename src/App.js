import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import CoinPage from "./pages/CoinPage";
import DashboardPage from "./pages/DashboardPage";
import WatchListPage from "./pages/WatchListPage";
import ComparePage from "./pages/ComparePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App text-white bg-black  min-h-screen ">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/dashboard/coin/:id" element={<CoinPage />}/>
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/watchlist" element={<WatchListPage />}/>
          <Route path="/compare" element={<ComparePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
