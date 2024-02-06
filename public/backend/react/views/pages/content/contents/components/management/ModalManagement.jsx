import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import setup from '../../config/setup';
import dataStoreSlice from '../../config/store';

function ModalManagement() {
    const data_store = useSelector((state) => state[setup.prefix]);
    const { management_modal_show } = data_store;
    const { toggle_management_modal_show } = dataStoreSlice.actions;
    const dispatch = useDispatch();

    const { get_data } = setup.actions;

    useEffect(() => {
        get_data();
    })

    return (
        <>
            <div id="user_role_id" class="multiple_select_body">
                <div class="multiple_select_data" onClick={() => dispatch(toggle_management_modal_show(true))}>
                    <div class="item">
                        super_admin
                    </div>
                    {/* <div class="btn btn-sm btn-outline-danger">
                        no user role selected
                    </div> */}
                </div>
                {
                    management_modal_show &&
                    <>
                        <div class="multiple_select_modal">
                            <div class="multiple_select_modal_backdrop" onClick={() => dispatch(toggle_management_modal_show(false))}></div>
                            <div class="multiple_select_modal_body custom_scroll">
                                <div class="header">
                                    <div class="search"><input type="text" class="rounded-pill form-control" /></div>
                                    <div class="action_btns">
                                        <button type='button' class="btn rounded-pill btn-secondary"><i class="fa fa-pencil"></i> create</button>
                                    </div>
                                </div>
                                <div class="selected">
                                    <div class="item">
                                        <button type="button" class="btn rounded-pill btn-secondary">
                                            <span>
                                                super_admin
                                            </span>
                                            <span>|</span> <i class="material-symbols-outlined fill">close</i>
                                        </button>
                                    </div>
                                    <div class="item">
                                        <button type="button" class="btn rounded-pill btn-secondary">
                                            <span>
                                                admin
                                            </span>
                                            <span>|</span> <i class="material-symbols-outlined fill">close</i>
                                        </button>
                                    </div>
                                </div>

                                <div class="data_list custom_scroll table-responsive text-nowrap">
                                    <table class="table table-hover table-bordered">
                                        <thead class="table-light">
                                            <tr>
                                                <th><input type="checkbox" class="form-check-input" /></th>
                                                <th aria-label="id" class="cursor_n_resize">
                                                    ID
                                                    <span><i class="fa-solid fa-arrow-down-a-z text-success"></i></span>
                                                </th>
                                                <th class="cursor_n_resize">
                                                    Title

                                                </th>
                                                <th class="cursor_n_resize">
                                                    Role Serial

                                                </th>
                                                <th class="cursor_n_resize">
                                                    Status

                                                </th>
                                                <th aria-label="actions">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-border-bottom-0">
                                            {
                                                data_store[setup.prefix + 's'].data?.map((user, index) => {
                                                    return (
                                                        <tr>
                                                        <td><input type="checkbox" class="form-check-input" /></td>
                                                        <td>{user.last_id}</td>
                                                        <td>
                                                            <span class="text-warning cursor_pointer">
                                                                {user.title}
                                                            </span>
                                                        </td>
                                                        <td>{user.serial}</td>
                                                        <td>
                                                            <span class="badge bg-label-success me-1">{user.status ==1? 'active':'inactive'} </span>

                                                        </td>
                                                        <td>
                                                            <div class="table_actions">
                                                                <a href="#" class="btn btn-sm btn-outline-secondary"><i class="material-symbols-outlined">settings</i></a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="">
                                                                            <i class="fa text-info fa-edit"></i>
                                                                            Edit
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    )
                                                })
                                            }
                                            
                                            {/* <tr>
                                                <td><input type="checkbox" class="form-check-input" /></td>
                                                <td>20</td>
                                                <td>
                                                    <span class="text-warning cursor_pointer">
                                                        admin
                                                    </span>
                                                </td>
                                                <td>2</td>
                                                <td>
                                                    <span class="badge bg-label-success me-1">active</span>

                                                </td>
                                                <td>
                                                    <div class="table_actions">
                                                        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="material-symbols-outlined">settings</i></a>
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    <i class="fa text-info fa-edit"></i>
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" class="form-check-input" /></td>
                                                <td>30</td>
                                                <td>
                                                    <span class="text-warning cursor_pointer">
                                                        production
                                                    </span>
                                                </td>
                                                <td>3</td>
                                                <td>
                                                    <span class="badge bg-label-success me-1">active</span>

                                                </td>
                                                <td>
                                                    <div class="table_actions">
                                                        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="material-symbols-outlined">settings</i></a>
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    <i class="fa text-info fa-edit"></i>
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" class="form-check-input" /></td>
                                                <td>40</td>
                                                <td>
                                                    <span class="text-warning cursor_pointer">
                                                        branch
                                                    </span>
                                                </td>
                                                <td>4</td>
                                                <td>
                                                    <span class="badge bg-label-success me-1">active</span>

                                                </td>
                                                <td>
                                                    <div class="table_actions">
                                                        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="material-symbols-outlined">settings</i></a>
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    <i class="fa text-info fa-edit"></i>
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" class="form-check-input" /></td>
                                                <td>50</td>
                                                <td>
                                                    <span class="text-warning cursor_pointer">
                                                        user
                                                    </span>
                                                </td>
                                                <td>5</td>
                                                <td>
                                                    <span class="badge bg-label-success me-1">active</span>

                                                </td>
                                                <td>
                                                    <div class="table_actions">
                                                        <a href="#" class="btn btn-sm btn-outline-secondary"><i class="material-symbols-outlined">settings</i></a>
                                                        <ul>
                                                            <li>
                                                                <a href="">
                                                                    <i class="fa text-info fa-edit"></i>
                                                                    Edit
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                                <div class="footer_modal d-flex justify-content-between align-items-start">

                                    <button type="button" onClick={() => dispatch(toggle_management_modal_show(false))} class="btn rounded-pill btn-outline-secondary">
                                        <i class="material-symbols-outlined fill">save</i>
                                        Save &amp; Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default ModalManagement