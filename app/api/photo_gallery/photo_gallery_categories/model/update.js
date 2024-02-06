const { body, validationResult } = require("express-validator");
const model = require("./model");
const { async } = require("q");
var fs = require('fs-extra')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const data_validation = async (request_data) => {
    await body("title")
        .not()
        .isEmpty()
        .withMessage("the title field is required")
        .run(request_data);
    await body("short_description")
        .not()
        .isEmpty()
        .withMessage("the short_description field is required")
        .run(request_data);
    await body("long_description")
        .not()
        .isEmpty()
        .withMessage("the long_description field is required")
        .run(request_data);
    await body("url")
        .not()
        .isEmpty()
        .withMessage("the url field is required")
        .run(request_data);
    await body("photo_alt")
        .not()
        .isEmpty()
        .withMessage("the photo_alt field is required")
        .run(request_data);
    await body("seo_title")
        .not()
        .isEmpty()
        .withMessage("the seo_title field is required")
        .run(request_data);
    await body("seo_keyword")
        .not()
        .isEmpty()
        .withMessage("the seo_keyword field is required")
        .run(request_data);
    await body("seo_description")
        .not()
        .isEmpty()
        .withMessage("the seo_description field is required")
        .run(request_data);

    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};


module.exports = async (datas) => {
    let data = datas.body;
    let files = datas.files;
    // console.log('yamin',data);
    // console.log('yamin files',files);

    const upload_files = (file, id) => {
        let file_name = parseInt(Math.random() * 1000) + id + file.name;
        const path = appDir + "/public/uploads/posts/" + file_name;
        fs.move(file.path, path, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
        photo_path = "uploads/posts/" + file_name;
        return photo_path;
    }

    let check = await data_validation({ body: data });

    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }
    try {
        

        const model_data = await model.findOne({ _id: data.id });
        // console.log('yamin2',model_data);
        // var photo_path = model_data.photo;
        
        if (files?.photo) {
            photo_path = upload_files(files?.photo, data.title);
            console.log('form photo_path',photo_path);
        }
        // const model_data = await model.findOne({ _id: data.id });
        model_data.title = data.title;
        model_data.short_description = data.short_description;
        model_data.long_description = data.long_description;
        model_data.url = data.url;
        model_data.photo = photo_path;
        model_data.photo_alt = data.photo_alt;
        model_data.seo_title = data.seo_title;
        model_data.seo_keyword = data.seo_keyword;
        model_data.seo_description = data.seo_description;
        await model_data.save();
        // console.log(data);
        return {
            status: 'success',
            data: model_data,
            message: "data updated successfully",
            status_code: 201,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 500,
        }
    }

}

/* module.exports = async (data) => {
    console.log(data);
    let check = await data_validation({ body: data });

    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }

    try {
        const model_data = await model.findOne({ _id: data.id });
        model_data.title = data.title;
        model_data.short_description = data.short_description;
        model_data.long_description = data.long_description;
        model_data.url = data.url;
        model_data.photo = data.photo;
        model_data.photo_alt = data.photo_alt;
        model_data.seo_title = data.seo_title;
        model_data.seo_keywords = data.seo_keywords;
        model_data.seo_description = data.seo_description;
        await model_data.save();
        // console.log(data);
        return {
            status: 'success',
            data: model_data,
            message: "data updated successfully",
            status_code: 201,
        };
    } catch (error) {
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 500,
        }
    }
    // return model_data,


} */