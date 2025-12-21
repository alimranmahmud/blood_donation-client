// import React, { useContext } from 'react';
// import { FaHome, FaUsers, FaUserShield, FaChartBar, FaSignOutAlt } from "react-icons/fa";
// import { NavLink } from "react-router";
// import { AuthContext } from '../Provider/AuthProvider';


// const Aside = () => {
//     const {role,logOut}=useContext(AuthContext)
//     const handleLogOut = ()=>{
//         logOut()
//     }
//     return (
//         <aside className="w-64 min-h-screen bg-base-200 border-r">

//             Logo
//             <div className="p-4 text-center border-b">
//                 <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
//                 <p className="text-sm text-gray-500">Blood Web</p>
//             </div>

//             {/* Admin Profile */}
//             <div className="p-4 flex items-center gap-3 border-b">
//                 <div className="avatar">
//                     <div className="w-12 rounded-full">
//                         <img src="https://i.pravatar.cc/150?img=12" />
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="font-semibold">Admin</h3>
//                     <p className="text-xs text-green-500">Online</p>
//                 </div>
//             </div>

//             {/* Navigation */}
//             <nav className="p-4 space-y-2">
//                 <NavLink
//                     to="/dashboard/main"
//                     className={({ isActive }) =>
//                         `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
//                         }`
//                     }
//                 >
//                     <FaHome />
//                     Dashboard
//                 </NavLink>

//            {
//             role == 'donor' && (
//                      <NavLink
//                     to="/dashboard/add-request"
//                     className={({ isActive }) =>
//                         `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
//                         }`
//                     }
//                 >
//                     <FaUsers />
//                     Add Request
//                 </NavLink>
//             )
//            }

//               {
//                 role=='admin' && (
//                       <NavLink
//                     to="/dashboard/all-users"
//                     className={({ isActive }) =>
//                         `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
//                         }`
//                     }
//                 >
//                     <FaUsers />
//                     All Users
//                 </NavLink>
//                 )
//               }

//                 <NavLink
//                     to="/dashboard/my-request"
//                     className={({ isActive }) =>
//                         `flex items-center gap-3 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "hover:bg-base-300"
//                         }`
//                     }
//                 >
//                     <FaUsers />
//                     My Request
//                 </NavLink>


//             </nav>

//             {/* Logout */}
//             <div className="absolute bottom-0 w-64 p-1 mt-20">
//                 <button onClick={handleLogOut} className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-error hover:text-white">
//                     <FaSignOutAlt />
//                     Logout
//                 </button>
//             </div>

//         </aside>
//     );
// };

// export default Aside;

import React, { useContext } from 'react';
import { FaHome, FaUsers, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from '../Provider/AuthProvider';

const Aside = () => {
    const { role, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    };

    const navClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300
        ${isActive
            ? "bg-red-600 text-white shadow-md"
            : "text-gray-700 hover:bg-red-100 hover:text-red-600"
        }`;

    return (
        <aside
            className="
            w-64 min-h-screen 
            bg-gradient-to-b from-red-50 to-white 
            border-r border-red-100
            flex flex-col
            overflow-x-hidden
            "
        >

            {/* Logo */}
            <div className="p-5 text-center border-b border-red-100">
                <h2 className="text-2xl font-extrabold text-red-600">
                    Blood<span className="text-gray-800">Web</span>
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                    Donate Blood, Save Life ❤️
                </p>
            </div>

            {/* Profile */}
            <div className="p-4 flex items-center gap-3 border-b border-red-100">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-red-300 ring-offset-2">
                        <img src="https://i.pravatar.cc/150?img=12" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 capitalize">
                        {role}
                    </h3>
                    <p className="text-xs text-green-600">Online</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                <NavLink
                    to="/dashboard/main"
                    className={navClass}
                >
                    <FaHome />
                    Dashboard
                </NavLink>

                {/* {role === 'admin' && ( */}
                    <NavLink
                        to="/dashboard/add-request"
                        className={navClass}
                    >
                        <FaUsers />
                        Add Request
                    </NavLink>
                {/* )} */}

                {role === 'admin' && (
                    <NavLink
                        to="/dashboard/all-users"
                        className={navClass}
                    >
                        <FaUsers />
                        All Users
                    </NavLink>
                )}

                <NavLink
                    to="/dashboard/my-request"
                    className={navClass}
                >
                    <FaUsers />
                    My Request
                </NavLink>
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-red-100">
                <button
                    onClick={handleLogOut}
                    className="
                    flex items-center gap-3 w-full px-4 py-2 rounded-xl
                    text-red-600 font-semibold
                    hover:bg-red-600 hover:text-white
                    transition-all duration-300
                    "
                >
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>

        </aside>
    );
};

export default Aside;
