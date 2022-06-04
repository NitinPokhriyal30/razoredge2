import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeAddNewBullet = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("No Title Added");

  const postdata = () => {
    const data = {
      text,
    };
    Axios.post("http://localhost:5000/homebullet", data).then((res) => {
      navigate("/admin-dashboard");
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
                <div className="col-md-8">
                  <textarea
                    type="text"
                    className="form-control txtarea"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="add text"
                  ></textarea>
                  <div className="login-submit-btn pt-3">
                    <button
                      onClick={() => postdata()}
                      className="btn btn-primary"
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

export default HomeAddNewBullet;
