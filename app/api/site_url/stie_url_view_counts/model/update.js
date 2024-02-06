const { body, validationResult } = require("express-validator");
const model = require("./model");

const data_validation = async (request_data) => {
    await body("site_url")
        .not()
        .isEmpty()
        .withMessage("the site_url field is required")
        .run(request_data);

    await body("ip_address")
        .not()
        .isEmpty()
        .withMessage("the ip_address field is required")
        .run(request_data);

    await body("device")
        .not()
        .isEmpty()
        .withMessage("the device field is required")
        .run(request_data);
    await body("location")
        .not()
        .isEmpty()
        .withMessage("the location field is required")
        .run(request_data);

    let result = validationResult(request_data);
    return {
        errors: result.array(),
        hasError: result.isEmpty() ? false : true,
    };
};


module.exports = async ( data) => {
    console.log(data);
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
        model_data.site_url = data.site_url;
        model_data.ip_address = data.ip_address;
        model_data.device = data.device;
        model_data.location = data.location;
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