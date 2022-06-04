import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from "axios";
import parse from "html-react-parser";

const SingleCaseStudy = () => {

    const {id}  = useParams();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [createdAt, setcreatedAt] = useState("");
  
  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/case-studies-get/" + id);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setImg(res.data.img);
      setcreatedAt(res.data.createdAt);
    };
    get();
  }, [id]);

  return (
    <>
      <div className="latest-post-empty-bg"></div>

      <div className="post-sec my-5">
        <div className="container">
          <div className="row latest-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="row latest-post-inner-rw">
                <div className="col-xl-6 col-lg-6 col-md-6 latest-post-sub-col">
                  <img
                    src={`http://localhost:5000/images/${img}`}
                    className="caseStudyImage"
                    alt="caseStudyImage"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 m-auto">
                  <div className="latest-post-txt">
                    <p>{new Date(createdAt).toDateString()}</p>
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
              <div className="latest-post-para">
                <div>{parse(desc)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCaseStudy;
