import React from 'react'
import { Search } from 'lucide-react'
import { ListFilter } from 'lucide-react';
import { Columns2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Toolbar = ({ searchQuery, setSearchQuery }) => {
    console.log(searchQuery)
    return (
        <div>
            <div className="flex items-center justify-between px-8 mt-6">
                {/* Search */}
                <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 w-[75%] text-gray-500 dark:text-gray-300">
                    <Search size={14}/>
                    <input placeholder="Search scans by name or type..." className="bg-transparent outline-none text-sm w-full text-gray-600 dark:text-gray-300"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    
                    />
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-1">
                    <button className='items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 flex gap-1.5'><ListFilter size={15} /> Filter</button>
                    
                    <button className='px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 flex items-center gap-1.5'><Columns2 size={15} /> Columns</button>
                    <button className="bg-[#0CC8A8] text-white p-2 rounded-lg text-sm"
                    onClick={()=>toast.success("New scan created")} 
                    >+ New Scan</button>
                </div>
            </div>
        </div>
    )
}

export default Toolbar
