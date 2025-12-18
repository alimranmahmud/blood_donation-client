import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../Componets/Aside';

const DashboardLayout = () => {
    return (
        <div>
            <div className="flex min-h-screen">
                <Aside />
                <main className="flex-1 p-6 bg-base-100">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

export default DashboardLayout;