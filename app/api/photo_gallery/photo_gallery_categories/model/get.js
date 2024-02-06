const { body, validationResult, param } = require("express-validator");
const model = require("./model")

const data_validation = async (request_data) => {
    


    await body('id')
        .not()
        .isEmpty()
        .withMessage("the id is required")
        .run(request_data);


    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};

module.exports = async (id) => {
    let check = await data_validation({ body: {id} });
    
    if (check.hasError) {
        return {
            status: 'failed',
            data: check.errors,
            message: "validation error",
            status_code: 422,
        }
    }
    try {
        let data = await model.findOne({ _id: id });
        return {
            status: 'success',
            data: data,
            message: "data get successfully",
            status_code: 201,
        };
    } catch (error) {
        return {
            status: 'failed',
            data: error,
            message: error.message,
            status_code: 404,
        }
    }
    
}