import React from "react";
import { statusBar } from "../data/scanDetails";

const Status = () => {
  return (
    <div>
      {/* Status Bar - fixed at bottom */}
      <div className="fixed bottom-0 left-[18%] right-0 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0F0F0F] px-6 py-2 flex items-center justify-between text-xs text-gray-400">
        {/* Left side */}
        <div className="flex items-center gap-6">
          <span>
            • Sub-agents:{" "}
            <span className="text-white">{statusBar.subAgents}</span>
          </span>
          <span>
            • Parallel Executions:{" "}
            <span className="text-white">{statusBar.parallelExecutions}</span>
          </span>
          <span>
            • Operations:{" "}
            <span className="text-white">{statusBar.operations}</span>
          </span>
        </div>

        {/* Right side - severity counts */}
        <div className="flex items-center gap-4">
          <span>
            Critical: <span className="text-red-500">{statusBar.critical}</span>
          </span>
          <span>
            High: <span className="text-orange-500">{statusBar.high}</span>
          </span>
          <span>
            Medium: <span className="text-yellow-500">{statusBar.medium}</span>
          </span>
          <span>
            Low: <span className="text-green-500">{statusBar.low}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Status;
