import React from "react";
import { scans } from "../data/scans";
import { useNavigate } from "react-router-dom";

const statusStyles = {
  Completed: "text-green-500 border border-green-500/40 bg-green-500/10",
  Scheduled: "text-gray-400 border border-gray-400/40 bg-purple-700/20",
  Failed: "text-red-500 border border-red-500/40 bg-red-500/10",
};

const progressBarStyle = {
  Failed: "bg-red-500",
  Completed: "bg-[#0CC8A8]",
  Scheduled: "bg-[#0CC8A8]",
};

const ScanTable = ({ searchQuery }) => {
  const filtered = scans
    .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 11);

  const navigate = useNavigate();

  return (
    <div className="px-8 mt-4">
      <table className="w-full">
        {/* Header of the table where we aree seing the data */}
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-200 dark:border-white/10">
            <th className="text-left py-3 font-medium">Scan Name</th>
            <th className="text-left py-3 font-medium">Type</th>
            <th className="text-left py-3 font-medium">Status</th>
            <th className="text-left py-3 font-medium">Progress</th>
            <th className="text-left py-3 font-medium">Vulnerability</th>
            <th className="text-right py-3 font-medium">Last Scan</th>
          </tr>
        </thead>

        {/* Main body of the table data */}

        <tbody>
          {filtered.map((rowData) => {
            return (
              <tr
                key={rowData.id}
                onClick={() => navigate(`/scan/${rowData.id}`)}
                className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors"
              >
                {/* Scan Name */}
                <td className="py-4 text-sm font-medium">{rowData.name}</td>

                {/* Type of the scan being done */}
                <td className="py-4 text-sm text-gray-500">{rowData.type}</td>

                {/* Status */}
                <td className="py-4">
                  <span
                    className={`text-xs px-2 py-1 rounded-md ${statusStyles[rowData.status]}`}
                  >
                    {rowData.status}
                  </span>
                </td>

                {/* Progress */}
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full">
                      <div
                        className={`h-1.5 rounded-full ${progressBarStyle[rowData.status]}`}
                        style={{ width: `${rowData.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">
                      {rowData.progress}%
                    </span>
                  </div>
                </td>

                {/* Vulnerability Badges */}
                <td className="py-4">
                  <div className="flex gap-1">
                    {rowData.vulnerabilities.critical && (
                      <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {rowData.vulnerabilities.critical}
                      </span>
                    )}
                    {rowData.vulnerabilities.high && (
                      <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {rowData.vulnerabilities.high}
                      </span>
                    )}
                    {rowData.vulnerabilities.medium && (
                      <span className="bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {rowData.vulnerabilities.medium}
                      </span>
                    )}
                    {rowData.vulnerabilities.low && (
                      <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {rowData.vulnerabilities.low}
                      </span>
                    )}
                  </div>
                </td>

                {/* Last scan status */}
                <td className="py-4 text-sm text-gray-400 text-right">
                  {rowData.lastScan}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
        <span>Showing {filtered.length} of 100 Scans</span>
        <div className="flex gap-2">
          <button className="border border-white/10 px-2 py-1 rounded">
            ‹
          </button>
          <button className="border border-white/10 px-2 py-1 rounded">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanTable;
