import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const Solution2 = () => {

  const navigate = useNavigate();
  const { id } = useParams(); 
  const [data, setData] = useState([]); 
  const [sol2FirstPera, setsol2FirstPera] = useState('');
  const [sol2FirstMainPera, setsol2FirstMainPera] = useState(""); 
  const [sol2SecondPera, setsol2SecondPera] = useState(""); 
  const [sol2ThirdPera, setsol2ThirdPera] = useState(""); 
  const [sol2FourthPera, setsol2FourthPera] = useState(""); 


  useEffect(() => {
    const get = async () => { 
      const res = await Axios.get(
        "http://localhost:5000/solution2-get/" + id
      );
      setData(res.data);
      setsol2FirstPera(res.data.sol2FirstPera);
      setsol2FirstMainPera(res.data.sol2FirstMainPera);
      setsol2SecondPera(res.data.sol2SecondPera);
      setsol2ThirdPera(res.data.sol2ThirdPera);
      setsol2FourthPera(res.data.sol2FourthPera);
    }
    get();
  }, [id]);
 
  let onClickCard1 = () => {
    navigate("/products/-Risk-Management");
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
      <div className="investor-sentiment-sec">
        <div className="container">
          <div className="row">
            <div className="invester-inner-txt-container">
              <h3>{data.sol2FirstMainSubHeading}</h3>
              <h2>{data.sol2FirstMaiHeading}</h2>
              {parse(sol2FirstMainPera)}
            </div>
          </div>
        </div>
      </div>
      <div className="bullets-point-sec integration-data-sec solution-investor-sec">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-6 integration-data-col pb-3">
              <div className="bullet-img-sec">
                <img
                  src={`http://localhost:5000/images/${data.sol2FirstImage}`}
                  className="whyUs"
                  alt="whyUs"
                />
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 m-auto">
              <div className="integration-data-txt-container">
                {parse(sol2FirstPera)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="unlock-the-value-sec">
        <div className="unlock-the-value-txt-container solution-unlock-the-value">
          <h2>{data.sol2SecondHeading}</h2>
          {parse(sol2SecondPera)}
        </div>
      </div>
      <div className="bullets-point-sec solution-connect-sec">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-6 integration-data-col">
              <div className="bullet-img-sec">
                <img
                  src={`http://localhost:5000/images/${data.sol2ThirdImage}`}
                  className="bulletsImg"
                  alt="bulletsImg"
                />
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 m-auto">
              <div className="integration-data-txt-container connect-tool">
                <h3>{data.sol2ThirdHeading}</h3>
                {parse(sol2ThirdPera)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stay-update-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-3">
              <div className="integration-data-txt-container">
                <h3>{data.sol2FourthHeading}</h3>
                <Link className="footer-register-btn stay-update-btn" to="/">
                  <button>{data.sol2FourthBtnTxt}</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stay-update-txt">
                {/* <p>{data.sol2FourthPera}</p> */}
                {parse(sol2FourthPera)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-three-comp-sec text-center">
        <div className="get-more-head">
          <h3>{data.sol1FifthMainHeading}</h3>
        </div>
        <div className="container">
          <div className="row product-comp-rw">
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard1}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${data.sol1Fifthcard1Image}`}
                  className={data.sol1Fifthcard1Image}
                  alt={data.sol1Fifthcard1Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{data.sol1Fifthcard1Text}</h5>
              </div>
            </div>
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard2}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${data.sol1Fifthcard2Image}`}
                  className={data.sol1Fifthcard2Image}
                  alt={data.sol1Fifthcard2Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{data.sol1Fifthcard2Text}</h5>
              </div>
            </div>
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard3}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${data.sol1Fifthcard3Image}`}
                  className={data.sol1Fifthcard3Image}
                  alt={data.sol1Fifthcard3Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{data.sol1Fifthcard3Text}</h5>
              </div>
            </div>
            <div
              className="col-md-3 py-3"
              style={{ cursor: "pointer" }}
              onClick={onClickCard4}
            >
              <div className="product-first-img">
                <img
                  src={`http://localhost:5000/images/${data.sol1Fifthcard4Image}`}
                  className={data.sol1Fifthcard4Image}
                  alt={data.sol1Fifthcard4Image}
                />
              </div>
              <div className="product-first-comp">
                <h5>{data.sol1Fifthcard4Text}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution2;
