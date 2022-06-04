import React from "react";
import Testimonial from "../Testimonial";
import { useNavigate } from "react-router-dom";

const WhyUsTestimonial = (props) => {

  const navigate = useNavigate(); 
  const { WRESec5Subheading, WRESec5btntxt, WRESec5heading } = props;

  const caseStudyBtn = (e) => {
    navigate("/case-studies");
  };

  return (
    <div className="testimonial-second ">
      <div className="our-solution-head pb-5">
        <h3 className="what-we-offer">{WRESec5Subheading}</h3>
        <h2>{WRESec5heading}</h2>
        <button onClick={() => caseStudyBtn()}>{WRESec5btntxt}</button>
      </div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators testimonial-indi">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default WhyUsTestimonial;
