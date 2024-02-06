import React from 'react'
import DashboardLayout from '../views/layouts/DashboardLayout.jsx';
import Analytics from '../views/pages/dashboard/Analytics.jsx';
import Error404 from '../views/pages/errors/Error404.jsx';

import user_routes from '../views/pages/users/config/routes.js';
import user_role_routes from '../views/pages/user_roles/config/routes.js';
import user_acheivement_routes from '../views/pages/user_acheivements/config/routes.js';
import user_contact_numbers_routes from '../views/pages/user_contact_numbers/config/routes.js';
import user_education_routes from '../views/pages/user_educations/config/routes.js';
import user_email_routes from '../views/pages/user_emails/config/routes.js';
import user_profile_info_routes from '../views/pages/user_profile_infos/config/routes.js';
import user_social_link_routes from '../views/pages/user_social_links/config/routes.js';

import blog_routes from '../views/pages/blog/blogs/config/routes.js';
import blog_categorie_routes from '../views/pages/blog/blog_categories/config/routes.js';
import blog_comment_routes from '../views/pages/blog/blog_comments/config/routes.js';
import blog_comment_reply_routes from '../views/pages/blog/blog_comment_replies/config/routes.js';
import blog_image_routes from '../views/pages/blog/blog_images/config/routes.js';

import content_routes from '../views/pages/content/contents/config/routes.js';
import content_categorie_routes from '../views/pages/content/content_categories/config/routes.js';
import content_comment_routes from '../views/pages/content/content_comments/config/routes.js';
import content_comment_reply_routes from '../views/pages/content/content_comment_replies/config/routes.js';
import content_image_routes from '../views/pages/content/content_images/config/routes.js';

import contact_message_routes from '../views/pages/contact_message/contact_messages/config/routes.js';

import union_porishod_notice_routes from '../views/pages/union_porishod_notice/union_porishod_notice/config/routes.js';

import user_review_routes from '../views/pages/user_reviews/user_reviews/config/routes.js';

import banner_routes from '../views/pages/banner/banners/config/routes.js';

import setting_title_routes from '../views/pages/setting/setting_titles/config/routes.js';
import setting_value_routes from '../views/pages/setting/setting_values/config/routes.js';

import photo_gallery_categorie_routes from '../views/pages/photo_gallery/photo_gallery_categories/config/routes.js';
import photo_gallery_image_routes from '../views/pages/photo_gallery/photo_gallery_images/config/routes.js';

import video_gallery_categorie_routes from '../views/pages/video_gallery/video_gallery_categories/config/routes.js';
import video_gallery_image_routes from '../views/pages/video_gallery/video_gallery_images/config/routes.js';

import site_url_routes from '../views/pages/site_url/site_urls/config/routes.js';
import site_url_view_count_routes from '../views/pages/site_url/site_url_view_counts/config/routes.js';

import tag_routes from '../views/pages/tag/tags/config/routes.js';

import owner_intro_routes from '../views/pages/owner_intro/owner_intro/config/routes.js';
import speaker_quote_routes from '../views/pages/speaker_quotes/config/routes.js';
import heading_title_routes from '../views/pages/heading_titles/config/routes.js';
import about_user from '../views/pages/about_users/config/routes.js';

const router = {
    path: "/",
    element: <DashboardLayout />,
    children: [
        {
            path: '',
            element: <Analytics></Analytics>
        },
        
        user_routes,
        user_role_routes,
        user_acheivement_routes,
        user_contact_numbers_routes,
        user_education_routes,
        user_email_routes,
        user_profile_info_routes,
        user_social_link_routes,

        blog_routes,
        blog_categorie_routes,
        blog_comment_routes,
        blog_comment_reply_routes,
        blog_image_routes,

        content_routes,
        content_categorie_routes,
        content_comment_routes,
        content_comment_reply_routes,
        content_image_routes,

        contact_message_routes,

        union_porishod_notice_routes,
        user_review_routes,
        speaker_quote_routes,
        heading_title_routes,
        about_user,

        owner_intro_routes,

        banner_routes,

        setting_title_routes,
        setting_value_routes,

        photo_gallery_categorie_routes,
        photo_gallery_image_routes,

        video_gallery_categorie_routes,
        video_gallery_image_routes,

        site_url_routes,
        site_url_view_count_routes,

        tag_routes,
        
        {
            path: '*',
            element: <Error404/>
        },
    ]
};

export default router;