import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientSingleGalleryPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [gallery, setGallery] = useState([]);
    const [heading, setHeading] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {
      const getGallery = async () => {
        const res = await Axios.get("http://localhost:5000/clientgallery/" + id); 
        setGallery(res.data);
        setHeading(res.data.heading);
        setDesc(res.data.desc);
        setImg(res.data.img);
      };
      getGallery();
    }, [id]);

    const onChangeFile = (e) => {
      setImg(e.target.files[0]);
    };

  const updateData = async (e) => {
    e.preventDefault();
      const formData = new FormData();

      formData.append("heading", heading);
      formData.append("desc", desc);
      formData.append("img", img);
        formData.append("imgFilename", img.name);

      Axios.put(`http://localhost:5000/clientgallery/${gallery._id}`, formData);   
      navigate("/admin-client");
    };

  const deleteGallery = (e) => {
      e.preventDefault();
      Axios.delete(`http://localhost:5000/clientgallery/${gallery._id}`);
      navigate("/admin-client");
    };
  
  const addGallery = (e) => {
      e.preventDefault();
      // Axios.delete(`http://localhost:5000/clientgallery/${gallery._id}`);
      navigate("/admin-client-add");
    };

    return (
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New Blog</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form encType="multipart/form-data">
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
                      value={heading}
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
                      placeholder={img}
                      onChange={onChangeFile}
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
                      value={desc}
                    ></textarea>
                    <div className="login-submit-btn mt-3">
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={updateData}
                      >
                        Update
                      </button>
                      <button
                        type="submit"
                        onClick={deleteGallery}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </button>
                      <button
                        type="submit"
                        onClick={addGallery}
                        className="btn btn-primary"
                      >
                        Add New
                      </button>
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

export default ClientSingleGalleryPage;
