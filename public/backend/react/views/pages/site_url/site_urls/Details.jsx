import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
    const { get_site_urls , set_data} = setup.actions;

    useEffect(() => {
        get_site_urls(id);

        return () =>{
            set_data(null)
        };
    }, []);

    console.log();


    if (data_store) {
        const { _id, total_view, url_redirect_to, url_for_table_id, createdAt, updatedAt, total_redirect, url_for_table, url} = data_store;
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Create</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/site-url" className="btn rounded-pill btn-outline-secondary">
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
                                        <div>url</div>
                                        <div>:</div>
                                        <div>
                                            {url}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>url_for_table</div>
                                        <div>:</div>
                                        <div>
                                            {url_for_table}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>url_for_table_id</div>
                                        <div>:</div>
                                        <div>
                                            {url_for_table_id}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>url_redirect_to</div>
                                        <div>:</div>
                                        <div>
                                            {url_redirect_to}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>total_view</div>
                                        <div>:</div>
                                        <div>
                                            {total_view}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>total_redirect</div>
                                        <div>:</div>
                                        <div>
                                            {total_redirect}
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