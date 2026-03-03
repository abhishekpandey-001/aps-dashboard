import Sidebar from "../components/Sidebar";
import { House } from "lucide-react";
import { orgStats } from "../data/orgStats";
import { RefreshCcw } from 'lucide-react';
import SeverityCards from "../components/SeverityCards";
import Toolbar from "../components/Toolbar";
import { useState } from "react";
import ScanTable from "../components/ScanTable";
import toast from "react-hot-toast";

const Dashboard = () => {

    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-[#0F0F0F] text-black dark:text-white transition-colors">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-[18%]">
                {/* Navbar for constant display of nesting */}

                <div className="flex justify-between px-5 h-14 items-center shadow-sm dark:shadow-white/20">
                    {/* For the left side */}

                    <div className="flex items-center gap-3">
                        <span className="font-semibold">Scan</span>
                        <House className="text-gray-600" size={14} strokeWidth={1} />
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">Private Assets</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-[#0CC8A8] font-semibold">New Scan</span>
                    </div>

                    {/* For the right side */}

                    <div className="space-x-8">
                        <button className="border dark:border-white/50 rounded border-black/30 px-4 py-1.5 text-sm font-semibold"onClick={() => toast.success("Report exported successfully!")}>Export Report</button>
                        <button className="border border-red-500 bg-red-400/20 rounded font-semibold text-red-500 px-4 py-1.5 text-sm" onClick={() => toast.error("Scan stopped!")}>Stop Scan</button>
                    </div>
                </div>

                {/* Organisation stats */}

                <div className="flex justify-between px-5 mt-6 pt-5 border-t border-gray-200 dark:border-t-white/20">
                    <div className="flex gap-1.5 items-center">
                        <span className="text-gray-400 text-[12px]">Org:</span>
                        <span className="font-semibold">{orgStats.org}</span>
                    </div>

                    <span className="text-gray-600">|</span>

                    <div className="flex gap-1.5 items-center">
                        <span className="text-gray-400 text-[12px]">Owner:</span>
                        <span className="font-semibold">{orgStats.owner}</span>
                    </div>

                    <span className="text-gray-600">|</span>

                    <div className="flex gap-1.5 items-center">
                        <span className="text-gray-400 text-[12px]">Total Scans:</span>
                        <span className="font-semibold">{orgStats.totalScans}</span>
                    </div>

                    <span className="text-gray-600">|</span>

                    <div className="flex gap-1.5 items-center">
                        <span className="text-gray-400 text-[12px]">Scheduled:</span>
                        <span className="font-semibold">{orgStats.scheduled}</span>
                    </div>

                    <span className="text-gray-600">|</span>

                    <div className="flex gap-1.5 items-center">
                        <span className="text-gray-400 text-[12px]">Rescans:</span>
                        <span className="font-semibold">{orgStats.rescans}</span>
                    </div>

                    <span className="text-gray-600">|</span>

                    <div className="flex gap-1.5 items-center">
                        <span className="text-gray-400 text-[12px]">Failed Scans:</span>
                        <span className="font-semibold">{orgStats.failedScans}</span>
                    </div>

                    <span className="text-gray-600">|</span>

                    <div className="flex items-center gap-1.5">
                        <RefreshCcw size={15} className="text-blue-500"/>
                        <span className="text-gray-400 text-[12px]">{orgStats.lastUpdated}</span>
                    </div>
                </div>

                {/* Importing severity cards here */}

                <SeverityCards/>

                {/* Importing Toolbar with search funnctionality */}

                <Toolbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                {/* Importing and using the scantable here under the dashboard for visual reresentation of states and progresses */}

                <ScanTable searchQuery = {searchQuery}/>

            </div>
        </div>
    );
};

export default Dashboard;