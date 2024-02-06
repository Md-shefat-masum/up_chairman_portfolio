import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_user_profile_infos, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_user_profile_infos(id);

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



  if (data_store) {
    const { designation, blood_group,date_of_birth,nationality, father_name,mother_name,banner_profile_pic,short_bio, full_bio,address_permanent, address_present, google_map } = data_store;
    let date = new Date(date_of_birth).toISOString().substring(0,10)
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/user-profile-info" className="btn rounded-pill btn-outline-secondary">
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
                      <label htmlFor="">Designation</label>
                      <div>:</div>
                      <div><input name="designation" type="text" className="form-control" defaultValue={designation} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Blood group</label>
                      <div>:</div>
                      <div><input name="blood_group" type="text" className="form-control" defaultValue={blood_group} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Date of Birth</label>
                      <div>:</div>
                      <div><input name="date_of_birth" type="date" className="form-control" defaultValue={date} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Nationality</label>
                      <div>:</div>
                      <div><input name="nationality" type="text" className="form-control" defaultValue={nationality} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Father Name</label>
                      <div>:</div>
                      <div><input name="father_name" type="text" className="form-control" defaultValue={father_name} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Mother Name</label>
                      <div>:</div>
                      <div><input name="mother_name" type="text" className="form-control" defaultValue={mother_name} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Banner Profile Pic</label>
                      <div>:</div>
                      <div> <input name="banner_profile_pic" type="file" accept="image/*" className="form-control" /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Short Bio</label>
                      <div>:</div>
                      <div><input name="short_bio" type="text" className="form-control" defaultValue={short_bio} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">full Bio</label>
                      <div>:</div>
                      <div><input name="full_bio" type="text" className="form-control" defaultValue={full_bio} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Address Pressent</label>
                      <div>:</div>
                      <div><input name="address_present" type="text" className="form-control" defaultValue={address_present} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Address Permanent</label>
                      <div>:</div>
                      <div><input name="address_permanent" type="text" className="form-control" defaultValue={address_permanent} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Google Map</label>
                      <div>:</div>
                      <div><input name="google_map" type="text" className="form-control" defaultValue={google_map} /></div>
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