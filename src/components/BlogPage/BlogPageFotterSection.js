import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPageFotterSection = (props) => {
  const navigate = useNavigate();
  const { blogsecondheading, blogsecondbtntext, blogsecondpera } = props;

  const caseStudiesBtn = (e) => {
    navigate("/case-studies");
  };

  return (
    <>
      <div className="blogsroom-stay-update-sec pb-5">
        <div className="container">
          <div className="row stay-update-rw">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head">
                <h2>{blogsecondheading}</h2>
                <button onClick={caseStudiesBtn}>{blogsecondbtntext}</button> 
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col">
                <p>{blogsecondpera}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPageFotterSection;
