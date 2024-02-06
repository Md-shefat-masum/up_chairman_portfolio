import React, { useEffect, useState } from "react";
import ModalManagement from "./components/management/ModalManagement";
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import userSetup from "../../users/config/setup";
import MultiselectDropdown from "./components/all_data_components/Multiselect_dropdown";

function Create() {
  const user_data_store = useSelector((state) => state[userSetup.prefix]);
  setup.dispatch = useDispatch();
  userSetup.dispatch = useDispatch();
  const { store_data } = setup.actions;
  const { get_data: get_users } = userSetup.actions;
  const [ selectedRole, setselectedRole ] = useState([])
  const [ tasklist, setTasklist ] = useState(false)

  useEffect(() => {
    get_users();
  }, [])

  console.log(selectedRole);

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await store_data(form_data);
    e.target.reset();
  };
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/site-url" className="btn rounded-pill btn-outline-secondary">
            <i className="material-symbols-outlined fill">arrow_back</i>
            Back
          </a>
        </div>
      </div>
              <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
                <div className="form-group mb-5">
                  <div className="custom_form_el">
                    <label htmlFor="">url</label>
                    <div>:</div>
                    <div><input name="url" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url_for_table</label>
                    <div>:</div>
                    <div><input name="url_for_table" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url_for_table_id</label>
                    <div>:</div>
                    <div><input name="url_for_table_id" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url_redirect_to</label>
                    <div>:</div>
                    <div><input name="url_redirect_to" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">total_view</label>
                    <div>:</div>
                    <div><input name="total_view" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">total_redirect</label>
                    <div>:</div>
                    <div><input name="total_redirect" type="text" className="form-control" /></div>
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
  );
}

export default Create;
