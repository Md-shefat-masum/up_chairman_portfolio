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
    await body("description")
        .not()
        .isEmpty()
        .withMessage("the description field is required")
        .run(request_data);
    await body("photo_alt")
        .not()
        .isEmpty()
        .withMessage("the photo_alt field is required")
        .run(request_data);


//  console.log("body data",body("title") );
    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = async (datas) => {
    let data = datas.body;
    let files = datas.files;
    console.log('from store append', data);
    console.log('from store append', files);
    // console.log('from store append fdgfgdfdfile', files);

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
    // let 
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
        var photo_path = "";

        if (files?.photo) {
            photo_path = upload_files(files?.photo, data.title);
            console.log('form photo_path', photo_path);
        }


        // const user = new model();
        const user = {};
        user.title = data.title;
        user.photo_alt = data.photo_alt;
        user.description = data.description;
        user.photo = photo_path;
        // user.creator = data.creator;
        const new_data = await model.create(user);
        // user.save();
        // await user.save();
        // console.log(new_data);
        return {
            status: 'success',
            data: new_data,
            message: "data inserted successfully",
            status_code: 201,
        };
    } catch (error) {
        console.log(error);
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 409,
        }
    }
}