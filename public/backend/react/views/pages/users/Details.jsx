import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
    const { get_users , set_data} = setup.actions;
    // console.log(id);
    useEffect(() => {
        get_users(id);

        return () =>{
            set_data(null)
        };
    }, []);

    console.log(data_store, id);


    if (data_store) {
        const { _id, username,full_name, role, email, telegram_id,telegram_name,mobile_number,photo,createdAt,updatedAt } = data_store;
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Create</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/user" className="btn rounded-pill btn-outline-secondary">
                            <i className="material-symbols-outlined fill">arrow_back</i>
                            Back
                        </a>
                        {/* {JSON.stringify(data_store)} */}
                    </div>
                </div>
                <div className="card-body">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8">
                                {/* [
                                        "ID",
                                        "Title",
                                        "Serial",
                                        "Status",
                                        "CreatedAt",
                                        "UpdatedAt",
                                        "last ID",
                                    ] */}
                                <div className="form-group mb-3">
                                    <div className="custom_form_el">
                                        <div>Id</div>
                                        <div>:</div>
                                        <div>
                                            {_id}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Username</div>
                                        <div>:</div>
                                        <div>
                                            {username}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>FirstName</div>
                                        <div>:</div>
                                        <div>
                                            {full_name}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Email</div>
                                        <div>:</div>
                                        <div>
                                            {email}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Telegram Id</div>
                                        <div>:</div>
                                        <div>
                                            {telegram_id}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Telegram Name</div>
                                        <div>:</div>
                                        <div>
                                            {telegram_name}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Mobile Number</div>
                                        <div>:</div>
                                        <div>
                                            {mobile_number}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Photo</div>
                                        <div>:</div>
                                        <div>
                                            {photo}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Role</div>
                                        <div>:</div>
                                        <div>
                                            {role}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Created At</div>
                                        <div>:</div>
                                        <div>
                                            {createdAt}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Updated At</div>
                                        <div>:</div>
                                        <div>
                                            {updatedAt}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        )
    } else {
        return <>
            <p>loading ...</p>
        </>
    }
}

export default Details