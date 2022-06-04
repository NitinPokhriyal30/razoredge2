import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const AdminTestimonial = () => {
  const [testimonial, settestimonial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/testimonial")
      .then((res) => settestimonial(res.data));
  }, []);

  return (
    <>
      <Carousel id="newTestimonial">
        {testimonial.map((value, index) => (
          <Carousel.Item key={index} pause="hover" interval={5000}>
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center why-us-testi-img-container">
                  <img
                    src={`http://localhost:5000/images/${value.img}`}
                    className={value.img}
                    alt={value.img}
                  />
                </div>
                <div className="col-md-6 m-auto">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img
                      src={`http://localhost:5000/images/quote.png`}
                      className="why-us-qoute-img"
                      alt="quote"
                    />
                    <p>{value.desc}</p>
                    {/* <img
                      src={`http://localhost:5000/images/${value.logo}`}
                      className="company-logo-img"
                      alt="companyLogo"
                    /> */}
                    <Link
                      to={`/admin-testimonial/${value._id}`}
                      className="product-edit-btn"
                    >
                      Edit
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default AdminTestimonial;
