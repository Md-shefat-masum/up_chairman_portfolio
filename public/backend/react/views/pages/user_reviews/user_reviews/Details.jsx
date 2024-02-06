import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
    const { get_user_reviews , set_data} = setup.actions;

    useEffect(() => {
        get_user_reviews(id);

        return () =>{
            set_data(null)
        };
    }, []);

    console.log();


    if (data_store) {
        const { _id, title, ratings, description, sub_title,subject,message, createdAt, updatedAt, last_id } = data_store;
        let formedDate1 = new Date(createdAt).toISOString().substring(0, 10);
        let formedDate2 = new Date(updatedAt).toISOString().substring(0, 10);
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Create</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/user-review" className="btn rounded-pill btn-outline-secondary">
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
                                        <div>Title</div>
                                        <div>:</div>
                                        <div>
                                            {title}
                                        </div>
                                    </div>
                                    
                                    <div className="custom_form_el">
                                        <div>Sub-title</div>
                                        <div>:</div>
                                        <div>
                                            {sub_title}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Ratings</div>
                                        <div>:</div>
                                        <div>
                                            {ratings}
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
                                        <div>Created At</div>
                                        <div>:</div>
                                        <div>
                                            {formedDate1}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Updated At</div>
                                        <div>:</div>
                                        <div>
                                            {formedDate2}
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