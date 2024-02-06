import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_contact_messages, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_contact_messages(id);
    
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

    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };

  

  if(data_store){
    const { _id, full_name, email, address,subject,message, createdAt, updatedAt, last_id } = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/contact-message" className="btn rounded-pill btn-outline-secondary">
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
                      <label htmlFor="">full_name</label>
                      <div>:</div>
                      <div><input name="full_name" type="text" className="form-control" defaultValue={full_name} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">email</label>
                      <div>:</div>
                      <div><input name="email" type="text" className="form-control" defaultValue={email} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">address</label>
                      <div>:</div>
                      <div><input name="address" type="text" className="form-control" defaultValue={address} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">subject</label>
                      <div>:</div>
                      <div><input name="subject" type="text" className="form-control" defaultValue={subject} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">message</label>
                      <div>:</div>
                      <div><input name="message" type="text" className="form-control" defaultValue={message} /></div>
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