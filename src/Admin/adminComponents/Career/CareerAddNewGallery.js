import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const CareerAddNewGallery = () => {

    const navigate = useNavigate();
    const [img, setImg] = useState("");

    const onChangeFile = (e) => {
        setImg(e.target.files[0]);
    };

    const postdata = () => {
        const formData = new FormData();

        formData.append("img", img);

        Axios.post("http://localhost:5000/career-gallery", formData);
        navigate("/admin-career");
    };

    return (
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      filename="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Select Image (Featured).."
                      onChange={onChangeFile}
                      required
                    />
                  </div>
                </div>
                <div className="login-submit-btn">
                  <button
                    type="button"
                    onClick={postdata}
                    className="btn btn-primary"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CareerAddNewGallery