import React from 'react';
import { DashboardSidebar } from '../components/dashboard/DashboardSideBar';

const DashboardLayout = ({children}) => {
    return (
        <div className='sm:flex min-h-screen'>
             <DashboardSidebar />
            <div className='flex-1'>{children}</div>
        </div>
    );
};

export default DashboardLayout;