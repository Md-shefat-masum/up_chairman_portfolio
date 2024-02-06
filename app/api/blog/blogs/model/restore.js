const { body, validationResult } = require("express-validator");
const model = require("./model")

const data_validation = async (request_data) => {
    await body("id")
        .not()
        .isEmpty()
        .withMessage("the id field is required")
        .run(request_data);


    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = async (data) => {
    let check = await data_validation({body:data});
    // console.log(id, data);
    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }

    try {
        let model_data = await model.findOne({ _id: data.id });
        model_data.status = 1;
        model_data.save();
        return {
            status: 'success',
            data: model_data,
            message: "data restore successfully",
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
}