import React, { useEffect,useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix])[setup.prefix]
  const { get_about_users, set_data, update_data } = setup.actions;

  const long_description_ref = useRef(null);
  // const description_ref = useRef(null);
  const long_description_reflog = () => {
    if (long_description_ref.current) {
      console.log(long_description_ref.current.getContent());
    }
  };

  useEffect(() => {
    get_about_users(id);
    
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
    form_data.append(
      "long_description",
      long_description_ref.current.getContent()
    );

    [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };

  

  if(data_store){
    const{result,  short_description, long_description, end_date, title} = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/about-user" className="btn rounded-pill btn-outline-secondary">
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
                    <label htmlFor="">Short Description</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="short_description"
                        className="form-control"
                        id=""
                      >{short_description}</textarea>
                    </div>
                  </div>
                  <div className="custom_form_el">
                    <label htmlFor="">Long Description</label>
                    <div>:</div>
                    <div>
                      <Editor
                        onInit={(evt, editor) =>
                          (long_description_ref.current = editor)
                        }
                        initialValue= {long_description ? long_description :'no data'}
                        init={{
                          height: 300,
                          menubar: false,
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                          ],
                          toolbar:
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                          content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        }}
                      />
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