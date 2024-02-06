import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import updateNavActive from './hooks/updateNavActive';
import SideBar from './SideBar';
import Header from './Header';

function DashboardLayout() {
    const rlocation = useLocation();
    useEffect(() => {
        updateNavActive();
    }, [rlocation]);

    return (
        <>
            <div className="app_body">
                <div className="left">
                    <div className="logo">
                        <a href="#/">Admin Panel</a>
                    </div>
                    <SideBar></SideBar>
                </div>
                <div className="right">
                    <Header></Header>
                    <main>
                        <Outlet></Outlet>
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout