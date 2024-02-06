import React, { useEffect, useState } from "react";
import ModalManagement from "./components/management/ModalManagement";
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import rollSetup from "../user_roles/config/setup"
import MultiselectDropdown from "./components/all_data_components/Multiselect_dropdown";

function Create() {
  const role_data_store = useSelector((state) => state[rollSetup.prefix]);
  setup.dispatch = useDispatch();
  rollSetup.dispatch = useDispatch();
  const { store_data } = setup.actions;
  const { get_data: get_roles } = rollSetup.actions;
  const [ selectedRole, setselectedRole ] = useState([])
  const [ tasklist, setTasklist ] = useState(false)

  useEffect(() => {
    get_roles();
  }, [])

  console.log(selectedRole);
  // useEffect(() => {
  //   console.log(role_data_store.all_data);
  // }, [role_data_store])

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    selectedRole.forEach((e,index)=>{
      form_data.append(`role`, e.serial);
    });
    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await store_data(form_data);
    // e.target.reset();
  };
  // console.log(data1);
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/user" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Username</label>
                    <div>:</div>
                    <div><input name="username" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Full_name</label>
                    <div>:</div>
                    <div><input name="full_name" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Email</label>
                    <div>:</div>
                    <div><input name="email" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Password</label>
                    <div>:</div>
                    <div><input name="password" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Telegram_id</label>
                    <div>:</div>
                    <div><input name="telegram_id" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Telegram_name</label>
                    <div>:</div>
                    <div><input name="telegram_name" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Mobile_number</label>
                    <div>:</div>
                    <div><input name="mobile_number" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Role</label>
                    <div>:</div>
                    <div>
                     <div id="role">
                     <MultiselectDropdown data={role_data_store.all_data} selectedData={selectedRole} setSelectedData={setselectedRole} taskOpen={tasklist} setTaskOpen={setTasklist}></MultiselectDropdown>
                     </div>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Photo</label>
                    <div>:</div>
                    <div><input name="photo" type="file" accept="image/*" className="form-control" /></div>
                  </div>
                </div>
                <input  onClick={() => setTasklist(false)} type="submit" value="Create" />
               
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
