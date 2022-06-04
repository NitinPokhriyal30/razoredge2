import React, { useEffect, useState } from "react";
import Axios from "axios";
import BulletSection from "../components/BulletSection";
// import Testimonial from "../components/Testimonial";
import OurSolutions from "../components/OurSolutions";
import HeroSection from "../components/heroSection/HeroSection";
import OurProducts from "../components/OurProducts";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const [solutionData, setSolutionData] = useState([]);     
  const [whyRazorEdge, setWhyRazorEdge] = useState([]); 
  const [data, setData] = useState([]); 

  useEffect(() => {
    Axios.get("http://localhost:5000/home-get").then((res) =>
    setSolutionData(res.data), 
    );

    Axios.get("http://localhost:5000/why-razor-edge-get").then((res) =>
    setWhyRazorEdge(res.data),
    );

    Axios.get("http://localhost:5000/solution2-get/get-all").then((res) =>
      setData(res.data) 
    );

  }, []); 

  console.log(data);

  let onClickCard1 = () => {
    navigate("/products/Risk-Management");
  };

  let onClickCard2 = () => {
    navigate("/products/Portfolio-Management");
  };

  let onClickCard3 = () => {
    navigate("/products/Investor-Experience");
  };

  let onClickCard4 = () => {
    navigate("/products/Regulatory-Requirements");
  };

  return (
    <>
      <HeroSection />
      <BulletSection />
      {solutionData.map((value, index) => (
        <OurSolutions
          key={index}
          heading={value.ourSolutions.heading}
          subheading={value.ourSolutions.subheading}
          image={value.ourSolutions.solutionimage}
          mainheading={value.ourSolutions.mainheading}
          pera={value.ourSolutions.pera}
        />
      ))}
      <OurProducts />
      {/* {whyRazorEdge.map((value, index) => (
        <Testimonial
          key={index}
          WRESec5Subheading={value.whyRazorEdgeFifthSection.WRESec5Subheading}
          WRESec5btntxt={value.whyRazorEdgeFifthSection.WRESec5btntxt}
          WRESec5heading={value.whyRazorEdgeFifthSection.WRESec5heading}
          WRESec3Slider={value.whyRazorEdgeFifthSection.WRESec3Slider}
        />
      ))} */}
      {data.map((value,index)=>(
      <div className="product-three-comp-sec text-center">
        <div className="get-more-head">
          <h3>{value.sol1FifthMainHeading}</h3>
        </div>
        <div className="container">
          <div className="row product-comp-rw">
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard1}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${value.sol1Fifthcard1Image}`}
                  className={value.sol1Fifthcard1Image}
                  alt={value.sol1Fifthcard1Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{value.sol1Fifthcard1Text}</h5>
              </div>
            </div>
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard2}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${value.sol1Fifthcard2Image}`}
                  className={value.sol1Fifthcard2Image}
                  alt={value.sol1Fifthcard2Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{value.sol1Fifthcard2Text}</h5>
              </div>
            </div>
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard3}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${value.sol1Fifthcard3Image}`}
                  className={value.sol1Fifthcard3Image}
                  alt={value.sol1Fifthcard3Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{value.sol1Fifthcard3Text}</h5>
              </div>
            </div>
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard4}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${value.sol1Fifthcard4Image}`}
                  className={value.sol1Fifthcard4Image}
                  alt={value.sol1Fifthcard4Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{value.sol1Fifthcard4Text}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default Home;
