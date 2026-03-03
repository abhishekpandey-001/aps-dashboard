import React from "react";
import { useState } from "react";
import { findings } from "../data/scanDetails";
import ActivityLog from "./ActivityLog";
import { Timer } from 'lucide-react';
import VerificationLoop from "./VerificationLoop";
import Status from "./Status";

const severityStyles = {
    Critical: "bg-red-500 text-white",
    High: "bg-orange-500 text-white",
    Medium: "bg-yellow-500 text-white",
    Low: "bg-green-500 text-white",
};

const LiveConsole = () => {

    const [activeTab, setActiveTab] = useState("activity");

    return (
        <div className="flex justify-between gap-2 mt-4 ml-[18%] px-5">
            {/* Live console for the left side of the ui */}

            <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden min-w-[60%] shadow-lg dark:shadow-black/80">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#0CC8A8]" />
                        <span className="font-medium text-sm">Live Scan Console</span>
                    </div>
                    <span className="text-xs text-gray-400 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full flex items-center gap-2">
                        <Timer size={15}/> Runninng
                    </span>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 px-4 pt-3 border-b border-gray-200 dark:border-white/10">
                    <button
                        onClick={() => setActiveTab("activity")}
                        className={`text-sm pb-2 border-b-2 transition-colors ${activeTab === "activity" ? "border-[#0CC8A8] text-[#0CC8A8]" : "border-transparent text-gray-400"}`}
                    >
                        Activity Log
                    </button>
                    <button
                        onClick={() => setActiveTab("verification")}
                        className={`text-sm pb-2 border-b-2 transition-colors ${activeTab === "verification" ? "border-[#0CC8A8] text-[#0CC8A8]" : "border-transparent text-gray-400"}`}
                    >
                        Verification Loops
                    </button>
                </div>

                {/* Activity logs data  and verification loop data conditional rendering*/}

              <div className="p-4 font-mono text-xs space-y-3 h-80 overflow-y-auto no-scrollbar">
                {activeTab === "activity"? <ActivityLog/>:<VerificationLoop/>}
              </div>

            </div>

            {/* For the right part of the ui */}

            <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden min-w-[40%] shadow-lg dark:shadow-black/80">
                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-200 dark:border-white/10">
                    <span className="font-medium text-sm">Finding Log</span>
                </div>

                {/* Finding cards according to each case */}

                <div className="p-4 space-y-3 h-80 overflow-y-auto no-scrollbar">
                    {findings.map((f) => {
                        return (
                            <div
                                key={f.id}
                                className="border border-gray-200 dark:border-white/10 rounded-lg p-3"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full ${severityStyles[f.severity]}`}
                                    >
                                        {f.severity}
                                    </span>
                                    <span className="text-xs text-gray-400">{f.time}</span>
                                </div>
                                <p className="text-sm font-medium mt-2">{f.title}</p>
                                <p className="text-xs text-[#0CC8A8] mt-1">{f.endpoint}</p>
                                <p className="text-xs text-gray-400 mt-1">{f.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Showing the status bar of the console */}
            <Status/>
        </div>
    );
};

export default LiveConsole;
