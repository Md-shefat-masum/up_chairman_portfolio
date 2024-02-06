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
  const [selectedRole, setselectedRole] = useState([]);
  const [tasklist, setTasklist] = useState(false);

  useEffect(() => {
    get_users();
  }, []);

  console.log(selectedRole);

  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    // selectedRole.forEach((e,index)=>{
    //   form_data.append(`creator[${index}]`, e._id);
    //   console.log(e);
    // });
    [...document.querySelectorAll(".form_error")].forEach((el) => el.remove());
    await store_data(form_data);
    e.target.reset();
  };
  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a
            href="#/photo-gallery-categorie"
            className="btn rounded-pill btn-outline-secondary"
          >
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
                    <div>
                      <input
                        name="title"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">short_description</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="short_description"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">long_description</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="long_description"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">url</label>
                    <div>:</div>
                    <div>
                      <input name="url" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Photo</label>
                    <div>:</div>
                    <div>
                      <input
                        name="photo"
                        type="file"
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">photo_alt</label>
                    <div>:</div>
                    <div>
                      <input
                        name="photo_alt"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mt-4 mb-3">
                    <h4>
                      SEO Part <sub>optional</sub>
                    </h4>
                    <hr />
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Seo Title</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="seo_title"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Seo Keyword</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="seo_keyword"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Seo Description</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="seo_description"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-sm btn-outline-warning">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
