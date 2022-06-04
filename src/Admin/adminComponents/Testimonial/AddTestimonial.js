import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTestimonial = () => {

  const navigate = useNavigate();
  const [img, setImg] = useState("");
  const [logo, setLogo] = useState("");
  const [desc, setDesc] = useState("No Description Added");

  const postdata = () => {
    const formData = new FormData();

    formData.append("img", img);
    formData.append("logo", logo);
    formData.append("desc", desc);
    formData.append("imgFilename", img.name);
    formData.append("logoFilename", logo.name);

    Axios.post("http://localhost:5000/testimonial", formData);   
    navigate('/admin-dashboard');
  };

  return (
    <div className="add-new-post-sec pb-5">
      <div className="add-new-heading">
        <h2>Add New</h2>
      </div>
      <div className="container">
        <div className="row add-new-post-rw">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <form
              method="post"
              onSubmit={postdata}
              encType="multipart/form-data"
            >
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-2 text-end ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Image
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="file"
                    name="img"
                    className="form-control"
                    onChange={(e) => setImg(e.target.files[0])}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-2 text-end">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Description
                  </label>
                </div>
                <div className="col-md-8">
                  <textarea
                    type="text"
                    name="desc"
                    className="form-control"
                    placeholder="Enter Description"
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-2 text-end">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Logo Image
                  </label>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <label htmlFor="logo">Upload File 2:</label>
                    <input
                      type="file"
                      name="logo"
                      id="logo"
                      className="form-control"
                      onChange={(e) => setLogo(e.target.files[0])}
                      required
                    />
                    <div className="login-submit-btn pt-3">
                      <button type="submit" className="btn btn-primary">
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTestimonial;
