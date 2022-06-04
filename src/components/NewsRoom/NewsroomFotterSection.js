import React from 'react';
import { useNavigate } from "react-router-dom";

const NewsroomFotterSection = (props) => {

  const navigate = useNavigate(); 
  const { newssecondheading, newssecondbtntext, newssecondpera } = props
  
  const BlogsBtn = (e) => {
    navigate("/blogs");
  };

  return (
    <>
      <div className="newsroom-stay-update-sec">
        <div className="container">
          <div className="row stay-update-rw">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head">
                <h2>{newssecondheading}</h2>
                <button onClick={BlogsBtn}>{newssecondbtntext}</button>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col">
                <p>{newssecondpera}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsroomFotterSection;
