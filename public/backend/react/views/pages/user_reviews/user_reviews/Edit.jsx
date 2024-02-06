import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_user_reviews, set_data, update_data } = setup.actions;

  const description_ref = useRef(null);

  useEffect(() => {
    get_user_reviews(id);

    return () => {
      document.getElementById('form-data')?.reset();
      set_data(null)
    };
  }, []);

  // console.log(data_store);;

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.append('id', id);
    // form_data.append("description", description_ref.current.getContent());
    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };



  if (data_store) {
    const { _id, title, ratings, description, date, sub_title, message, createdAt, updatedAt, last_id } = data_store;
    // let formedDate = new Date(date).toISOString().substring(0, 10);
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/user-review" className="btn rounded-pill btn-outline-secondary">
              <i className="material-symbols-outlined fill">arrow_back</i>
              Back
            </a>
          </div>
        </div>
        <form id='form-data' onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-5">
                    <div className="custom_form_el">
                      <label htmlFor="">Title</label>
                      <div>:</div>
                      <div><input name="title" type="text" className="form-control" defaultValue={title} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Description</label>
                      <div>:</div>
                      <div>
                        <textarea
                          name="description"
                          className="form-control"
                          id=""
                        >{description}</textarea>
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Sub-title</label>
                      <div>:</div>
                      <div><input name="sub_title" type="text" className="form-control" defaultValue={sub_title} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Ratings</label>
                      <div>:</div>
                      <div><input name="ratings" type="text" className="form-control" defaultValue={ratings} /></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-info" type="submit" value="Create">
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit