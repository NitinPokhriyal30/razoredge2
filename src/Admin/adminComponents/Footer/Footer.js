import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Footer = (props) => {
  const id = props.id;
  const navigate = useNavigate();
  //   const [footer, setFooter] = useState([]);
  const [companyDesc1, setcompanyDesc] = useState(props.companyDesc);
  const [btnText1, setbtnText] = useState(props.btnText);
  const [page11, setpage1] = useState(props.page1);
  const [page21, setpage2] = useState(props.page2);
  const [page31, setpage3] = useState(props.page3);
  const [page41, setpage4] = useState(props.page4);
  const [page4Url1, setpage4Url] = useState(props.page4Url);
  const [page51, setpage5] = useState(props.page5);
  const [page61, setpage6] = useState(props.page6);
  const [page71, setpage7] = useState(props.page7);
  const [page81, setpage8] = useState(props.page8);
  const [heading11, setheading1] = useState(props.heading1);
  const [heading21, setheading2] = useState(props.heading2);
  const [heading31, setheading3] = useState(props.heading3);
  const [heading41, setheading4] = useState(props.heading4);
  const [heading51, setheading5] = useState(props.heading5);
  const [address1title1, setaddress1title] = useState(props.address1title);
  const [address1desc1, setaddress1desc] = useState(props.address1desc);
  const [address2title1, setaddress2title] = useState(props.address2title);
  const [address2desc1, setaddress2desc] = useState(props.address2desc);
  const [email1, setemail] = useState(props.email);
  const [time1, settime] = useState(props.time);
  const [copyright1, setcopyright] = useState(props.copyright);
  const [facebookURL1, setfacebookURL] = useState(props.facebookURL);
  const [youtubeURL1, setyoutubeURL] = useState(props.youtubeURL);
  const [linkedinURL1, setlinkedinURL] = useState(props.linkedinURL);
  const [twitterURL1, settwitterURL] = useState(props.twitterURL);
  const [img1, setImg] = useState(props.img);

  const [update, setupdate] = useState(false);

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("companyDesc", companyDesc1);
    formData.append("btnText", btnText1);
    formData.append("page1", page11);
    formData.append("page2", page21);
    formData.append("page3", page31);
    formData.append("page4", page41);
    formData.append("page4Url", page4Url1);
    formData.append("page5", page51);
    formData.append("page6", page61);
    formData.append("page7", page71);
    formData.append("page8", page81);
    formData.append("heading1", heading11);
    formData.append("heading2", heading21);
    formData.append("heading3", heading31);
    formData.append("heading4", heading41);
    formData.append("heading5", heading51);
    formData.append("address1title", address1title1);
    formData.append("address1desc", address1desc1);
    formData.append("address2title", address2title1);
    formData.append("address2desc", address2desc1);
    formData.append("email", email1);
    formData.append("time", time1);
    formData.append("copyright", copyright1);
    formData.append("facebookURL", facebookURL1);
    formData.append("youtubeURL", youtubeURL1);
    formData.append("linkedinURL", linkedinURL1);
    formData.append("twitterURL", twitterURL1);
    formData.append("img", img1);
    formData.append("imgFilename", img1.name);

    Axios.put(`http://localhost:5000/footer/${id}`, formData);
    // navigate("/admin-dashboard");
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={updateData} encType="multipart/form-data">
        <footer>
          <div className="footer-sec">
            <div className="container">
              <div className="row footer-row">
                <div className="col-md-3 first-li-col">
                  <ul>
                    <li className="company-li">
                      {update ? (
                        <input
                          className="form-control"
                          type="file"
                          name="img"
                          onChange={(e) => setImg(e.target.files[0])}
                        />
                      ) : (
                        <img
                          src={`http://localhost:5000/images/${img1}`}
                          className="NavLogo"
                          alt="NavLogo"
                        />
                      )}
                    </li>
                    <li className="footer-li footer-li-txt">
                      {update ? (
                        <input
                          value={companyDesc1}
                          onChange={(e) => setcompanyDesc(e.target.value)}
                        />
                      ) : (
                        companyDesc1
                      )}
                    </li>
                    <li className="footer-li ">
                      {/* <button> */}
                      {update ? (
                        <input
                          value={btnText1}
                          onChange={(e) => setbtnText(e.target.value)}
                        />
                      ) : (
                        btnText1
                      )}
                      {/* </button> */}
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 second-li-col">
                  <ul>
                    <li className="company-li" id="ftr-hd">
                      {update ? (
                        <input
                          value={heading11}
                          onChange={(e) => setheading1(e.target.value)}
                        />
                      ) : (
                        heading11
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page11}
                          onChange={(e) => setpage1(e.target.value)}
                        />
                      ) : (
                        <Link to="admin-why-razor-edge">{page11}</Link>
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page21}
                          onChange={(e) => setpage2(e.target.value)}
                        />
                      ) : (
                        <Link to="admin-career">{page21}</Link>
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page31}
                          onChange={(e) => setpage3(e.target.value)}
                        />
                      ) : (
                        <Link to="admin-news">{page31}</Link>
                      )}
                    </li>
                    <li className="footer-li">
                      {update ? (
                        <>
                          <input
                            value={page41}
                            onChange={(e) => setpage4(e.target.value)}
                          />
                          <input
                            value={page4Url1}
                            onChange={(e) => setpage4Url(e.target.value)}
                          />
                        </>
                      ) : (
                        <a href={page4Url1}>{page41}</a>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 third-li-col">
                  <ul>
                    <li className="company-li" id="ftr-hd">
                      {update ? (
                        <input
                          value={heading21}
                          onChange={(e) => setheading2(e.target.value)}
                        />
                      ) : (
                        heading21
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page51}
                          onChange={(e) => setpage5(e.target.value)}
                        />
                      ) : (
                        <Link to="/admin-blogs">{page51}</Link>
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page61}
                          onChange={(e) => setpage6(e.target.value)}
                        />
                      ) : (
                        <Link to="admin-case-studies">{page61}</Link>
                      )}
                    </li>
                    <li className="company-li " id="ftr-hd">
                      {update ? (
                        <input
                          value={heading31}
                          onChange={(e) => setheading3(e.target.value)}
                        />
                      ) : (
                        heading31
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page71}
                          onChange={(e) => setpage7(e.target.value)}
                        />
                      ) : (
                        <Link to="admin-client">{page71}</Link>
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={page81}
                          onChange={(e) => setpage8(e.target.value)}
                        />
                      ) : (
                        <Link to="admin-partners">{page81}</Link>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 fourth-li-col">
                  <ul>
                    <li className="company-li" id="ftr-hd">
                      {update ? (
                        <input
                          value={heading41}
                          onChange={(e) => setheading4(e.target.value)}
                        />
                      ) : (
                        heading41
                      )}
                    </li>
                    <li className="footer-li " id="ftr-hd">
                      <strong>
                        {update ? (
                          <input
                            value={address1title1}
                            onChange={(e) => setaddress1title(e.target.value)}
                          />
                        ) : (
                          address1title1
                        )}
                      </strong>
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={address1desc1}
                          onChange={(e) => setaddress1desc(e.target.value)}
                        />
                      ) : (
                        address1desc1
                      )}
                    </li>
                    <li className="footer-li " id="ftr-hd">
                      <strong>
                        {update ? (
                          <input
                            value={address2title1}
                            onChange={(e) => setaddress2title(e.target.value)}
                          />
                        ) : (
                          address2title1
                        )}
                      </strong>
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={address2desc1}
                          onChange={(e) => setaddress2desc(e.target.value)}
                        />
                      ) : (
                        address2desc1
                      )}
                    </li>
                    <li className="footer-li ">
                      <strong>
                        {update ? (
                          <input
                            value={email1}
                            onChange={(e) => setemail(e.target.value)}
                          />
                        ) : (
                          email1
                        )}
                      </strong>
                    </li>
                    <li className="company-li mb-0" id="ftr-hd">
                      {update ? (
                        <input
                          value={heading51}
                          onChange={(e) => setheading5(e.target.value)}
                        />
                      ) : (
                        heading51
                      )}
                    </li>
                    <li className="footer-li ">
                      {update ? (
                        <input
                          value={time1}
                          onChange={(e) => settime(e.target.value)}
                        />
                      ) : (
                        time1
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom-footer py-3">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <p>
                      {update ? (
                        <input
                          value={copyright1}
                          onChange={(e) => setcopyright(e.target.value)}
                        />
                      ) : (
                        copyright1
                      )}{" "}
                      |{" "}
                      <span>
                        <Link
                          to="/admin-disclaimer"
                          onClick={(e) => navigate("/admin-disclaimer")}
                          className="bottom-ftr-link"
                        >
                          Disclaimer
                        </Link>
                      </span>{" "}
                      |{" "}
                      <span>
                        <Link
                          to="/admin-privacy-policy"
                          onClick={(e) => navigate("/admin-privacy-policy")}
                          className="bottom-ftr-link"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </p>
                  </div>
                  <div className="col-md-8 footer-social-icon-container">
                    {update ? (
                      <input
                        value={facebookURL1}
                        className="me-1"
                        onChange={(e) => setfacebookURL(e.target.value)}
                      />
                    ) : (
                      <i className="fab fa-facebook-f"></i>
                    )}
                    {update ? (
                      <input
                        value={youtubeURL1}
                        className="me-1"
                        onChange={(e) => setyoutubeURL(e.target.value)}
                      />
                    ) : (
                      <i className="fab fa-youtube"></i>
                    )}
                    {update ? (
                      <input
                        value={linkedinURL1}
                        className="me-1"
                        onChange={(e) => setlinkedinURL(e.target.value)}
                      />
                    ) : (
                      <i className="fab fa-linkedin-in"></i>
                    )}
                    {update ? (
                      <input
                        value={twitterURL1}
                        className="me-1"
                        onChange={(e) => settwitterURL(e.target.value)}
                      />
                    ) : (
                      <i className="fab fa-twitter"></i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {update ? (
            <button
              type="submit"
              onClick={updateData}
              className="footer-update-button"
            >
              Update Footer
              <i className="fa-solid fa-repeat"></i>
            </button>
          ) : (
            ""
          )}
        </footer>
      </form>
      <button onClick={() => setupdate(true)} className="footer-edit-button">
        Edit Footer
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </>
  );
};

export default Footer;
