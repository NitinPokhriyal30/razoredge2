import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [proSecondBullets, setproSecondBullets] = useState('');
  const [proproThirdAccordia, setproproThirdAccordia] = useState([]);
  const [proSecondHeading1, setProSecondHeading] = useState("");

  useEffect(() => {
    const get = async () => { 
      const res = await Axios.get(
        "http://localhost:5000/product-get/product/" + id
      );
      setProduct(res.data);
      setproSecondBullets(res.data.proSecondBullets);
      setproproThirdAccordia(res.data.proThirdAccordia);
      setProSecondHeading(res.data.proSecondHeading);
    };
    get();
  }, [id]); 

  let onClickCard1 = () => {
    navigate("/solution1/Alternative-Manager");
  };

  let onClickCard2 = () => {
    navigate("/solution/Asset-Manager");
  };

  let onClickCard3 = () => {
    navigate("/solution/Digital-Asset-Manager");
  };

  let onClickCard4 = () => {
    navigate("/solution/Wealth-Managers");
  };

  return (
    <>
      <div>
        <div className="integration-hero-sec">
          <div className="empty-div integration-empty-div"></div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-6 m-auto">
                <div className="integration-txt-container">
                  <span>{product.proFirstSubHeading}</span>
                  <h2>{product.proFirstHeading}</h2>
                  <p className="product-para">{product.proFirstPera}</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="integration-img-container">
                  <img
                    src={`http://localhost:5000/images/${product.proFirstImage}`}
                    className="integration"
                    alt="integration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec factor-edge-sec">
          <div className="container">
            <div className="factor-edge-heading ">
              <h5>{product.proSecondSubHeading}</h5>
              {parse(proSecondHeading1)}
              {/* <p className="factor-edge-subheading-para">
              </p> */}
            </div>
            <div className="row">
              <div className=" col-lg-6 col-md-6 m-auto integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${product.proSecondImage}`}
                    className="data"
                    alt="data"
                  />
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="bullet-txt-container">
                  {/* <ul>
                    {proSecondBullets.map((e, index) => (
                      <li key={index}>
                        {parse(e)}
                      </li>
                    ))}
                  </ul> */}
                  {parse(proSecondBullets)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec product-accor-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 pb-3 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${product.proThirdImage}`}
                    className="Intersection"
                    alt="Intersection"
                  />
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="slider-txt-container product-accor">
                  <h3 className="above-sub-heading">
                    {product.proThirdHeading}
                  </h3>
                  <p className="product-sub-pages-para ">
                    {product.proThirdPera}
                  </p>
                  <div
                    className="accordion why-us-accordion-sec"
                    id="accordionExample"
                  >
                    {proproThirdAccordia.map((value, index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${index}a-content`}
                          id={`panel${index}a-header`}
                        >
                          <Typography className="why-us-accordion-btn-head">
                            {value.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{parse(value.desc)}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-three-comp-sec text-center">
          <div className="container">
            <div className="row product-comp-rw">
              <div
                className="col-md-3 py-3"
                style={{ cursor: "pointer" }}
                onClick={onClickCard1}
              >
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards1img}`}
                    className={product.proFourthCards1img}
                    alt={product.proFourthCards1img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards1title}</h5>
                  {/* <p>{product.proFourthCards1desc}</p> */}
                </div>
              </div>
              <div
                className="col-md-3 py-3"
                onClick={onClickCard2}
                style={{ cursor: "pointer" }}
              >
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards2img}`}
                    className={product.proFourthCards2img}
                    alt={product.proFourthCards2img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards2title}</h5>
                  {/* <p>{product.proFourthCards2desc}</p> */}
                </div>
              </div>
              <div
                className="col-md-3 py-3"
                onClick={onClickCard3}
                style={{ cursor: "pointer" }}
              >
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards3img}`}
                    className={product.proFourthCards3img}
                    alt={product.proFourthCards3img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards3title}</h5>
                  {/* <p>{product.proFourthCards3desc}</p> */}
                </div>
              </div>
              <div
                className="col-md-3 py-3"
                onClick={onClickCard4}
                style={{ cursor: "pointer" }}
              >
                <div className="product-first-img">
                  <img
                    src={`http://localhost:5000/images/${product.proFourthCards4img}`}
                    className={product.proFourthCards4img}
                    alt={product.proFourthCards4img}
                  />
                </div>
                <div className="product-first-comp">
                  <h5>{product.proFourthCards4title}</h5>
                  {/* <p>{product.proFourthCards4desc}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
