import React from 'react'
import setup from '../../config/setup';

function TableAction({data}) {
    const { delete_data, restore_data } = setup.actions;
    return (
        <>
            <div className="table_actions">
                <a href="#" onClick={()=>event.preventDefault()} className="btn btn-sm btn-outline-secondary">
                    <span class="material-symbols-outlined fill">
                        settings
                    </span>
                </a>
                <ul>
                    {/* <li>
                        <a href="">
                            <span class="material-symbols-outlined">
                                visibility
                            </span>
                            Quick View
                        </a>
                    </li> */}
                    <li>
                        <a href={`#/${setup.route_prefix}/details/${data._id}`} className="">
                            <span class="material-symbols-outlined">
                                mystery
                            </span>
                            Details
                        </a>
                    </li>
                    <li>
                        <a href={`#/${setup.route_prefix}/edit/${data._id}`} className="">
                            <span class="material-symbols-outlined">
                                edit_square
                            </span>
                            Edit
                        </a>
                    </li>
                    {
                        data.status == 1 ?
                            <li>
                                <a className="" href='#' onClick={()=>{event.preventDefault(); delete_data(data._id)}}>
                                    <i className="material-symbols-outlined">
                                        delete
                                    </i>
                                    Deactive
                                </a>
                            </li>
                            :
                            <li>
                                <a className="" href='#' onClick={()=>{event.preventDefault(); restore_data(data._id)}}>
                                    <i className="material-symbols-outlined">
                                        restore
                                    </i>
                                    Restore
                                </a>
                            </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default TableAction