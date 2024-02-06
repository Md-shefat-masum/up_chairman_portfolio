const { body, validationResult } = require("express-validator");
const model = require("./model");
const { async } = require("q");
var fs = require('fs-extra')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const data_validation = async (request_data) => {
    await body("designation")
        .not()
        .isEmpty()
        .withMessage("the designation field is required")
        .run(request_data);
    await body("blood_group")
        .not()
        .isEmpty()
        .withMessage("the blood_group field is required")
        .run(request_data);
    await body("date_of_birth")
        .not()
        .isEmpty()
        .withMessage("the date_of_birth field is required")
        .run(request_data);
    await body("nationality")
        .not()
        .isEmpty()
        .withMessage("the nationality field is required")
        .run(request_data);
    await body("father_name")
        .not()
        .isEmpty()
        .withMessage("the father_name field is required")
        .run(request_data);
    await body("mother_name")
        .not()
        .isEmpty()
        .withMessage("the mother_name field is required")
        .run(request_data);
    await body("short_bio")
        .not()
        .isEmpty()
        .withMessage("the short_bio field is required")
        .run(request_data);
    await body("full_bio")
        .not()
        .isEmpty()
        .withMessage("the full_bio field is required")
        .run(request_data);
    await body("address_present")
        .not()
        .isEmpty()
        .withMessage("the address_present field is required")
        .run(request_data);
    await body("address_permanent")
        .not()
        .isEmpty()
        .withMessage("the address_permanent field is required")
        .run(request_data);
    await body("google_map")
        .not()
        .isEmpty()
        .withMessage("the google_map field is required")
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

    const upload_files = (file, id) => {
        let file_name = parseInt(Math.random() * 1000) + id + file.name;
        const path = appDir + "/public/uploads/posts/" + file_name;
        fs.move(file.path, path, function (err) {
            if (err) return console.error(err)
            console.log("success!")
        })
        banner_profile_pic_path = "uploads/posts/" + file_name;
        return banner_profile_pic_path;
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
        // var banner_profile_pic_path = model_data.photo;
        
        if (files?.banner_profile_pic) {
            banner_profile_pic_path = upload_files(files?.banner_profile_pic, data.title);
            console.log('form banner_profile_pic_path',banner_profile_pic_path);
        }
        model_data.designation = data.designation;
        model_data.blood_group = data.blood_group;
        model_data.date_of_birth = data.date_of_birth;
        model_data.nationality = data.nationality;
        model_data.banner_profile_pic = banner_profile_pic_path;
        model_data.father_name = data.father_name;
        model_data.mother_name = data.mother_name;
        model_data.short_bio = data.short_bio;
        model_data.full_bio = data.full_bio;
        model_data.address_present = data.address_present;
        model_data.address_permanent = data.address_permanent;
        model_data.google_map = data.google_map;
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