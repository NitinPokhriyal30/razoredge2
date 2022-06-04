import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const CaseStudyPage = (props) => {
  const navigate = useNavigate(); 
  const [caseStudy, setCaseStudy] = useState([]);
  const [casefirstheading1, setcasefirstheading] = useState(
    props.casefirstheading
  );
  const [casefirstsubheading1, setcasefirstsubheading] = useState(
    props.casefirstsubheading
  );
  const [casefirstpera1, setcasefirstpera] = useState(props.casefirstpera);
  const [casesecondheading1, setcasesecondheading] = useState(
    props.casesecondheading
  );
  const [casesecondbtntext1, setcasesecondbtntext] = useState(
    props.casesecondbtntext
  );
  const [casesecondpera1, setcasesecondpera] = useState(props.casesecondpera);

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/case-studies-get").then((res) =>
      setCaseStudy(res.data)
    );
  }, []);

  const updateData = async () => {
    const data = {
      casefirstheading: casefirstheading1,
      casefirstsubheading: casefirstsubheading1,
      casefirstpera: casefirstpera1,
      casesecondheading: casesecondheading1,
      casesecondbtntext: casesecondbtntext1,
      casesecondpera: casesecondpera1,  
      _id: props.id,
    };
    Axios.post("http://localhost:5000/casestudy-page-update", data).then(
      (res) => window.location.reload() 
    );
  };

  const BlogsBtn = (e) => {
    navigate("/admin-news");
  };

  return (
    <>
      <div className="blog-sec">
        <div className="container">
          <div className="our-solution-head blog-sec-heading pb-5 admin-case-txtarea">
            {updateMode ? (
              <textarea
                value={casefirstsubheading1}
                onChange={(e) => setcasefirstsubheading(e.target.value)}
              ></textarea>
            ) : (
              <h3>{props.casefirstsubheading}</h3>
            )}
            {updateMode ? (
              <textarea
                value={casefirstheading1}
                onChange={(e) => setcasefirstheading(e.target.value)}
              ></textarea>
            ) : (
              <h2>{props.casefirstheading}</h2>
            )}
            {updateMode ? (
              <textarea
                value={casefirstpera1}
                onChange={(e) => setcasefirstpera(e.target.value)}
              ></textarea>
            ) : (
              <div>{props.casefirstpera}</div>
            )}
          </div>
        </div>
      </div>

      <div className="latest-post-sec">
        <div className="container">
          {caseStudy
            .map((value, index) => (
              <div className="row latest-post-rw" key={index}>
                <div className="col-xl-4 col-lg-4 col-md-4 latest-post-img-col ">
                  <div className="latest-post-img-container">
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="integration"
                      alt="integration"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 latest-post-sec-col">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-6">
                      <div className="latest-post-sub-col">
                        <span>LATEST POST</span>
                        <h3>{value.title.slice(0, 40)}</h3>
                        <span>{new Date(value.createdAt).toDateString()}</span>
                        <p>{parse(value.desc.slice(0, 247))}</p>
                        <Link
                          to={`/admin-case-studies/${value._id}`}
                          className="case-admin-edit-btn mt-3"
                        >
                          Edit
                          <i className="fa-solid fa-pen-to-square ps-2"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
            ))
            .reverse()
            .slice(0, 1)}
        </div>
      </div>

      <div className="all-post-sec">
        <div className="container">
          <div className="our-solution-head pb-5">
            <h2>All Posts</h2>
          </div>
          <div className="row all-post-rw">
            {caseStudy
              .map((value, index) => (
                <div
                  className="col-xl-3 col-lg-3 col-md-3 mb-5 pb-5"
                  key={index}
                >
                  <div className="all-post-inner-cl">
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="allBlog1"
                      alt="allBlog1"
                    />
                    <h3>{value.title.slice(0, 40)}</h3>
                    <span>{new Date(value.createdAt).toDateString()}</span>
                    <div>{parse(value.desc.slice(0, 247))}</div>
                    <Link
                      to={`/admin-case-studies/${value._id}`}
                      className="case-admin-edit-btn mt-3"
                    >
                      Edit
                      <i className="fa-solid fa-pen-to-square ps-2"></i>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, -1)
              .reverse()}
          </div>
        </div>
      </div>

      <div className="newsroom-stay-update-sec">
        <div className="container">
          <div className="row ">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head admin-case-study-sec mb-5">
                {updateMode ? (
                  <textarea
                    value={casesecondheading1}
                    onChange={(e) => setcasesecondheading(e.target.value)}
                  ></textarea>
                ) : (
                  <h2>{props.casesecondheading}</h2>
                )}

                {updateMode ? (
                  <textarea
                    value={casesecondbtntext1}
                    onChange={(e) => setcasesecondbtntext(e.target.value)}
                  ></textarea>
                ) : (
                  <button onClick={() => BlogsBtn()}>
                    {props.casesecondbtntext}
                  </button>
                )}
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col">
                {updateMode ? (
                  <textarea
                    className="admin-stay-txtarea"
                    value={casesecondpera1}
                    onChange={(e) => setcasesecondpera(e.target.value)}
                  ></textarea>
                ) : (
                  <p>{props.casesecondpera}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {updateMode ? (
          <button
            onClick={() => updateData()}
            className="why-razor-fix-update-btn"
          >
            Update Page
            <i className="fa-solid fa-repeat"></i>
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => setUpdateMode(true)}
          className="why-razor-fix-edit-btn"
        >
          Edit Page
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </>
  );
};

export default CaseStudyPage;
