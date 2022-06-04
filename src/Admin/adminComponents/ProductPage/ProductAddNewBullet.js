import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";  

const ProductAddNewBullet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bullets, setBullets] = useState([]);
  const [pageName, setpageName] = useState('');
  const [data, setdata] = useState("no text added");

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/product-get/" + id);  
      setBullets(res.data.proSecondBullets);
      setpageName(res.data.pageName); 
    };
    get();
  }, []);

  const addData = async (e) => {
    bullets.push(data);
    updateData();
  };

  const updateData = () => {
    const newdata = {
      proSecondBullets: bullets, 
    };
    Axios.put(`http://localhost:5000/product-update/${id}`, newdata).then(
      (res) => navigate(`/admin-product/${pageName}`)
    );
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New Blog</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="mb-3 row add-new-post-sub-row">
                <div className="col-md-2 text-end">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Text
                  </label>
                </div>
                <div className="col-md-8">
                  <textarea
                    type="text"
                    className="form-control txtarea"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={data}
                    onChange={(e) => setdata(e.target.value)}
                  ></textarea>
                  <div className="login-submit-btn mt-3">
                    <button
                      type="submit"
                      onClick={addData}
                      className="btn btn-success"
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

export default ProductAddNewBullet;
