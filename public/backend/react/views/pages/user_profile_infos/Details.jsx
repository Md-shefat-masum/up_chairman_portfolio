import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
    const { get_user_profile_infos , set_data} = setup.actions;

    useEffect(() => {
        get_user_profile_infos(id);

        return () =>{
            set_data(null)
        };
    }, []);

    console.log();


    if (data_store) {
        const { _id, designation, full_bio, father_name,address_present,address_permanent,mother_name,google_map,banner_profile_pic,nationality,date_of_birth,short_bio,blood_group, createdAt, updatedAt, last_id } = data_store;
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Details</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/user-profile-info" className="btn rounded-pill btn-outline-secondary">
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
                                        <div>Designation</div>
                                        <div>:</div>
                                        <div>
                                            {designation}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Blood</div>
                                        <div>:</div>
                                        <div>
                                            {blood_group}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Nationality</div>
                                        <div>:</div>
                                        <div>
                                            {nationality}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Father</div>
                                        <div>:</div>
                                        <div>
                                            {father_name}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Mother</div>
                                        <div>:</div>
                                        <div>
                                            {mother_name}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Banner Photo</div>
                                        <div>:</div>
                                        <div>
                                            {banner_profile_pic}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Short Bio</div>
                                        <div>:</div>
                                        <div>
                                            {short_bio}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Full Bio</div>
                                        <div>:</div>
                                        <div>
                                            {full_bio}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Date of birth</div>
                                        <div>:</div>
                                        <div>
                                            {date_of_birth}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Pressent Address</div>
                                        <div>:</div>
                                        <div>
                                            {address_present}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Permanent Address</div>
                                        <div>:</div>
                                        <div>
                                            {address_permanent}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Google Map</div>
                                        <div>:</div>
                                        <div>
                                            {google_map}
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