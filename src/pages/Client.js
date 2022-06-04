import React, { useEffect, useState } from "react";
import Axios from "axios";
import parse from "html-react-parser";  

const Client = () => {
  const [client, setClient] = useState([]);
  const [clientGallery, setClientGallery] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/clientPage").then((res) =>
      setClient(res.data)
    );

    Axios.get("http://localhost:5000/clientgallery").then((res) =>
      setClientGallery(res.data)
    );
  }, []);

  return (
    <>
      <div className="our-client-sec"> 
        <div className="container">
          {client.map((value, index) => (
            <div className="our-client-txt-container" key={index}>
              <h3>{value.subheading}</h3>
              <h5 className="client-first-text-sec-para">
                {parse(value.heading)}
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="client-text-component">
        <div className="container">
          <div className="row client-text-component-rw">
            <div className="col-xl-10">
              {client.map((value, index) => (
                <div className="client-inner-txt-container" key={index}>
                  <p>{parse(value.pera)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="client-img-gallery">
        <div className="container-fluid p-0">
          <div className="row p-0 gx-0 gy-0">
            {clientGallery
              .map((value, index) => (
                <div
                  className="col-xl-6 col-lg-6 col-md-6 client-img-col"
                  key={index}
                >
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="contentImage2"
                      alt="contentImage2"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">{value.heading}</h3>
                      <p className="content-text">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))
              .reverse()
              .slice(0, 2)}
            {clientGallery
              .map((value, index) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-4 client-img-col"
                  key={index}
                >
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="contentImage3"
                      alt="contentImage3"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">{value.heading}</h3>
                      <p className="content-text">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, -2)
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
