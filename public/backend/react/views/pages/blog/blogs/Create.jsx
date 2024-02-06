import React, { useEffect, useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import ModalManagement from "./components/management/ModalManagement";
import { useDispatch, useSelector } from "react-redux";
import setup from "./config/setup";
import userSetup from "../../users/config/setup";
import categorySetup from "../blog_categories/config/setup";
import tagsSetup from "../../tag/tags/config/setup";
import MultiselectDropdown from "./components/all_data_components/Multiselect_dropdown";

function Create() {
  const data_store = useSelector((state) => state[setup.prefix])
  const user_data_store = useSelector((state) => state[userSetup.prefix]);
  const blgo_category_store = useSelector((state) => state[categorySetup.prefix]);
  const tag_data_store = useSelector((state) => state[tagsSetup.prefix]);
  setup.dispatch = useDispatch();
  userSetup.dispatch = useDispatch();
  categorySetup.dispatch = useDispatch();
  tagsSetup.dispatch = useDispatch();
  const { store_data, check_unique_url } = setup.actions;
  const { get_data: get_users } = userSetup.actions;
  const { get_data: get_category } = categorySetup.actions;
  const { get_data: get_tags } = tagsSetup.actions;
  const [selectedRole, setselectedRole] = useState([]);
  const [tasklist, setTasklist] = useState(false);
  const [selectedCategory, setselectedCategory] = useState([]);
  const [tasklist1, setTasklist1] = useState(false);
  const [selectedTag, setselectedTag] = useState([]);
  const [tasklist2, setTasklist2] = useState(false);

  const short_description_ref = useRef(null);
  const description_ref = useRef(null);
  const short_description_reflog = () => {
    if (short_description_ref.current) {
      console.log(short_description_ref.current.getContent());
    }
  };

  useEffect(() => {
    get_users();
  }, []);

  useEffect(() => {
    get_category();
  }, []);

  useEffect(() => {
    get_tags();
  }, []);

  console.log(selectedCategory);




  const handleSubmit = async () => {
    let e = event;
    e.preventDefault();
    let form_data = new FormData(e.target);
    // form_data.append(
    //   "short_description",
    //   short_description_ref.current.getContent()
    // );
    form_data.append("description", description_ref.current.getContent());
    selectedCategory.forEach((e,index)=>{
      form_data.append(`category`, e._id);
    });
    selectedTag.forEach((e,index)=>{
      form_data.append(`tag`, e._id);
    });

    console.log(description_ref.current.getContent());
    // selectedRole.forEach((e,index)=>{
    //   // form_data.append(`creator[${index}]`, e._id);
    //   console.log(e);
    // });
    console.log("form_data",form_data);
    [...document.querySelectorAll(".form_error")].forEach((el) => el.remove());

    let returedata = await store_data(form_data);
    console.log("return data from store",returedata);
    if(returedata.payload){
        e.target.reset();
      location.href = '#/blog';
    }
   
  };

  const handleChange = async (e) => {
    let url = e.target.value;
    await check_unique_url({ url, id: null });
    console.log('Input value changed:', url);
  }

  return (
    <div className="card list_card">
      <div className="card-header ">
        <h2 className="heading">Create</h2>
        <div className="btns d-flex gap-2 align-items-center">
          <a href="#/blog" className="btn rounded-pill btn-outline-secondary">
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
                  <div className="custom_form_el desc_part">
                  
                    <label htmlFor="">Short Description :</label>
                    
                    <div>
                    <textarea name="short_description" id="" className='form-control' rows="8"></textarea>
                      {/* <Editor
                        onInit={(evt, editor) =>
                          (short_description_ref.current = editor)
                        }
                        initialValue={`<p>This is short description.</p>`}
                        apiKey='7z9basnhmks7l5aesqpiu9rtrrjv60p9rtmzhevm4oh8rdi6'
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
                      /> */}
                    </div>
                  </div>
                  <div className="custom_form_el desc_part">
                    <label htmlFor="">Description :</label>
                    <div>
                      <Editor
                        onInit={(evt, editor) =>
                          (description_ref.current = editor)
                        }
                        initialValue="<p>This is the description.</p>"
                        apiKey='7z9basnhmks7l5aesqpiu9rtrrjv60p9rtmzhevm4oh8rdi6'
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
                  {/* <div className="custom_form_el">
                    <label htmlFor="">URL</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="url"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div> */}
                  <div className="custom_form_el">
                    <label htmlFor="">Seo Schema Tags</label>
                    <div>:</div>
                    <div>
                      <textarea
                        name="seo_schema_tags"
                        className="form-control"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="mb-3">
                  <div>
                    <label htmlFor="">Title</label>
                    <div>
                      <input
                        name="title"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    <label htmlFor="">URL</label>
                    <div>
                      <input
                        name="url"
                        type="text"
                        className="form-control"
                        onChange={(e) => handleChange(e)}
                      />
                      {
                        data_store.isUrlExist ?

                          <div className="text-warning">
                            This is url is exist
                          </div>
                          :
                          ""
                      }
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    {" "}
                    <label htmlFor="">Subtitle</label>
                    <div>
                      <input
                        name="subtitle"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    {" "}
                    <label htmlFor="">Published Date</label>
                    <div>
                      <input
                        name="published_date"
                        type="date"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    {" "}
                    <label htmlFor="">Photo</label>
                    <div>
                      <input
                        name="photo"
                        type="file"
                        accept="image/*"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    <label htmlFor="">Photo Alt Text</label>
                    <div>
                      <input
                        name="photo_alt_text"
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    <label htmlFor="">Category</label>
                    <div>
                    <div id="category">
                     <MultiselectDropdown data={blgo_category_store.all_data} selectedData={selectedCategory} setSelectedData={setselectedCategory} taskOpen={tasklist1} setTaskOpen={setTasklist1}></MultiselectDropdown>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    <label htmlFor="">Tags</label>
                    <div>
                    <div id="tag">
                     <MultiselectDropdown data={tag_data_store.all_data} selectedData={selectedTag} setSelectedData={setselectedTag} taskOpen={tasklist2} setTaskOpen={setTasklist2}></MultiselectDropdown>
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
      {/* <!-- Your EJS file -->
<form id="commentForm">
    <input type="text" id="name" placeholder="Your Name" required>
    <textarea id="comment" placeholder="Your Comment" required></textarea>
    <button type="submit">Submit</button>
</form>
Set up Axios to handle the form submission:
Add an event listener to the form submission in your client-side JavaScript (assuming you have Axios already included in your project):

html
Copy code
<!-- Your EJS file -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script>
    document.getElementById('commentForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        axios.post('/submitComment', {
            name: name,
            comment: comment
        })
        .then(function (response) {
            // console.log(response);
            // Handle successful submission (if needed)
        })
        .catch(function (error) {
            console.error(error);
            // Handle error (if needed)
        });
    });
</script> */}
    </div>

  );
}

export default Create;
