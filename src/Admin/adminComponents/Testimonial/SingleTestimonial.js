import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SingleTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [img, setImg] = useState("");
  const [logo, setLogo] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get("http://localhost:5000/testimonial/" + id);
      setData(res.data);
      setImg(res.data.img);
      setDesc(res.data.desc);
      setLogo(res.data.logo);
    };
    getData();
  }, [id]);

  const updateData = async () => {
    const formData = new FormData();

    formData.append("img", img);
    formData.append("logo", logo);
    formData.append("desc", desc);
    formData.append("imgFilename", img.name);
    formData.append("logoFilename", logo.name);

    Axios.put(`http://localhost:5000/testimonial/${data._id}`, formData);
    navigate("/admin-dashboard");
  };

  const deleteData = () => {
    Axios.delete(`http://localhost:5000/testimonial/${data._id}`);
    navigate("/admin-dashboard");
  }

  const addData = () => {
    navigate("/admin-testimonial-add");  
  }

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Edit testimonial</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form id="post" method="post" encType="multipart/form-data">
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
                      id=""
                      className="form-control"
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Text
                    </label>
                  </div>
                  <div className="col-md-8">
                    <textarea
                      type="text"
                      name="desc"
                      id=""
                      className="form-control"
                      placeholder={desc}
                      value={desc}
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
                      />
                      <div className="login-submit-btn pt-3">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={updateData}
                        >
                          UPDATE
                        </button>
                        <button
                          type="button"
                          onClick={deleteData}
                          className="btn btn-danger mx-2"
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addData}
                        >
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
    </>
  );
};

export default SingleTestimonial;
