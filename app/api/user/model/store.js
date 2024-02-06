const { body, validationResult } = require("express-validator");
const model = require("./model")
const { async } = require("q");
var fs = require('fs-extra')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const bcrypt = require('bcrypt')

const data_validation = async (request_data) => {
    await body("username")
        .not()
        .isEmpty()
        .withMessage("the username field is required")
        .custom(async (value) => {
            let username = await model.findOne({
                username: value
            })
            if (username) {
                return Promise.reject('Username already existing')
            }
        })
        .withMessage("Username already existing")
        .run(request_data);
    await body("email")
        .not()
        .isEmpty()
        .withMessage("the email field is required")
        .run(request_data);
    await body("password")
        .not()
        .isEmpty()
        .withMessage("the password field is required")
        .run(request_data);
    await body("full_name")
        .not()
        .isEmpty()
        .withMessage("the full_name field is required")
        .run(request_data);
    // await body("photo")
    //     .not()
    //     .isEmpty()
    //     .withMessage("the photo field is required")
    //     .run(request_data);
    await body("telegram_id")
        .not()
        .isEmpty()
        .withMessage("the telegram_id field is required")
        .custom(async (value) => {
            let telegram_id = await model.findOne({
                telegram_id: value
            })
            if (telegram_id) {
                return Promise.reject('telegram_id already existing')
            }
        })
        .withMessage("telegram_id already existing")
        .run(request_data);
    await body("telegram_name")
        .not()
        .isEmpty()
        .withMessage("the telegram_name field is required")
        .custom(async (value) => {
            let telegram_name = await model.findOne({
                telegram_name: value
            })
            if (telegram_name) {
                return Promise.reject('telegram_name already existing')
            }
        })
        .withMessage("telegram_name already existing")
        .run(request_data);
    await body("mobile_number")
        .not()
        .isEmpty()
        .withMessage("the mobile_number field is required")
        .custom(async (value) => {
            let mobile_number = await model.findOne({
                mobile_number: value
            })
            if (mobile_number) {
                return Promise.reject('mobile_number already existing')
            }
        })
        .withMessage("mobile_number already existing")
        .run(request_data);

    await body("role")
        .not()
        .isEmpty()
        .withMessage("the role field is required")
        .run(request_data);

    console.log("body data", body("confirm_password"));
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
            photo_path = upload_files(files?.photo, data.telegram_id);
            console.log('form photo_path', photo_path);
        }

        let password = data.password;
        // const user = new model();
        const user = {};
        user.username = data.username;
        user.full_name = data.full_name;
        user.email = data.email;
        user.password = await bcrypt.hash(password, 13);
        user.telegram_id = data.telegram_id;
        user.telegram_name = data.telegram_name;
        user.mobile_number = data.mobile_number;
        user.photo = photo_path;
        user.role = data.role;
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