import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import setup from "./setup";
import app_config from "../../../../config/app.config";

var store_prefix = setup.prefix;
var api_prefix = setup.api_prefix;

export const async_actions = {
    // all data
    [`fetch_all_data`]: createAsyncThunk(
        `${store_prefix}/fetch_all_data`,
        async (data, thunkAPI) => {
            
            let state = thunkAPI.getState().about_user;
            let qparams = {
                page: state[`page`],
                paginate: state[`paginate`],
                search_key: state[`search_key`],
                orderByCol: state[`orderByCol`],
                orderByAsc: state[`orderByAsc`],
                show_active_data: state[`show_active_data`],
            }
            const response = await axios.get(`${app_config.api_endpoint}/${api_prefix}`, {
                params: {
                    ...qparams
                },
            });
            // thunkAPI.dispatch(storeSlice.actions.my_action())
            return response.data;
        }
    ),

    // store data
    [`store_${store_prefix}`]: createAsyncThunk(
        `about_users/store_${store_prefix}`,
        async (form_data, thunkAPI) => {
            // console.log(thunkAPI);
            try {
                const response = await axios.post(`${app_config.api_endpoint}/${api_prefix}/store`, form_data);
                // thunkAPI.dispatch(storeSlice.actions.my_action())
                console.log(response.data);
                return response;
            } catch (error) {
                // console.log('from store user educations',error);
                // console.log(error.response?.data?.data?.keyValue?.[key]);
                // console.log(error.response?.status);
                window.render_alert(error)
            }
        }
    ),

    // edit data or updated data
    [`edit_${store_prefix}`]: createAsyncThunk(
        `about_users/edit_${store_prefix}`,
        async (form_data, thunkAPI) => {
            // console.log(thunkAPI);
            console.log('hoiche');
            try {
                const response = await axios.post(`${app_config.api_endpoint}/${api_prefix}/update`, form_data);
                // thunkAPI.dispatch(storeSlice.actions.my_action())
                // console.log(response);
                return response;
            } catch (error) {
                // console.log(error);
                // console.log(error.response?.data?.data?.keyValue?.[key]);
                // console.log(error.response?.status);
                window.render_alert(error)

            }
        }
    ),

    // delete data
    [`delete_data`]: createAsyncThunk(
        `${store_prefix}/delete_data`,
        async (id, thunkAPI) => {
            try {
                const response = await axios.post(`${app_config.api_endpoint}/${api_prefix}/delete`, { id });
                thunkAPI.dispatch(async_actions.fetch_all_data());
                return response;
            } catch (error) {
                return error;
            }
        }
    ),

    // delete data
    [`restore_data`]: createAsyncThunk(
        `${store_prefix}/restore_data`,
        async (id, thunkAPI) => {
            try {
                const response = await axios.post(`${app_config.api_endpoint}/${api_prefix}/restore`, { id });
                thunkAPI.dispatch(async_actions.fetch_all_data());
                return response;
            } catch (error) {
                return error;
            }
        }
    ),

    // details data
    [`details_${store_prefix}`]: createAsyncThunk(
        `about_users/details_${store_prefix}`,
        async (id, thunkAPI) => {
            // console.log(id);
            try {
                const response = await axios.get(`${app_config.api_endpoint}/${api_prefix}/details/${id}`);
                // console.log(response);
                return response;
            } catch (error) {
                return error;

            }
        }
    ),

    [`fetch_my_data`]: createAsyncThunk(
        `my_data/fetch_my_data`,
        async (params = 0, thunkAPI) => {
            // console.log(thunkAPI);
            const response = await axios.get(`${app_config.api_endpoint}/user-educations`);
            thunkAPI.dispatch(storeSlice.actions.set_my_data(response.data))
            // return response.data;
        }
    ),
};

const storeSlice = createSlice({
    name: `${store_prefix}`,
    initialState: {
        /* data store */
        all: [],
        item: {},

        /* data filters */
        off_canvas_show: false,
        management_modal_show: false,

        my_data: [],

        /* data store */
        [`all_data`]: [], // all data
        [`data`]: null, // selected data
        
        /* data filters */
        [`all_data_count`]: 0, // total data in database
        [`page`]: 1,
        [`paginate`]: 10,
        [`search_key`]: ``,
        [`orderByCol`]: "id",
        [`orderByAsc`]: true,
        [`show_active_data`]: 1, // show all active data

        /* selected data */
        [`${store_prefix}_selected`]: [], // selected data using checkbox
        [`${store_prefix}_show_selected`]: false, // will show selected data into offcanvas

        /* trigger showing data modal */
        [`${store_prefix}_show_management_modal`]: false,
        [`${store_prefix}_modal_selected_qty`]: 20, // how much will checked from management modal

        /* trigger showing data form canvas */
        [`${store_prefix}_show_create_canvas`]: false,
        [`${store_prefix}_show_edit_canvas`]: false,
    },
    reducers: {
        set_my_data: (state, { type, payload }) => {
            state.my_data = payload;
        },
        add: (state, { type, payload }) => {
            state.all = payload;
        },
        toggle_off_canvas_show: (state, { type, payload }) => {
            state.off_canvas_show = payload;
        },
        toggle_management_modal_show: (state, { type, payload }) => {
            state.management_modal_show = payload;
        },
        [`set_${store_prefix}_show_create_canvas`]: function (state, { type, payload }) {
            state[`${store_prefix}_show_create_canvas`] = payload;
        },
        [`set_${store_prefix}`]: function (state, { type, payload }) {
            state[`${store_prefix}`] = payload;
            console.log(payload);
        },
        [`set_search_parameter`]: function (state, { type, payload }) {
            state[`search_key`] = payload;
            // storeSlice.caseReducers.fetch_all_data();
        },
        [`set_show_active_data`]: function (state, { type, payload }) {
            state[`show_active_data`] = payload;
        },
        [`set_page`]: function (state, { type, payload }) {
            state[`page`] = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(async_actions[`fetch_all_data`].fulfilled, (state, { type, payload, meta }) => {
                state[`all_data`] = payload.data;
                state[`all_data_count`] = payload.data_count;
            })
            .addCase(async_actions[`details_${store_prefix}`].fulfilled, (state, { type, payload, meta }) => {
                state[`${store_prefix}`] = payload.data.data;
            })
        // .addCase(getUserData2.fulfilled, (state, { type, payload, meta }) => {
        //     state.all = payload.items;
        // })
    },
})

export default storeSlice;