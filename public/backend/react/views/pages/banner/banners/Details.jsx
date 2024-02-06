import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
    const { get_banners , set_data} = setup.actions;

    useEffect(() => {
        get_banners(id);

        return () =>{
            set_data(null)
        };
    }, []);

    console.log();


    if (data_store) {
        const { button_url,button_text, title,name, sub_title,description,_id,createdAt,updatedAt,profile_photo,banner_photo } = data_store;
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Create</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/banner" className="btn rounded-pill btn-outline-secondary">
                            <i className="material-symbols-outlined fill">arrow_back</i>
                            Back
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="form-group mb-3">
                                    <div className="custom_form_el">
                                        <div>Id</div>
                                        <div>:</div>
                                        <div>
                                            {_id}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Name</div>
                                        <div>:</div>
                                        <div>
                                            {name}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Title</div>
                                        <div>:</div>
                                        <div>
                                            {title}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Sub Title</div>
                                        <div>:</div>
                                        <div>
                                            {sub_title}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Profile Photo</div>
                                        <div>:</div>
                                        <div>
                                            {profile_photo}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Banner Photo</div>
                                        <div>:</div>
                                        <div>
                                            {banner_photo}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Description</div>
                                        <div>:</div>
                                        <div>
                                            {description}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Button Url</div>
                                        <div>:</div>
                                        <div>
                                            {button_url}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Button Text</div>
                                        <div>:</div>
                                        <div>
                                            {button_text}
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