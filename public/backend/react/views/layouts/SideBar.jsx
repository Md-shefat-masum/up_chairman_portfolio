import React from 'react'
import SingleLink from './components/SingleLink'
import DropDownLink from './components/DropDownLink'

function SideBar() {

    const handleSubmit = () =>{
        event.preventDefault();
        return window.confirm('Are you sure?') && event.target.submit();
    }

    return (
        <nav>
            <ul>
                <SingleLink to={'/'} text={'Dashboard'} icon={'monitoring'}></SingleLink>

                <li>
                    <DropDownLink text={'User Management'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/user'} text={'users'} icon={'trip_origin'}></SingleLink>
                        {/* <SingleLink to={'/user-role'} text={'user-roles'} icon={'trip_origin'}></SingleLink> */}
                        <SingleLink to={'/user-acheivement'} text={'user-acheivements'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-contact-number'} text={'user-contact-numbers'} icon={'trip_origin'}></SingleLink>
                        {/* <SingleLink to={'/user-education'} text={'user-educations'} icon={'trip_origin'}></SingleLink> */}
                        <SingleLink to={'/user-email'} text={'user-emails'} icon={'trip_origin'}></SingleLink>
                        {/* <SingleLink to={'/user-profile-info'} text={'user-profile-infos'} icon={'trip_origin'}></SingleLink> */}
                        <SingleLink to={'/user-social-link'} text={'user-social-links'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>



                {/* blog link */}
                <li>
                    <DropDownLink text={'Blog'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/blog'} text={'all'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-categorie'} text={'blog categorie'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/blog-comment'} text={'blog comment'} icon={'trip_origin'}></SingleLink>
                        {/* <SingleLink to={'/blog-comment-reply'} text={'blog comment reply'} icon={'trip_origin'}></SingleLink> */}
                        {/* <SingleLink to={'/blog-image'} text={'blog image'} icon={'trip_origin'}></SingleLink> */}

                    </ul>
                </li>


                {/* content link */}
                {/* <li>
                    <DropDownLink text={'Content'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/content'} text={'content'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-categorie'} text={'content-categorie'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-comment'} text={'content-comment'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-comment-reply'} text={'content-comment-reply'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/content-image'} text={'content-image'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li> */}


                {/* contact message */}

                <li>
                    <DropDownLink text={'Web site'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/contact-message'} text={'contact message'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/banner'} text={'banner'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/photo-gallery-categorie'} text={'photo gallery'} icon={'trip_origin'}></SingleLink>
                        {/* <SingleLink to={'/photo-gallery-image'} text={'photos'} icon={'trip_origin'}></SingleLink> */}
                        <SingleLink to={'/video-gallery-categorie'} text={'video gallery'} icon={'trip_origin'}></SingleLink>
                        {/* <SingleLink to={'/site-url'} text={'site urls'} icon={'trip_origin'}></SingleLink> */}
                        <SingleLink to={'/tag'} text={'tags'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/union-porishod-notice'} text={'union porishod notice'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/user-review'} text={'user review'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/owner-intro'} text={'owner intro'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/speaker-quote'} text={'speaker quote'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/heading-title'} text={'heading title'} icon={'trip_origin'}></SingleLink>
                        <SingleLink to={'/about-user'} text={'about user'} icon={'trip_origin'}></SingleLink>

                    </ul>
                </li>

                {/* setting */}

                <li>
                    <DropDownLink text={'Setting'} icon={'manage_accounts'}></DropDownLink>
                    <ul>
                        <SingleLink to={'/setting-title'} text={'setting'} icon={'trip_origin'}></SingleLink>
                    </ul>
                </li>

            </ul>
            <div className='logout_button'>
                <form onSubmit={handleSubmit} method='POST' action='/logout' >
                    <button>Logout</button>
                </form>
            </div>
        </nav>
    )
}

export default SideBar