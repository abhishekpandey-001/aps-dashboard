import React from 'react'
import { severityStats } from '../data/orgStats'
import { Ban, TriangleAlert, Search, MoveDown } from 'lucide-react';
import { MoveUp } from 'lucide-react';

const iconMap = {
    red: <Ban size={34} className="text-red-400 bg-red-400/20 p-2 rounded-md" />,
    orange: <TriangleAlert size={34} className="text-orange-400 bg-orange-400/20 p-2 rounded-md" />,
    yellow: <TriangleAlert size={34} className="text-yellow-400 bg-yellow-400/20 p-2 rounded-md" />,
    blue: <Search size={34} className="text-blue-400 p-2 rounded-md bg-blue-400/20" />,
};

const arrowMap = {
    up: <MoveUp size={12} className='text-red-600' />,
    down: <MoveDown size={12} className='text-green-600' />
}

const SeverityCards = () => {
    return (
        <div className='flex justify-between px-5 mt-10 pb-4 border-b border-gray-200 dark:border-b-gray-100/20'>
            {severityStats.map((e) => {
                return (
                    <div className='flex flex-col' key={e.label}>
                        <div className='flex gap-10'>
                            <div className='text-sm text-gray-400'> {e.label}</div>
                            <div>{iconMap[e.color]}</div>
                        </div>

                        <div className='flex items-baseline gap-5'>
                            <div className='font-semibold text-3xl'>{e.count}</div>
                            <div className={e.trend === "up" ? "text-red-400 flex items-center text-[10px]" : "text-green-400 flex items-center text-[10px]" }>
                                {arrowMap[e.trend]}
                                {e.change}
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default SeverityCards
