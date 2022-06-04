import React, { useEffect, useState } from "react";
import Axios from "axios";

const Partners = () => {
  const [partners, setpatners] = useState([]);
  const [partnersService, setPatnersSerevice] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/partners").then((res) => {
      setpatners(res.data);
    });
    
    Axios.get("http://localhost:5000/partner-service").then((res) => { 
      setPatnersSerevice(res.data);
    });

  }, []);

  return (
    <>
      {partners.map((value, index) => (
        <div key={index}>
          <div className="our-client-sec">
            <div className="container">
              <div className="our-client-txt-container">
                <h3>{value.subheading}</h3>
                <h2>{value.heading}</h2>
              </div>
            </div>
          </div>

          <div className="client-text-component">
            <div className="container">
              <div className="row client-text-component-rw">
                <div className="col-xl-10">
                  <div className="client-inner-txt-container">
                    <p>{value.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="partners-components-sec">
        <div className="container">
          <div className="row partners-component-rw">
            {partnersService.map((value, index) => (
              <div className="col-xl-3 col-lg-4 col-md-4" key={index}>
                <div className="partners-inner-components">
                  <img
                    src={`http://localhost:5000/images/${value.img}`}
                    className="data"
                    alt="data"
                  />
                  <h3 id="partner-head">{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
