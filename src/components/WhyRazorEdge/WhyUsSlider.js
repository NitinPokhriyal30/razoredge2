import React, { useEffect, useState } from "react";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser";

const WhyUsSlider = (props) => {
  const {
    WRESec3heading,
    WRESec3SliderHeading,
    WRESec3SliderImage,
    WRESec3SliderPera1,
    WRESec3SliderPera2,
  } = props;

  const [accordian, setAccordian] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/wreaccordian").then((res) =>
      setAccordian(res.data)
    );
  }, []);

  return (
    <>
      <div className="why-us-slider">
        <div className="our-solution-head text-center py-5">
          <h2>{WRESec3heading}</h2>
        </div>
        <div className="our-product pb-5">
          <div className="case-studies-sec pb-5">
            <div className="container">
              <div
                id="myCarousel2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" id="carousel-inner">
                  <div>
                    <div className="row">
                      <div className=" col-lg-6 m-auto">
                        <div className="bullet-img-sec">
                          <img
                            src={`http://localhost:5000/images/${WRESec3SliderImage}`}
                            className="bulletsImg"
                            alt="bulletsImg"
                          />
                        </div>
                      </div>
                      <div className=" col-lg-6 m-auto">
                        <div className="slider-txt-container">
                          <p>{WRESec3SliderPera1}</p>

                          <h3 className="slider-txt-container-heading">
                            {WRESec3SliderHeading}
                          </h3>
                          <p>{WRESec3SliderPera2}</p>
                        </div>
                        <div
                          className="accordion why-us-accordion-sec mb-3"
                          id="accordionExample"
                        >
                          {accordian.map((value, index) => (
                            <Accordion key={index}>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}a-content`}
                                id={`panel${index}a-header`}
                              >
                                <Typography className="why-us-accordion-btn-head">
                                  {value.accordianHeading}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  {parse(value.accordianDecs)}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default WhyUsSlider;
