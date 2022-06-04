import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";  

const CareerSingleGalleryPage = () => {  

    const { id } = useParams();
    const navigate = useNavigate();
    const [img, setImg] = useState("");

    useEffect(() => {
        const getData = async () => {
          const res = await Axios.get(
            "http://localhost:5000/career-gallery/" + id 
          );
          setImg(res.data.img);
        };
        getData();
      }, [id]);

      const onChangeFile = (e) => {
        setImg(e.target.files[0]);
      };

      const updateData = () => {
        const formData = new FormData();
  
        formData.append("img", img);
        formData.append("imgFilename", img.name);  
  
        Axios.put(`http://localhost:5000/career-gallery/${id}`, formData);
        navigate("/admin-career");
      };

      const deleteData = () => {
        Axios.delete(`http://localhost:5000/career-gallery/${id}`);
        navigate("/admin-career");
      };

      const addNew = () => {
        navigate("/admin-career-add");  
      };

  return (
    <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Edit</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="mb-3 row add-new-post-sub-row">
                    <div className="col-md-2 text-end">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
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
                    <div className="login-submit-btn pt-3">
                    <button
                      onClick={() => updateData()}
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteData()}
                      className="btn btn-danger mx-2"  
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => addNew()}
                      className="btn btn-primary"
                    >
                      Add New
                    </button>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CareerSingleGalleryPage