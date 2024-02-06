import React from 'react'

function Header() {
    function toggle_navbar() {
        document.getElementById('app').classList.toggle('sidebar_hide');
    }
    return (
        <header>
            <div className="left">
                <span onClick={toggle_navbar} class="material-symbols-outlined fill sidebar_toggle">
                    apps
                </span>
            </div>
            <div className="right">
                <div className="profile_menu">
                    <div className="info">
                        <h1 className='name'>
                            mr. shefat
                        </h1>
                        <small>#admin</small>
                    </div>
                    <div className="img">
                        <img src="/images/1.jpg" alt="profile-pic" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header