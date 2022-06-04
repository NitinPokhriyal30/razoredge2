import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientAddGalleryPage = () => {


    const navigate = useNavigate();
    const [heading, setHeading] = useState("No Heading Added");
    const [desc, setDesc] = useState("No Description Added");
    const [img, setImg] = useState("");

    const onChangeFile = (e) => {
      setImg(e.target.files[0]);
    };

    const postdata = () => {
      const formData = new FormData();

      formData.append("heading", heading);
      formData.append("desc", desc);
      formData.append("img", img);

      Axios.post("http://localhost:5000/clientgallery", formData);
      navigate("/admin-client");
    };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form onSubmit={postdata} encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Heading
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Give Heading"
                      onChange={(e) => setHeading(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      name="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Select Image (Featured).."
                      onChange={onChangeFile}
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
                      className="form-control txtarea"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setDesc(e.target.value)}
                      placeholder="Enter Description"
                    ></textarea>
                    <div className="login-submit-btn">
                      <button type="submit" className="btn btn-primary">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientAddGalleryPage