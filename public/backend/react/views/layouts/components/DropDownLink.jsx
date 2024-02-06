import React from 'react'

function DropDownLink({ text, icon }) {
    function toggle_menu(e) {
        var cel = e.currentTarget;
        var all_nav = document.querySelectorAll('nav .nav_link');
        [...all_nav].forEach(el => {
            if (el != cel)
                el.classList.remove('active')
        });
        cel.classList.toggle('active');
    }
    return (
        <>
            <div onClick={(e) => toggle_menu(e)} className="nav_link">
                <div className="drop_down_title">
                    <span class="material-symbols-outlined icon fill">
                        {icon || 'trip_origin'}
                    </span>
                    <span class="text">
                        {text || 'menu'}
                    </span>
                </div>
                <div className="more">
                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                </div>
            </div>
        </>
    )
}

export default DropDownLink