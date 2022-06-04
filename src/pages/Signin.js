import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postdata = async (e) => {
    await Axios.post(
      "http://localhost:5000/user/signin",
      { email, password },
      { withCredentials: true }
    ); 
    // Axios.defaults.withCredentials = true; 
    navigate("/admin-dashboard");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Sign In</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="eamil"
                      className="form-control"
                      placeholder="enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Password
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="login-submit-btn">
                      <button
                        type="button"
                        onClick={postdata}
                        className="btn btn-primary"
                      >
                        Sign in
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
};

export default Signin;
