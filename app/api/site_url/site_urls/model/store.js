const { body, validationResult } = require("express-validator");
const model = require("./model");
const { async } = require("q");

const data_validation = async (request_data) => {
    await body("url")
        .not()
        .isEmpty()
        .withMessage("the url field is required")
        .run(request_data);
    await body("url_for_table")
        .not()
        .isEmpty()
        .withMessage("the url_for_table field is required")
        .run(request_data);
    await body("url_for_table_id")
        .not()
        .isEmpty()
        .withMessage("the url_for_table_id field is required")
        .run(request_data);
    await body("url_redirect_to")
        .not()
        .isEmpty()
        .withMessage("the url_redirect_to field is required")
        .run(request_data);
    await body("total_view")
        .not()
        .isEmpty()
        .withMessage("the total_view field is required")
        .run(request_data);
    await body("total_redirect")
        .not()
        .isEmpty()
        .withMessage("the total_redirect field is required")
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