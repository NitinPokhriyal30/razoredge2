import React, { useEffect, useState } from "react";
import Axios from "axios";
import WhyUsSec from "../components/WhyRazorEdge/WhyUsSec";
import ProblemSec from "../components/WhyRazorEdge/ProblemSec";
import WhyUsSlider from "../components/WhyRazorEdge/WhyUsSlider";
// import WhyUsCounter from "../components/WhyRazorEdge/WhyUsCounter";
// import WhyUsTestimonial from "../components/WhyRazorEdge/WhyUsTestimonial";

const WhyRazorEdge = () => {

  const [whyRazorEdge, setWhyRazorEdge] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/why-razor-edge-get").then((res) => 
    setWhyRazorEdge(res.data),
    );
  }, []);

  return (
    <>
      {whyRazorEdge.map((value, index) => ( 
      <WhyUsSec key={index}
      WRESec1heading={value.whyRazorEdgeFirstSection.WRESec1heading}
      WRESec1subheading={value.whyRazorEdgeFirstSection.WRESec1subheading}  
      WRESec1image={value.whyRazorEdgeFirstSection.WRESec1image}
      />
      ))}
      {whyRazorEdge.map((value, index) => (
      <ProblemSec key={index}
      WRESec2pera={value.whyRazorEdgeSecondSection.WRESec2pera}
      WRESec2heading={value.whyRazorEdgeSecondSection.WRESec2heading}
      WRESec2leftimg={value.whyRazorEdgeSecondSection.WRESec2leftimg}
      WRESec2rightimg={value.whyRazorEdgeSecondSection.WRESec2rightimg}
      />
      ))}
      {whyRazorEdge.map((value, index) => (
      <WhyUsSlider key={index}
      WRESec3heading={value.whyRazorEdgeThirdSection.WRESec3heading}
      WRESec3SliderHeading={value.whyRazorEdgeThirdSection.WRESec3SliderHeading}
      WRESec3SliderImage={value.whyRazorEdgeThirdSection.WRESec3SliderImage}
      WRESec3SliderPera1={value.whyRazorEdgeThirdSection.WRESec3SliderPera1}
      WRESec3SliderPera2={value.whyRazorEdgeThirdSection.WRESec3SliderPera2}
      />
      ))}
      {/* {whyRazorEdge.map((value, index) => (
      <WhyUsCounter key={index}
      WRESec4Part1pera={value.whyRazorEdgeFourthSection.WRESec4Part1pera}
      WRESec4Part2pera={value.whyRazorEdgeFourthSection.WRESec4Part2pera}
      WRESec4Part3pera={value.whyRazorEdgeFourthSection.WRESec4Part3pera}
      />
      ))} */}
      {/* {whyRazorEdge.map((value, index) => (
      <WhyUsTestimonial key={index}
      WRESec5Subheading={value.whyRazorEdgeFifthSection.WRESec5Subheading}
      WRESec5btntxt={value.whyRazorEdgeFifthSection.WRESec5btntxt}
      WRESec5heading={value.whyRazorEdgeFifthSection.WRESec5heading}
       />
      ))} */}
    </>
  );
};

export default WhyRazorEdge;
