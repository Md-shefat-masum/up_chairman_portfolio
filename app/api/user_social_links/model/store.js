const { body, validationResult } = require("express-validator");
const model = require("./model");
const { async } = require("q");

const data_validation = async (request_data) => {
    await body("type")
        .not()
        .isEmpty()
        .withMessage("the type field is required")
        .custom(async (value) => {
            let type = await model.findOne({
                type: value
            })
            if(type){
                return Promise.reject('Type already existing')
            }
        })
        .withMessage("Type already existing")
        .run(request_data);
    await body("icon")
        .not()
        .isEmpty()
        .withMessage("the icon field is required")
        .custom(async (value) => {
            let icon = await model.findOne({
                icon: value
            })
            if(icon){
                return Promise.reject('icon already existing')
            }
        })
        .withMessage("icon already existing")
        .run(request_data);


    await body("url")
        .not()
        .isEmpty()
        .withMessage("the url field is required")
        .custom(async (value) => {
            let title = await model.findOne({
                url: value
            })
            if(title){
                return Promise.reject('Url already existing')
            }
        })
        .withMessage("Url already existing")
        .run(request_data);
//  console.log("body data",body("title") );
    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = async (data) => {
    console.log('from user role store model', data);
    let check = await data_validation({body:data});
    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }

    try {
        const new_data = await model.create(data);
        return {
            status: 'success',
            data: new_data,
            message: "data inserted successfully",
            status_code: 201,
        };
    } catch (error) {
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 409,
        }
    }
}