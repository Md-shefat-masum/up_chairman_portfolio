const apiUserSeeder = require("./app/api/user/seeder/seeder");
const apiUserrolesSeeder = require("./app/api/user_roles/seeder/seeder")
const apiUseracheivementSeeder = require("./app/api/user_acheivements/seeder/seeder")
const apiUsercontactnumberSeeder = require("./app/api/user_contact_numbers/seeder/seeder")
const apiUsereducationSeeder = require("./app/api/user_educations/seeder/seeder")
const apiUseremailSeeder = require("./app/api/user_emails/seeder/seeder")
const apiUsersociallinkSeeder = require("./app/api/user_social_links/seeder/seeder")
const apiUserprofileinfoSeeder = require("./app/api/user_profile_infos/seeder/seeder")
const apiBlogsSeeder = require("./app/api/blog/blogs/seeder/seeder")
const apiBlogCategoriesSeeder = require("./app/api/blog/blog_categories/seeder/seeder")
const apiBlogCommentsSeeder = require("./app/api/blog/blog_comments/seeder/seeder")
const apiBlogCommentRepliesSeeder = require("./app/api/blog/blog_comment_replies/seeder/seeder")
const apiBlogimagesSeeder = require("./app/api/blog/blog_images/seeder/seeder")
const apiContentSeeder = require("./app/api/content/contents/seeder/seeder")
const apiContentCategoriesSeeder = require("./app/api/content/content_categories/seeder/seeder")
const apiContentCommentsSeeder = require("./app/api/content/content_comments/seeder/seeder")
const apiContentCommentRepliesSeeder = require("./app/api/content/content_comment_replies/seeder/seeder")
const apiContentimagesSeeder = require("./app/api/content/content_images/seeder/seeder")
const apiContactMessagesSeeder = require("./app/api/contact_message/contact_messages/seeder/seeder")
const apiUnionPorishodNoticeSeeder = require("./app/api/union_porishod_notice/union_porishod_notice/seeder/seeder")
const apiUserReviewSeeder = require("./app/api/user_reviews/user_reviews/seeder/seeder")
const apiBannerSeeder = require("./app/api/banner/banners/seeder/seeder")
const apiSettingTitleSeeder = require("./app/api/setting/setting_titles/seeder/seeder")
const apiSettingValueSeeder = require("./app/api/setting/setting_values/seeder/seeder")
const apiSettingPhotoGalleryCategoriesSeeder = require("./app/api/photo_gallery/photo_gallery_categories/seeder/seeder")
const apiSettingPhotoGalleryimagesSeeder = require("./app/api/photo_gallery/photo_gallery_images/seeder/seeder")
const apiSettingVideoGalleryCategoriesSeeder = require("./app/api/video_gallery/video_gallery_categories/seeder/seeder")
const apiSettingVideoGalleryimagesSeeder = require("./app/api/video_gallery/video_gallery_images/seeder/seeder")
const apiSiteUrlSeeder = require("./app/api/site_url/site_urls/seeder/seeder")
const apiSiteUrlViewCountSeeder = require("./app/api/site_url/stie_url_view_counts/seeder/seeder")
const apiTagSeeder = require("./app/api/tag/tags/seeder/seeder")
const apiOwnerIntroSeeder = require("./app/api/owner_intro/owner_intro/seeder/seeder")
const apiSpeakerQuotesSeeder = require("./app/api/speaker_quotes/seeder/seeder")
const apiHeadingTitleSeeder = require("./app/api/heading_titles/seeder/seeder")
const apiAboutUsersSeeder = require("./app/api/about_users/seeder/seeder")


const seed = async () => {

    // user seeder!!!
    await apiUserSeeder();
    // await apiUserrolesSeeder();
    // await apiUseracheivementSeeder();
    // await apiUsercontactnumberSeeder();
    // await apiUsereducationSeeder();
    // await apiUseremailSeeder();
    // await apiUsersociallinkSeeder();
    // await apiUserprofileinfoSeeder();

    // blog seeder!!!
    // await apiBlogCategoriesSeeder();
    // await apiBlogsSeeder();
    // await apiBlogCommentsSeeder();
    // await apiBlogCommentRepliesSeeder();
    // await apiBlogimagesSeeder();

    // content seeder!!
    // await apiContentCategoriesSeeder();
    // await apiContentSeeder();
    // await apiContentCommentsSeeder();
    // await apiContentCommentRepliesSeeder();
    // await apiContentimagesSeeder();

    // contact message seeder!!
    // await apiContactMessagesSeeder();

    // union porishod notice seeder!!
    // await apiUnionPorishodNoticeSeeder();

    // user review seeder!!
    // await apiUserReviewSeeder();

    // owner intro seeder!!
    // await apiOwnerIntroSeeder();

    // quotes seeder!!
    // await apiSpeakerQuotesSeeder();

    // heading title seeder!!
    // await apiHeadingTitleSeeder();

    // about us  seeder!!
    // await apiAboutUsersSeeder();

    // banner seeder!!
    // await apiBannerSeeder();

    // // setting seeder!!
    // await apiSettingTitleSeeder();
    // await apiSettingValueSeeder();

    // // photo gallery
    // await apiSettingPhotoGalleryCategoriesSeeder();
    // await apiSettingPhotoGalleryimagesSeeder();

    // // video gallery
    // await apiSettingVideoGalleryCategoriesSeeder();
    // await apiSettingVideoGalleryimagesSeeder();

    // // site url
    // await apiSiteUrlSeeder();
    // await apiSiteUrlViewCountSeeder();

    // // tag seeder
    // await apiTagSeeder();
    
    process.exit();
}

seed();