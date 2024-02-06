import React, { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
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
  const [selectedRole, setselectedRole] = useState([])
  const [tasklist, setTasklist] = useState(false)

  const description_ref = useRef(null);

  useEffect(() => {
    get_users();
  }, [])

  console.log(selectedRole);

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    selectedRole.forEach((e, index) => {
      form_data.append(`creator[${index}]`, e._id);
      console.log(e);
    });
    // form_data.append("description", description_ref.current.getContent());
    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await store_data(form_data);
    e.target.reset();
  };
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/user-review" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Title</label>
                    <div>:</div>
                    <div><input name="title" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Description</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="description"
                        className="form-control" id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Ratings</label>
                    <div>:</div>
                    <div><input name="ratings" type="text" className="form-control" /></div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Sub-title</label>
                    <div>:</div>
                    <div><input name="sub_title" type="text" className="form-control" /></div>
                  </div>


                </div>
                <input type="submit" value="Create" />
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
