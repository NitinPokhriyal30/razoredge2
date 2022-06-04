import React, { useEffect, useState } from "react";
import Axios from "axios";
import Benefits from "../components/Career/Benefits";
import CareerGallery from "../components/Career/CareerGallery";
import parse from "html-react-parser"; 

const Career = () => {
  const [career, setCareer] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [management, setManagement] = useState([]);
  const [operation, setOperation] = useState([]);

  console.log(career);
  console.log(development);
  console.log(management);
  console.log(operation);

  useEffect(() => {
      Axios.get("http://localhost:5000/careers").then((res) =>
        setCareer(res.data)
      );

      Axios.get(
        "http://localhost:5000/development-jobs"
      ).then((res) => setDevelopment(res.data));

      Axios.get(
        "http://localhost:5000/management-jobs"
      ).then((res) => setManagement(res.data));

      Axios.get(
        "http://localhost:5000/operation-jobs"
      ).then((res) => setOperation(res.data));
  }, []);

  return (
    <>
      {career.map((value, index) => (
        <div key={index}>
          <div className="career-sec">
            <div className="container">
              <div className="row">
                <div className="career-txt-container">
                  <div className="our-solution-head pb-5">
                    <h3>{value.Sec1.subheading}</h3>
                    <h2>{value.Sec1.heading}</h2>
                    <a href="#scroll-down">
                      <button>{value.Sec1.btntxt}</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="career-img-container">
            <img
              src={`http://localhost:5000/images/${value.Sec1.img}`}
              className="career-img"
              alt="Intersection"
            />
          </div>
          <div className="career-empty-container"></div> 

          <div className="people-behind-sec">
            <div className="container">
              <div className="our-solution-head pb-5">
                <h2>{value.Sec2.heading}</h2>
                {parse(value.Sec2.pera)} 
              </div>
              <div className="poeple-img-container">
                <div className="container">
                  <CareerGallery /> 
                </div>
              </div>
            </div>
          </div>

          <div className="banefits-sec">
            <div className="container">
              <div className="our-solution-head pb-5">
                <h3>{value.Sec3.subheading}</h3>
                <h2>{value.Sec3.heading}</h2>
              </div>
              <div className="row banefits-rw">
                <Benefits />
              </div>
            </div>
          </div>

          <div className="open-position-sec " id="scroll-down">
            <div className="our-solution-head pb-4">
              <h3>{value.sec4.subheading}</h3>
              <h2>{value.sec4.heading}</h2>
              <span>Development</span>
            </div>
            <div className="container">
              {development.map((value, index) => (
                <div className="row marketing-manager-row" key={index}>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <strong>{value.title}</strong>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <span>{value.location}</span>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <a href="mailto:career@razoredgeanalytics.com">
                        <button>Apply Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="our-solution-head pb-3">
                <span>Operation</span>
              </div>
              {operation.map((value, index) => (
                <div className="row marketing-manager-row" key={index}>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <strong>{value.title}</strong>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <span>{value.location}</span>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <a href="mailto:career@razoredgeanalytics.com">
                        <button>Apply Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="our-solution-head pb-3">
                <span>Management</span>
              </div>
              {management.map((value, index) => (
                <div className="row marketing-manager-row" key={index}>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <strong>{value.title}</strong>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <span>{value.location}</span>
                    </div>
                  </div>
                  <div className="col-md-4 my-2">
                    <div className="marketing-inner-col">
                      <a href="mailto:career@razoredgeanalytics.com">
                        <button>Apply Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Career;
