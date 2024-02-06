import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_site_url_view_counts, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_site_url_view_counts(id);
    
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

  

  if(data_store){
    const{site_url, ip_address,device, location} = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/site-url-view-count" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Site Url</label>
                    <div>:</div>
                    <div><input name="site_url" type="text" className="form-control" defaultValue={site_url} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Ip Address</label>
                    <div>:</div>
                    <div><input name="ip_address" type="text" className="form-control" defaultValue={ip_address} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Device</label>
                    <div>:</div>
                    <div><input name="device" type="text" className="form-control" defaultValue={device} /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Location</label>
                    <div>:</div>
                    <div><input name="location" type="text" className="form-control" defaultValue={location} /></div>
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