const model = require("./model")

module.exports = async ({ page, paginate, search_key, orderByCol, orderByAsc, show_active_data }) => {

    let filter = {
        status: show_active_data,
    };

    if (search_key.length) {
        filter.username = { $regex: search_key, $options: "i" };
    }

    let skip = 0;
    if (page && page > 0) {
        page = parseInt(page);
        paginate = parseInt(paginate);
        skip = page * paginate - paginate;
    }

    let data = await model.find()
        .where(filter)
        .limit(paginate)
        .skip(skip);

    let data_count = await model.find().where(filter).count();
    return {
        data,
        data_count,
    };
}