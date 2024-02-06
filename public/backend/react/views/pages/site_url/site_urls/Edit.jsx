import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_site_urls, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_site_urls(id);

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

    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };



  if (data_store) {
    const {  total_view, url_redirect_to, url_for_table_id,   total_redirect, url_for_table, url} = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/site-url" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">url</label>
                    <div>:</div>
                    <div><input name="url" type="text" className="form-control" defaultValue={url} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url_for_table</label>
                    <div>:</div>
                    <div><input name="url_for_table" type="text" className="form-control"  defaultValue={url_for_table} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url_for_table_id</label>
                    <div>:</div>
                    <div><input name="url_for_table_id" type="text" className="form-control"  defaultValue={url_for_table_id} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url_redirect_to</label>
                    <div>:</div>
                    <div><input name="url_redirect_to" type="text" className="form-control"  defaultValue={url_redirect_to} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">total_view</label>
                    <div>:</div>
                    <div><input name="total_view" type="text" className="form-control"  defaultValue={total_view} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">total_redirect</label>
                    <div>:</div>
                    <div><input name="total_redirect" type="text" className="form-control"  defaultValue={total_redirect} /></div>
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