import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; 

const DevelopmentSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/development-jobs/" + id); 
      setData(res.data);
      setTitle(res.data.title);
      setLocation(res.data.location);
    };
    get();
  }, [id]);

  const updateData = async () => {
    try {
      await Axios.put(`http://localhost:5000/development-jobs/${data._id}`, {
        title,
        location,
      });
      navigate("/admin-career");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = () => {
    Axios.delete(`http://localhost:5000/development-jobs/${data._id}`);
    navigate("/admin-career");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Edit</h2>
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
                    value={title}
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
                    value={location}
                  ></textarea>
                  <div className="login-submit-btn mt-3">
                    <button
                      type="submit"
                      onClick={() => updateData()}
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      onClick={deleteData}
                      className="btn btn-danger mx-2"
                    >
                      Delete
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

export default DevelopmentSingle;
