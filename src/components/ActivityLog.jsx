import React from "react";
import { activityLogs } from "../data/scanDetails";

const ActivityLog = () => {
  return (
    <div className="">
      {activityLogs.map((logs) => {
        return (
          <div key={logs.id} className="flex gap-2 flex-wrap">
            <span className="text-gray-500">[{logs.time}]</span>
            <span className="text-black/80 dark:text-white/80">
              {logs.message}
            </span>
            {logs.highlight && (
              <span className="text-[#0CC8A8]">{logs.highlight}</span>
            )}
            {logs.rest && (
              <span className="text-black/80 dark:text-white/80">
                {logs.rest}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActivityLog;
