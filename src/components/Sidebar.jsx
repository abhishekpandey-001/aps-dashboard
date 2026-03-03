import {
    LayoutDashboard,
    Folder,
    Shield,
    Calendar,
    Bell,
    Settings,
    LifeBuoy,
    Sun,
    Moon,
} from "lucide-react";

import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const { dark, setDark } = useContext(ThemeContext);

    return (
        <div className="w-[18%] dark:bg-[#0F0F0F] bg-[#F5F5F5] border-r border-white/10 p-6 hidden lg:flex flex-col gap-6 h-screen fixed left-0 top-0">
            <div className="flex items-center gap-1.5 px-3">
                <div className="bg-[#0CC8A8] w-5 h-5 rounded-4xl mt-1.5"></div>
                <div className="text-[#0CC8A8] font-bold text-2xl">aps</div>
            </div>

            {/* Sidebard content and icons */}

            <div className="flex flex-col flex-1 justify-between mt-5 text-gray-500">
                {/* TOP SECTION */}
                <div className="flex flex-col gap-4">
                    <NavLink
                    to="/dashboard"
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                    to={"/comingsoon"}
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <Folder size={18} />
                        <span>Projects</span>
                    </NavLink>

                    <NavLink
                    to={"/scan"}
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <Shield size={18} />
                        <span>Scans</span>
                    </NavLink>

                    <NavLink
                    to={"/comingsoon"}
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <Calendar size={18} />
                        <span>Schedule</span>
                    </NavLink>

                    <hr className="my-4 text-gray-300 dark:text-gray-100/20" />

                    <NavLink
                    to={"/comingsoon"}
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <Bell size={18} />
                        <span>Notification</span>
                    </NavLink>

                    <NavLink
                    to={"/comingsoon"}
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <Settings size={18} />
                        <span>Settings</span>
                    </NavLink>

                    <NavLink
                    to={"/comingsoon"}
                        className={({ isActive }) =>
                            `flex gap-2 items-center px-3 py-1 rounded-4xl cursor-pointer transition-all ${isActive ? "bg-[#0CC8A8]/20 text-[#0CC8A8]" : "hover:bg-black/5 dark:hover:bg-white/5"}`
                        }>
                        <LifeBuoy size={18} />
                        <span>Support</span>
                    </NavLink>

                    <div
                        onClick={() => setDark(!dark)}
                        className="flex gap-1.5 px-3 cursor-pointer items-center hover:text-[#0CC8A8] transition-all"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                        <div>{dark ? "Light" : "Dark"}</div>
                    </div>
                </div>

                <hr className="mt-auto text-gray-300 dark:text-gray-100/20" />

                {/* BOTTOM SECTION */}
                <div className="flex items-center gap-2 pt-6 border-t border-white/10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsYx6MNwVdtCdMDpn_RV7h0JMj9pCpfQb2ig&s"
                        className="w-8 h-8 rounded-full"
                    />
                    <div>
                        <div className="text-xs text-gray-500">admin@edu.com</div>
                        <div className="text-sm font-medium dark:text-white text-black">
                            Security Lead
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
