import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setup from './config/setup';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams();
    setup.dispatch = useDispatch();
    const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
    const { get_contents , set_data} = setup.actions;

    useEffect(() => {
        get_contents(id);

        return () =>{
            set_data(null)
        };
    }, []);

    console.log();


    if (data_store) {
        const { _id, title, subtitle, short_description, description, photo, photo_alt_text, seo_keyword, seo_description, seo_schema_tags, seo_title, published_date, createdAt, updatedAt, last_id } = data_store;
        return (
            <div className='card list_card'>
                <div className="card-header ">
                    <h2 className='heading'>Create</h2>
                    <div className="btns d-flex gap-2 align-items-center">
                        <a href="#/content" className="btn rounded-pill btn-outline-secondary">
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
                                        <div>Subtitle</div>
                                        <div>:</div>
                                        <div>
                                            {subtitle}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Short Description</div>
                                        <div>:</div>
                                        <div>
                                            {short_description}
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
                                        <div>Photo</div>
                                        <div>:</div>
                                        <div>
                                            {photo}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Photo Alt Text</div>
                                        <div>:</div>
                                        <div>
                                            {photo_alt_text}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Seo Title</div>
                                        <div>:</div>
                                        <div>
                                            {seo_title}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Seo Keyword</div>
                                        <div>:</div>
                                        <div>
                                            {seo_keyword}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Seo Description</div>
                                        <div>:</div>
                                        <div>
                                            {seo_description}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Seo Schema Tags</div>
                                        <div>:</div>
                                        <div>
                                            {seo_schema_tags}
                                        </div>
                                    </div>
                                    <div className="custom_form_el">
                                        <div>Published Date</div>
                                        <div>:</div>
                                        <div>
                                            {published_date}
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