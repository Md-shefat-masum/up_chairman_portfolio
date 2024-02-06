import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_video_gallery_categories, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_video_gallery_categories(id);
    
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
    const { short_description, long_description, url, photo, photo_alt, seo_title, seo_keyword, seo_description, title, _id } = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/video-gallery-categorie" className="btn rounded-pill btn-outline-secondary">
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
                      <label htmlFor="">short_description</label>
                      <div>:</div>
                      <div><input name="short_description" type="text" className="form-control" defaultValue={short_description} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">long_description</label>
                      <div>:</div>
                      <div><input name="long_description" type="text" className="form-control" defaultValue={long_description} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">url</label>
                      <div>:</div>
                      <div><input name="url" type="text" className="form-control" defaultValue={url} /></div>
                    </div>

                    <div className="custom_form_el">
                      <label htmlFor="">Photo </label>
                      <div>:</div>
                      <div><input name="photo" type="file" accept="image/*" className="form-control" /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">photo Alt</label>
                      <div>:</div>
                      <div><input name="photo_alt" type="text" className="form-control" defaultValue={photo_alt} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">seo_title</label>
                      <div>:</div>
                      <div><input name="seo_title" type="text" className="form-control" defaultValue={seo_title} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">seo_keyword</label>
                      <div>:</div>
                      <div><input name="seo_keyword" type="text" className="form-control" defaultValue={seo_keyword} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">seo_description</label>
                      <div>:</div>
                      <div><input name="seo_description" type="text" className="form-control" defaultValue={seo_description} /></div>
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