const { body, validationResult } = require("express-validator");
const model = require("./model");

const data_validation = async (request_data) => {
    await body("type")
        .not()
        .isEmpty()
        .withMessage("the type field is required")
        .run(request_data);
    await body("icon")
        .not()
        .isEmpty()
        .withMessage("the icon field is required")
        .run(request_data);

    await body("url")
        .not()
        .isEmpty()
        .withMessage("the url field is required")
        .run(request_data);

    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};


module.exports = async ( data) => {
    console.log(data);
    // let check = await data_validation({ body: data });

    // if (check.hasError) {
    //     return {
    //         status: 'failed',
    //         data: check.errors,
    //         message: "validation error",
    //         status_code: 422,
    //     }
    // }

    try {
        const model_data = await model.findOne({ _id: data.id });
        model_data.type = data.type;
        model_data.url = data.url;
        model_data.icon = data.icon;
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