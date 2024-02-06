const { body, validationResult } = require("express-validator");
const model = require("./model");

const data_validation = async (request_data) => {
    await body("title")
        .not()
        .isEmpty()
        .withMessage("the title field is required")
        .run(request_data);

    await body("result")
        .not()
        .isEmpty()
        .withMessage("the result field is required")
        .run(request_data);
    await body("start_date")
        .not()
        .isEmpty()
        .withMessage("the start_date field is required")
        .run(request_data);
    await body("end_date")
        .not()
        .isEmpty()
        .withMessage("the end_date field is required")
        .run(request_data);

    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};


module.exports = async ( data) => {
    console.log(data);

    try {
        const model_data = await model.findOne({ _id: data.id });
        model_data.title = data.title;
        model_data.start_date = data.start_date;
        model_data.end_date = data.end_date;
        model_data.result = data.result;
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

    
}