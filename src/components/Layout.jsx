import React from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary text-text">
            <Sidebar />
            <main className="md:ml-64 min-h-screen pb-20 md:pb-0">
                <div className="max-w-4xl mx-auto p-6 md:p-12">
                    {children}
                </div>
            </main>
            <BottomNav />
        </div>
    );
};

export default Layout;
