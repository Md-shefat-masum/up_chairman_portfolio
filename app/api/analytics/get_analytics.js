const blogModel = require("../blog/blogs/model/model");
const blogCategoryModel = require("../blog/blog_categories/model/model");
const blogCommentModel = require("../blog/blog_comments/model/model");
const photoGalleryModel = require("../photo_gallery/photo_gallery_categories/model/model");
const videoGalleryModel = require("../video_gallery/video_gallery_images/model/model");
const viewCountModel = require("../view_count/view_count_model");

module.exports = async function(req, res){

    return res.json({
        blogs: await blogModel.countDocuments({status:1}),
        blog_categories: await blogCategoryModel.countDocuments({status:1}),
        blog_comments: await blogCommentModel.countDocuments({status:1}),

        photos: await photoGalleryModel.countDocuments({status:1}),
        videos: await videoGalleryModel.countDocuments({status:1}),

        website_views: await viewCountModel.countDocuments({model_name: "home_page_view"}),
        blog_views: await viewCountModel.countDocuments({model_name: "posts"}),
    });
}