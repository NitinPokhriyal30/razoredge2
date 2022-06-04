import React, { useEffect, useState } from "react";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OurSolutions = (props) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [accordian, setAccordian] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/homeaccordian").then((res) =>
      setAccordian(res.data)
    );
  }, []);

  return (
    <>
      <div className="our-solution">
        <div className="container">
          <div className="row">
            <div className="our-solution-head pb-5">
              <h3 className="above-sub-heading">{props.subheading}</h3>
              <h2>{props.heading}</h2>
            </div>
            <div className="our-solution-txt-img-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="innovation-head">
                    <h2>{props.mainheading}</h2>
                    <p>{props.pera}</p>
                  </div>
                </div>
                <div className="col-md-6 m-auto text-center ">
                  <div className="solution-img-container">
                    <img
                      src={`http://localhost:5000/images/${props.image}`}
                      className="Solution-img-cntr"
                      alt="Solution"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordian-sec home-page-solution-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 accordion-col home-page-solution-sec-accordion">
              <div className="accordion" id="accordionExample">
                {accordian.map((value, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}a-content`}
                      id={`panel${index}a-header`}
                    >
                      <Typography className="accordion-text-btn">
                        {value.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{value.desc}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSolutions;
