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
    await body("name")
        .not()
        .isEmpty()
        .withMessage("the name field is required")
        .run(request_data);
    await body("sub_title")
        .not()
        .isEmpty()
        .withMessage("the sub_title field is required")
        .run(request_data);
    await body("description")
        .not()
        .isEmpty()
        .withMessage("the description field is required")
        .run(request_data);
    await body("button_url")
        .not()
        .isEmpty()
        .withMessage("the button_url field is required")
        .run(request_data);
    await body("button_text")
        .not()
        .isEmpty()
        .withMessage("the button_text field is required")
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

    console.log("data firles", files);

    const upload_files = (file, id) => {
        let file_name = parseInt(Math.random() * 1000) + id + file.name;
        const path = appDir + "/public/uploads/posts/" + file_name;
        fs.move(file.path, path, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
        profile_photo_path = "uploads/posts/" + file_name;
        return profile_photo_path;
    }
    const upload_files2 = (file, id) => {
        let file_name = parseInt(Math.random() * 1000) + id + file.name;
        const path = appDir + "/public/uploads/posts/" + file_name;
        fs.move(file.path, path, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
        banner_photo_path = "uploads/posts/" + file_name;
        return banner_photo_path;
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
        
        var profile_photo_path = "";

        if (files?.profile_photo && files.profile_photo.size > 0) {
            profile_photo_path = upload_files(files?.profile_photo, data.title);
            model_data.profile_photo = profile_photo_path;
            // console.log('form profile_photo_path', profile_photo_path);
        }
        var banner_photo_path = "";

        if (files?.banner_photo && files.banner_photo.size > 0) {
            banner_photo_path = upload_files2(files?.banner_photo, data.title);
            model_data.banner_photo = banner_photo_path;
            console.log('form banner_photo_path', banner_photo_path);
        }

        model_data.title = data.title;
        model_data.name = data.name;
        model_data.sub_title = data.sub_title;
        model_data.short_description = data.short_description;
        model_data.description = data.description;
        
        
        model_data.button_text = data.button_text;
        model_data.button_url = data.button_url;
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