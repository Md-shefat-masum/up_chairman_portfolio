import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import rollSetup from "../user_roles/config/setup"
import { useParams } from 'react-router-dom';
import MultiselectDropdown from "./components/all_data_components/Multiselect_dropdown";
import { set } from 'mongoose';

function Edit() {
  const role_data_store = useSelector((state) => state[rollSetup.prefix]);
  const { id } = useParams();
  setup.dispatch = useDispatch();
  rollSetup.dispatch = useDispatch();
  const { get_data: get_roles } = rollSetup.actions;
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_users, set_data, update_data } = setup.actions;

  const [selectedRole, setselectedRole] = useState([])
  // console.log(selectedRole);

  // const roles = data_store?.role;

  useEffect(() => {
    get_roles();
  }, [])

  useEffect(() => {
    get_users(id);

    return () => {
      document.getElementById('form-data')?.reset();
      set_data(null)
    };
  }, []);

 


  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.append('id', id);
    // form_data.append('role', id);
    selectedRole?.forEach((e, index) => {
      // console.log(e._id);
      form_data.append(`role`, e.serial);
    });

    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };



  if (data_store) {
    const { username,full_name, email, password, telegram_id, telegram_name, mobile_number, photo } = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/user" className="btn rounded-pill btn-outline-secondary">
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
                      <label htmlFor="">Username</label>
                      <div>:</div>
                      <div><input name="username" type="text" className="form-control" defaultValue={username} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Full_name</label>
                      <div>:</div>
                      <div><input name="full_name" type="text" className="form-control" defaultValue={full_name} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Email</label>
                      <div>:</div>
                      <div><input name="email" type="text" className="form-control" defaultValue={email} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Password</label>
                      <div>:</div>
                      <div><input name="password" type="text" className="form-control"  /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Telegram_id</label>
                      <div>:</div>
                      <div><input name="telegram_id" type="text" className="form-control" defaultValue={telegram_id} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Telegram_name</label>
                      <div>:</div>
                      <div><input name="telegram_name" type="text" className="form-control" defaultValue={telegram_name} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Mobile_number</label>
                      <div>:</div>
                      <div><input name="mobile_number" type="text" className="form-control" defaultValue={mobile_number} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Photo</label>
                      <div>:</div>
                      <div><input name="photo" type="file" accept="image/*" className="form-control" /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Role</label>
                      <div>:</div>
                      <div>
                        <div id='role'>
                          <MultiselectDropdown data={role_data_store.all_data} selectedData={data_store?.role} setSelectedData={setselectedRole} ></MultiselectDropdown>
                        </div>
                      </div>
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