import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser"; 

const Soloution1 = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [solution1, setSolution1] = useState([]);
  const [sol1ZeroPera, setsol1ZeroPera] = useState('');
  const [sol1FirstPera, setsol1FirstPera] = useState('');
  const [sol1SecondPera, setsol1SecondPera] = useState("");
  const [sol1FourthPera, setsol1FourthPera] = useState("");
  const [sol1FifthPera, setsol1FifthPera] = useState("");

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/solution1-get/" + id);
      setSolution1(res.data);
      setsol1ZeroPera(res.data.sol1ZeroPera);
      setsol1FirstPera(res.data.sol1FirstPera);
      setsol1SecondPera(res.data.sol1SecondPera);
      setsol1FourthPera(res.data.sol1FourthPera); 
      setsol1FifthPera(res.data.sol1FifthPera);
    };
    get();
  }, [id]);

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
      <div>
        <div className="integration-hero-sec">
          <div className="empty-div integration-empty-div"></div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 col-md-6 m-auto">
                <div className="integration-txt-container">
                  <span>{solution1.sol1ZeroSubtitle}</span>
                  <h2>{solution1.sol1ZeroTitle}</h2>
                  <p className="alternative-manager-first-para">
                    {parse(sol1ZeroPera)}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="integration-img-container">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1ZeroImage}`}
                    className="integration"
                    alt="integration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec integration-data-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1FirstImage}`}
                    className="data"
                    alt="data"
                  />
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container">
                  <h3>{solution1.sol1FirstHeading}</h3>
                  {parse(sol1FirstPera)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="unlock-the-value-txt-container">
          <h2>{solution1.sol1SecondHeading}</h2>
          {parse(sol1SecondPera)}
        </div>

        <div
          className="get-more-sec"
          // style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="get-more-head">
            <h3>{solution1.sol1ThirdMainHeading}</h3>
          </div>
          <div className="container">
            <div className="row get-more-row">
              <div
                className="col-md-3 py-3"
                style={{ cursor: "pointer" }}
                onClick={onClickCard1}
              >
                <div className="get-more-inner-col product-first-comp py-3">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard1Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <h5>{solution1.sol1Thirdcard1Text}</h5>
                </div>
              </div>
              <div
                className="col-md-3 py-3 "
                style={{ cursor: "pointer" }}
                onClick={onClickCard2}
              >
                <div className="get-more-inner-col product-first-comp py-3">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard2Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <h5>{solution1.sol1Thirdcard2Text}</h5>
                </div>
              </div>
              <div
                className="col-md-3 py-3 "
                style={{ cursor: "pointer" }}
                onClick={onClickCard3}
              >
                <div className="get-more-inner-col product-first-comp py-3">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard3Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <h5>{solution1.sol1Thirdcard3Text}</h5>
                </div>
              </div>
              <div
                className="col-md-3 py-3 "
                style={{ cursor: "pointer" }}
                onClick={onClickCard4}
              >
                <div className="get-more-inner-col product-first-comp py-3">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1Thirdcard4Image}`}
                    className="connect"
                    alt="connect"
                  />
                  <h5>{solution1.sol1Thirdcard4Text}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bullets-point-sec integration-data-sec connect-with-tool-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1FourthImage}`}
                    className="bulletsImg"
                    alt="bulletsImg"
                  />
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container connect-tool">
                  <h3>{solution1.sol1FourthHeading}</h3>
                  {parse(sol1FourthPera)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bullets-point-sec integration-data-sec resources-sec mt-5">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 py-3 m-auto">
                <div className="integration-data-txt-container connect-tool resources-sec-txt-container">
                  <h3>{solution1.sol1FifthHeading}</h3>
                  {parse(sol1FifthPera)}
                  {/* <button>{solution1.sol1FifthBtnText}</button> */}
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 py-3 m-auto">
                <div className="bullet-img-sec">
                  <img
                    src={`http://localhost:5000/images/${solution1.sol1FifthImage}`}
                    className="resources"
                    alt="resources"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Soloution1;
