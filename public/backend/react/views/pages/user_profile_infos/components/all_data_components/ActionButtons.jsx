import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import setup from '../../config/setup';

function ActionButtons() {
    const data_store = useSelector((state) => state[setup.prefix]);
    setup.dispatch = useDispatch();
    const { set_show_active_data, get_data } = setup.actions;

    // useEffect(() => {
    //     get_data();
    // }, [
    //     data_store.show_active_data
    // ]);
    return (
        <>
            <div className="btns d-flex gap-2 align-items-center">
                <a href={`#/${setup.route_prefix}/create`} className="btn rounded-pill btn-outline-secondary">
                    <i className="material-symbols-outlined fill">edit</i>
                    Create
                </a>
                <div className="table_actions">
                    <a href="#" onClick={() => event.preventDefault()} className="btn p-2 btn-outline-secondary">
                        <i className="material-symbols-outlined fill">tune</i>
                    </a>
                    <ul>
                        <li>
                            <a href="">
                                <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                Export All
                            </a>
                        </li>

                        <li>
                            <a href={`#/${setup.route_prefix}/import`} className="">
                                <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                Import
                            </a>
                        </li>
                        {
                            data_store.show_active_data ?
                                <li>
                                    <a onClick={() => { event.preventDefault(); set_show_active_data(0) }} href="#/user-role" title="display data that has been deactivated" className="d-flex">
                                        <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                        Deactive data
                                    </a>
                                </li>
                                :
                                <li>
                                    <a onClick={() => { event.preventDefault(); set_show_active_data(1) }} href="#/user-role" title="display data that has been deactivated" className="d-flex">
                                        <i className="material-symbols-outlined fill">keyboard_arrow_right</i>
                                        Active data
                                    </a>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ActionButtons