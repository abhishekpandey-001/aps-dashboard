import React from "react";
import { scanMeta } from "../data/scanDetails";
import { Globe } from "lucide-react";
import { MapPinHouse } from "lucide-react";
import { FlaskConical } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { File } from "lucide-react";

const iconMap = {
    Spidering: Globe,
    Mapping: MapPinHouse,
    Testing: FlaskConical,
    Validating: CalendarCheck,
    Reporting: File,
};

const ScanProgress = () => {
    return (
        <div className="ml-[18%] px-5 mt-5 flex gap-3 items-center border border-gray-400/20 dark:border-gray-400/20 rounded-xl shadow-lg dark:shadow-black/80">
            <div className="w-28 h-28 rounded-full border-4 border-gray-200 dark:border-white/10 flex flex-col items-center bg-black dark:bg-black/15 justify-center shrink-0">
                <div className="text-[#0CC8A8] text-3xl">{`${scanMeta.progress}%`}</div>
                <div className="text-[8px] text-gray-400">in Progress</div>
            </div>

            <div className="w-0.5 h-30 bg-gray-400/20 my-10 mx-3"></div>

            <div className="flex flex-col">
                {/* Step tracker */}
                <div className="flex items-center">
                    {scanMeta.steps.map((step, i) => {
                        const Icon = iconMap[step];

                        return (
                            <div key={step} className="flex items-center">
                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${step === scanMeta.currentStep
                                                ? "border-[#0CC8A8] bg-[#0CC8A8] text-white shadow-[0_0_20px_#0CC8A8]"
                                                : "border-gray-300 dark:border-white/20 text-gray-400"
                                            }`}
                                    >
                                        {Icon && <Icon size={18} />}
                                    </div>

                                    <span className="text-xs text-gray-400 whitespace-nowrap">
                                        {step}
                                    </span>
                                </div>

                                {i < scanMeta.steps.length - 1 && (
                                    <div className="w-45 h-0.5 bg-gray-300 dark:bg-white/10 mx-2 mb-4" />
                                )}
                            </div>
                        );
                    })}
                </div>
                {/* Separation long line partitioning */}
                <div className="w-full h-0.5 bg-gray-400/20 my-5"></div>

                {/* last line items */}

                <div className="flex justify-between">
                    <div >
                        <div className="text-gray-400 text-sm">Scan Type</div>
                        <div className="text-black dark:text-white/90 font-bold">{scanMeta.scanType}</div>
                    </div>

                     <div>
                        <div className="text-gray-400 text-sm">Targets</div>
                        <div className="text-black dark:text-white/90 font-bold">{scanMeta.targets}</div>
                    </div>

                     <div>
                        <div className="text-gray-400 text-sm">Started at</div>
                        <div className="text-black dark:text-white/90 font-bold">{scanMeta.startedAt}</div>
                    </div>

                     <div>
                        <div className="text-gray-400 text-sm">Credentials</div>
                        <div className="text-black dark:text-white/90 font-bold">{scanMeta.credentials}</div>
                    </div>


                     <div>
                        <div className="text-gray-400 text-sm">Files</div>
                        <div className="text-black dark:text-white/90 font-bold">{scanMeta.files}</div>
                    </div>

                    <div>
                        <div className="text-gray-400 text-sm">Checklists</div>
                        <div className="text-[#0CC8A8] font-semibold">{scanMeta.checklists}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanProgress;
