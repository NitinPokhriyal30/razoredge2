import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ManagementAdd = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("No Title Added");
  const [location, setLocation] = useState("No Location Added");

  const postdata = () => {
    const data = {
      title,
      location,
    };
    Axios.post("http://localhost:5000/management-jobs", data).then((res) => {
      navigate("/admin-career");
    });
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-2 text-end ">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Give Title to your Post"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-2 text-end">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Location
                  </label>
                </div>
                <div className="col-md-8">
                  <textarea
                    type="text"
                    className="form-control txtarea"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Description"
                  ></textarea>
                  <div className="login-submit-btn">
                    <button
                      onClick={() => postdata()}
                      className="btn btn-primary mt-3"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementAdd;
