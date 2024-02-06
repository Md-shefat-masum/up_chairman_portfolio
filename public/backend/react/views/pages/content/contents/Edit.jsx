import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_contents, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_contents(id);
    
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
    const { subtitle, title, short_description, description, photo, photo_alt_text, seo_title, seo_keyword, seo_description, seo_schema_tags, published_date } = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/content" className="btn rounded-pill btn-outline-secondary">
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
                      <label htmlFor="">Subtitle</label>
                      <div>:</div>
                      <div><input name="subtitle" type="text" className="form-control" defaultValue={subtitle} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Short Description</label>
                      <div>:</div>
                      <div><input name="short_description" type="text" className="form-control" defaultValue={short_description} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Description</label>
                      <div>:</div>
                      <div><input name="description" type="text" className="form-control" defaultValue={description} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Photo</label>
                      <div>:</div>
                      <div><input name="photo" type="file" accept="image/*" className="form-control" /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Photo Alt Text</label>
                      <div>:</div>
                      <div><input name="photo_alt_text" type="text" className="form-control" defaultValue={photo_alt_text} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Title</label>
                      <div>:</div>
                      <div><input name="seo_title" type="text" className="form-control" defaultValue={seo_title} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Keyword</label>
                      <div>:</div>
                      <div><input name="seo_keyword" type="text" className="form-control" defaultValue={seo_keyword} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Description</label>
                      <div>:</div>
                      <div><input name="seo_description" type="text" className="form-control" defaultValue={seo_description} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Schema Tags</label>
                      <div>:</div>
                      <div><input name="seo_schema_tags" type="text" className="form-control" defaultValue={seo_schema_tags} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Published Date</label>
                      <div>:</div>
                      <div><input name="published_date" type="date" className="form-control" defaultValue={published_date} /></div>
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