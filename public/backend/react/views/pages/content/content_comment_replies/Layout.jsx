import React from 'react'
import { Outlet } from 'react-router-dom'
import setup from './config/setup'

function Layout() {
    return (
        <>
            <div className="bread_cumb">
                <h2 className="heading">{setup.layout_title}</h2>
            </div>
            <div className="content_body">
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Layout