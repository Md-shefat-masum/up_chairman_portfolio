import userSlice from "../views/pages/users/config/store";
import userRoleSlice from "../views/pages/user_roles/config/store";
import userAcheivementSlice from "../views/pages/user_acheivements/config/store";
import userContactNumberSlice from "../views/pages/user_contact_numbers/config/store";
import userEducationSlice from "../views/pages/user_educations/config/store";
import userEmailSlice from "../views/pages/user_emails/config/store";
import userProfileInfoSlice from "../views/pages/user_profile_infos/config/store";
import userSocialLinkSlice from "../views/pages/user_social_links/config/store";

// blog store
import blogSlice from "../views/pages/blog/blogs/config/store";
import blogCategorieSlice from "../views/pages/blog/blog_categories/config/store";
import blogCommentSlice from "../views/pages/blog/blog_comments/config/store";
import blogCommentReplySlice from "../views/pages/blog/blog_comment_replies/config/store";
import blogImageSlice from "../views/pages/blog/blog_images/config/store";

// content store
import contentSlice from "../views/pages/content/contents/config/store";
import contentCategorieSlice from "../views/pages/content/content_categories/config/store";
import contentCommentSlice from "../views/pages/content/content_comments/config/store";
import contentCommentReplySlice from "../views/pages/content/content_comment_replies/config/store";
import contentImageSlice from "../views/pages/content/content_images/config/store";

// contact message
import contactMessageSlice from "../views/pages/contact_message/contact_messages/config/store";

// union porishod 
import unionPorishodNoticeSlice from "../views/pages/union_porishod_notice/union_porishod_notice/config/store";

// user review  
import userReviewSlice from "../views/pages/user_reviews/user_reviews/config/store";

//banner
import bannerSlice from "../views/pages/banner/banners/config/store";

// setting
import settingTitleSlice from "../views/pages/setting/setting_titles/config/store";
import settingValueSlice from "../views/pages/setting/setting_values/config/store";

// photo gallery
import photoGalleryCategorieSlice from "../views/pages/photo_gallery/photo_gallery_categories/config/store";
import photoGalleryImageSlice from "../views/pages/photo_gallery/photo_gallery_images/config/store";

// video gallery
import videoGalleryCategorieSlice from "../views/pages/video_gallery/video_gallery_categories/config/store";
import videoGalleryImageSlice from "../views/pages/video_gallery/video_gallery_images/config/store";

// site url
import siteUrlSlice from "../views/pages/site_url/site_urls/config/store";
import siteUrlViewCountSlice from "../views/pages/site_url/site_url_view_counts/config/store";

// tag
import tagSlice from "../views/pages/tag/tags/config/store";

// owner intro
import ownerIntroSlice from "../views/pages/owner_intro/owner_intro/config/store";

// quotes
import speakerQuoteSlice from "../views/pages/speaker_quotes/config/store";

// heading title
import headingTitlesSlice from "../views/pages/heading_titles/config/store";

// about user
import aboutUserSlice from "../views/pages/about_users/config/store";

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        user_role: userRoleSlice.reducer,
        user_acheivement: userAcheivementSlice.reducer,
        user_contact_number: userContactNumberSlice.reducer,
        user_education: userEducationSlice.reducer,
        user_email: userEmailSlice.reducer,
        user_profile_info: userProfileInfoSlice.reducer,
        user_social_link: userSocialLinkSlice.reducer,

        // blog store
        blog: blogSlice.reducer,
        blog_categorie: blogCategorieSlice.reducer,
        blog_comment: blogCommentSlice.reducer,
        blog_comment_reply: blogCommentReplySlice.reducer,
        blog_image: blogImageSlice.reducer,

        // content store
        content: contentSlice.reducer,
        content_categorie: contentCategorieSlice.reducer,
        content_comment: contentCommentSlice.reducer,
        content_comment_reply: contentCommentReplySlice.reducer,
        content_image: contentImageSlice.reducer,

        // contact message
        contact_message: contactMessageSlice.reducer,

        // union porishod
        union_porishod_notice: unionPorishodNoticeSlice.reducer,

        // user reviews
        user_review: userReviewSlice.reducer,

        // quotes
        speaker_quote: speakerQuoteSlice.reducer,

        // haeding title
        heading_title: headingTitlesSlice.reducer,

        // about user
        about_user: aboutUserSlice.reducer,

        // owner intro
        owner_intro: ownerIntroSlice.reducer,

        // banenr
        banner: bannerSlice.reducer,

        // setting
        setting_title: settingTitleSlice.reducer,
        setting_value: settingValueSlice.reducer,

        // photo gallery
        photo_gallery_categorie: photoGalleryCategorieSlice.reducer,
        photo_gallery_image: photoGalleryImageSlice.reducer,

        // video gallery
        video_gallery_categorie: videoGalleryCategorieSlice.reducer,
        video_gallery_image: videoGalleryImageSlice.reducer,

        // site url
        site_url: siteUrlSlice.reducer,
        site_url_view_count: siteUrlViewCountSlice.reducer,

        // tag
        tag: tagSlice.reducer,

        
    }
});


export default store;