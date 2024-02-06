import { async } from "q";
import dataStoreSlice, { async_actions } from "./store"
let prefix = 'content_image';
var setup = {
    prefix,
    route_prefix: 'content-image',
    api_prefix: 'content-image',
    layout_title: 'content-image management',
    all_page_title: 'All content images',
    crate_page_title: 'Create content image',
    edit_page_title: 'Edit content image',

    dispatch: () => null,
    actions: {
        get_data: async () => null,
        set_data: async () => null,

        set_page: async () => 1,

        store_data: async () => null,
        update_data: async () => null,

        delete_data: async () => null,
        restore_data: async () => null,

        fetch_all_data: async () => null,

        set_my_data: async () => null,
        fetch_my_data: async () => null,
        [`set_search_parameter`]: async () => null,
        [`set_show_active_data`]:async () => null,
        // set_user_role_search_parameter: async() => null,
    },
}
setup.actions.get_data = async () => await setup.dispatch(async_actions[`fetch_all_data`]());
setup.actions.set_data = async (item) => await setup.dispatch(dataStoreSlice.actions[`set_${setup.prefix}`](item));

setup.actions.set_page = async (page_no) => await setup.dispatch(dataStoreSlice.actions[`set_page`](page_no));

// store action
setup.actions.store_data = async (form_data) => await setup.dispatch(async_actions[`store_${setup.prefix}`](form_data));

// setup.actions.get_user_roles = async () => await setup.dispatch(async_actions[`fetch_user_roles`]());

setup.actions.set_my_data = async (item) => await setup.dispatch(dataStoreSlice.actions.set_my_data(item));
setup.actions.fetch_my_data = async () => await setup.dispatch(async_actions.fetch_my_data());

// delete & restore data
setup.actions.delete_data = async (id) => await setup.dispatch(async_actions[`delete_data`](id))
setup.actions.restore_data = async (id) => await setup.dispatch(async_actions[`restore_data`](id))

// updated data
setup.actions.update_data = async (data) => await setup.dispatch(async_actions[`edit_${setup.prefix}`](data))

// get user-acheivement
setup.actions.get_content_images = async (id) => await setup.dispatch(async_actions[`details_${setup.prefix}`](id))

// set search parameter
setup.actions[`set_search_parameter`] = async (searh_key) => await setup.dispatch(dataStoreSlice.actions[`set_search_parameter`](searh_key))

// set status
setup.actions[`set_show_active_data`] = async (id) => await setup.dispatch(dataStoreSlice.actions[`set_show_active_data`](id))


export default setup;