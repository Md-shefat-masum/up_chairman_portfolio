const blogCategoriesModel = require("../api/blog/blog_categories/model/model")
const blogsModel = require("../api/blog/blogs/model/model")
const tagsModel = require("../api/tag/tags/model/model")
const userContactNumbersModel = require("../api/user_contact_numbers/model/model")
const userSocialLinksModel = require("../api/user_social_links/model/model")
const userEmailsModel = require("../api/user_emails/model/model")
const userContactMessagesModel = require("../api/contact_message/contact_messages/model/model")
const userSettingTitlesModel = require("../api/setting/setting_titles/model/model")
const settingModel = require("../api/setting/setting_titles/model/model");
module.exports = async (server, req) => {
    let blog_category = await blogCategoriesModel.find();
    let blog_related_category = await blogCategoriesModel.findOne({ title: 'ইউনিয়ন পরিষদ' }).populate('related_categories');
    let blog_related_category_2 = await blogCategoriesModel.findOne({ title: 'সামাজিক কাজ' }).populate('related_categories');

    let blog = await blogCategoriesModel.findOne({ url: "/" + 'union-porishod' });
    // let datas = await blogCategoriesModel.findOne({ url: "/"+req.params.url });

    let blogs = await blogsModel.find().where({ categories: blog?._id }).limit(6).sort({ createdAt: -1 });

    // console.log('blog_Related_categories', blog);
    let tags = await tagsModel.find().limit(10).sort({createdAt: -1});
    let contact_numbers = await userContactNumbersModel.find();
    let emails = await userEmailsModel.find();
    let social_links = await userSocialLinksModel.find();
    let contact_message = await userContactMessagesModel.find();
    let address = await userSettingTitlesModel.find();
    let setting_titles = await settingModel.findOne({ title: "logo" });
    server.locals.commonData = {
        blog_category,
        tags,
        contact_numbers,
        emails,
        social_links,
        contact_message,
        address,
        setting_titles,
        blog_related_category,
        blog_related_category_2,
        blogs,
        blog,

    };

    server.locals = {
        ...server.locals,

        seo_title: 'নুর মোহাম্মদ আবু তাহের',
        seo_keyword: 'নুর মোহাম্মদ আবু তাহের, ইউপি চেয়ারম্যান',
        seo_schematags: '',
        seo_description: 'ইউপি চেয়ারম্যান',
        seo_image: 'https://noortaher.info/uploads/posts/bnu.png',

    }

}