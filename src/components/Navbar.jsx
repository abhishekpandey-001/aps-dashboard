import { House } from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

const Navbar = () => {
    return (
        <div className="ml-[18%]">

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
                    <button className="border dark:border-white/50 rounded border-black/30 px-4 py-1.5 text-sm font-semibold"
                    onClick={() => toast.success("Report exported successfully!")}
                    >Export Report</button>
                    <button className="border border-red-500 bg-red-400/20 rounded font-semibold text-red-500 px-4 py-1.5 text-sm"
                    onClick={()=>toast.error("Scan Stopped")}
                    >Stop Scan</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
