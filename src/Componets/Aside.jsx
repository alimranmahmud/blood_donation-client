import React, { useContext } from 'react';
import { FaHome, FaUsers, FaUserShield, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from '../Provider/AuthProvider';


const Aside = () => {
    const {role,logOut}=useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <aside className="w-64 min-h-screen bg-base-200 border-r">

            Logo
            <div className="p-4 text-center border-b">
                <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
                <p className="text-sm text-gray-500">Blood Web</p>
            </div>

            {/* Admin Profile */}
            <div className="p-4 flex items-center gap-3 border-b">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://i.pravatar.cc/150?img=12" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold">Admin</h3>
                    <p className="text-xs text-green-500">Online</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
                <NavLink
                    to="/dashboard/main"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
                        }`
                    }
                >
                    <FaHome />
                    Dashboard
                </NavLink>

           {
            role == 'donor' && (
                     <NavLink
                    to="/dashboard/add-request"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
                        }`
                    }
                >
                    <FaUsers />
                    Add Request
                </NavLink>
            )
           }

              {
                role=='admin' && (
                      <NavLink
                    to="/dashboard/all-users"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
                        }`
                    }
                >
                    <FaUsers />
                    All Users
                </NavLink>
                )
              }

                <NavLink
                    to="/dashboard/my-request"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
                        }`
                    }
                >
                    <FaUsers />
                    My Request
                </NavLink>


            </nav>

            {/* Logout */}
            <div className="absolute bottom-0 w-64 p-1 mt-20">
                <button onClick={handleLogOut} className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-error hover:text-white">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>

        </aside>
    );
};

export default Aside;