import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Footer = () => {
  const navigate = useNavigate();
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/footer").then((res) =>
      setFooter(res.data)
    );
  }, []);

  return (
    <>
      {footer.map((value, index) => (
        <footer key={index}>
          <div className="footer-sec">
            <div className="container">
              <div className="row footer-row">
                <div className="col-md-3 first-li-col">
                  <ul>
                    <li className="company-li">
                      <Link to="/">
                        <img
                          src={`http://localhost:5000/images/${value.img}`}
                          className="NavLogo"
                          alt="NavLogo"
                        />
                      </Link>
                    </li>
                    <li className="footer-li footer-li-txt">
                      {value.companyDesc}
                    </li>
                    <li className="footer-li ">
                      <Link className="footer-register-btn" to="/">
                        <button>{value.btnText}</button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 second-li-col">
                  <ul>
                    <li className="company-li" id="ftr-hd">
                      {value.heading1}
                    </li>
                    <li className="footer-li ">
                      <Link
                        className="hover-underline-animation"
                        to="/why-razor-edge"
                      >
                        {value.page1}
                      </Link>
                    </li>
                    <li className="footer-li ">
                      <Link className="hover-underline-animation" to="/career">
                        {value.page2}
                      </Link>
                    </li>
                    <li className="footer-li ">
                      <Link
                        className="hover-underline-animation"
                        to="/newsroom"
                      >
                        {value.page3}
                      </Link>
                    </li>
                    <li className="footer-li ">
                      <a className="hover-underline-animation" href={value.page4Url}> 
                        {value.page4}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 third-li-col">
                  <ul>
                    <li className="company-li" id="ftr-hd">
                      {value.heading2}
                    </li>
                    <li className="footer-li ">
                      <Link className="hover-underline-animation" to="/blogs">
                        {value.page5}
                      </Link>
                    </li>
                    <li className="footer-li ">
                      <Link
                        className="hover-underline-animation"
                        to="/case-studies"
                      >
                        {value.page6}
                      </Link>
                    </li>
                    <li className="company-li " id="ftr-hd">
                      {value.heading3}
                    </li>
                    <li className="footer-li ">
                      <Link className="hover-underline-animation" to="/clients">
                        {value.page7}
                      </Link>
                    </li>
                    <li className="footer-li ">
                      <Link
                        className="hover-underline-animation"
                        to="/partners"
                      >
                        {value.page8}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 fourth-li-col">
                  <ul>
                    <li className="company-li" id="ftr-hd">
                      {value.heading4}
                    </li>
                    <li className="footer-li " id="ftr-hd">
                      <strong>{value.address1title}</strong>
                    </li>
                    <li className="footer-li ">{value.address1desc}</li>
                    <li className="footer-li " id="ftr-hd">
                      <strong>{value.address2title}</strong>
                    </li>
                    <li className="footer-li ">{value.address2desc}</li>
                    <li className="footer-li ">
                      <Link className="hover-underline-animation" to="/">
                        <strong>{value.email}</strong>
                      </Link>
                    </li>
                    <li className="company-li mb-0" id="ftr-hd">
                      {value.heading5}
                    </li>
                    <li className="footer-li ">
                      <Link className="hover-underline-animation" to="/">
                        {value.time}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom-footer py-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <p>
                      {value.copyright} |{" "}
                      <span>
                        <Link
                          to="/disclaimer"
                          onClick={(e) => navigate("/disclaimer")}
                          className="bottom-ftr-link"
                        >
                          Disclaimer
                        </Link>
                      </span>{" "}
                      |{" "}
                      <span>
                        <Link
                          to="/privacy-policy"
                          onClick={(e) => navigate("/privacy-policy")}
                          className="bottom-ftr-link"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="col-md-4 footer-social-icon-container">
                    <a href={value.facebookURL}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={value.youtubeURL}>
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href={value.linkedinURL}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={value.twitterURL}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ))}
    </>
  );
};

export default Footer;
