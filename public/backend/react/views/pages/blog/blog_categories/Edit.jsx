import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_blog_categories, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_blog_categories(id);

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



  if (data_store) {
    const { short_description, seo_keyword, long_description, url, photo, title, seo_title, seo_description } = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/blog-categorie" className="btn rounded-pill btn-outline-secondary">
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
                      <div><input name="title" type="text" className="form-control" defaultValue={title} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Url</label>
                      <div>:</div>
                      <div><input name="url" type="text" className="form-control" defaultValue={url} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Short Description</label>
                      <div>:</div>
                      <div>
                        <textarea name="short_description" className="form-control" id="">{short_description}</textarea>
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Long Description</label>
                      <div>:</div>
                      <div>
                        <textarea name="long_description" className="form-control" id="">{long_description}</textarea>
                      </div>
                    </div>

                    <div className="custom_form_el">
                      <label htmlFor="">Photo</label>
                      <div>:</div>
                      <div><input name="photo" type="file" accept="image/*" className="form-control" /></div>
                    </div>
                    <div className="mt-4 mb-3">
                      <h4>SEO Part <sub>optional</sub></h4>
                      <hr />
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Title</label>
                      <div>:</div>
                      <div>
                      <textarea name="seo_title" className="form-control" id="">{seo_title}</textarea>
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Keyword</label>
                      <div>:</div>
                      <div>
                      <textarea name="seo_keyword" className="form-control" id="">{seo_keyword}</textarea>
                      </div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Seo Description</label>
                      <div>:</div>
                      <div>
                      <textarea name="seo_description" className="form-control" id="">{seo_description}</textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-sm btn-outline-warning">Submit</button>

          </div>
        </form>
      </div>
    )
  }
}

export default Edit