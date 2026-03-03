import { House } from "lucide-react";
import Sidebar from "../components/Sidebar";
import ScanProgress from "../components/ScanProgress";
import Navbar from "../components/Navbar";
import LiveConsole from "../components/LiveConsole";





const ScanDetail = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#0F0F0F] text-black dark:text-white flex-col">
      <Sidebar />

      {/* Navbar, as same I have used for the dashboard */}

      <Navbar/>

      {/* Progress bar  */}

      <ScanProgress/>

      {/* INTEGRATING the live console herre */}

      <LiveConsole/>


    </div>
  );
};

export default ScanDetail;
