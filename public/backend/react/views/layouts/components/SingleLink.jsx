import React from 'react'
import { Link } from 'react-router-dom'

function SingleLink({ to, text, icon }) {
    return (
        <>
            <li>
                <div className="nav_link">
                    <Link to={to || '#/'}>
                        <span class="material-symbols-outlined icon fill">
                            {icon || 'trip_origin'}
                        </span>
                        <span class="text">
                            {text || 'menu'}
                        </span>
                    </Link>
                </div>
            </li>
        </>
    )
}

export default SingleLink