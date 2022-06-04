import React from 'react';
import { useNavigate } from "react-router-dom";

const CaseStudyPageFotterSection = (props) => {

  const navigate = useNavigate(); 
  const { casesecondheading, casesecondbtntext, casesecondpera } = props; 
  
  const BlogsBtn = (e) => {
    navigate("/newsroom");
  };

  return (
    <>
      <div className="blogsroom-stay-update-sec">
        <div className="container">
          <div className="row stay-update-rw">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head">
                <h2>{casesecondheading}</h2>
                <button onClick={BlogsBtn}>{casesecondbtntext}</button>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col">
                <p>{casesecondpera}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyPageFotterSection;
