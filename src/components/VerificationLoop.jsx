import React from "react";
import { verificationLogs } from "../data/scanDetails";

const VerificationLoop = () => {
  return (
    <div>
      {verificationLogs.map((verif) => {
        return (
          <div key={verif.id} className="flex gap-2 flex-wrap">
            <span className="text-gray-500">[{verif.time}]</span>
            <span className="text-black/80 dark:text-white/80">
              {verif.message}
            </span>
            {verif.highlight && (
              <span className="text-[#0CC8A8]">{verif.highlight}</span>
            )}
            {verif.rest && (
              <span className="text-black/80 dark:text-white/80">
                {verif.rest}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VerificationLoop;
