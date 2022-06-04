import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CaseStudyPageHeadSection from "../components/CaseStudyPage/CaseStudyPageHeadSection";
import CaseStudyPageFotterSection from "../components/CaseStudyPage/CaseStudyPageFotterSection";
import parse from "html-react-parser";


const CaseStudies = () => {

  const [casestudypage, setCaseStudyPage] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {

    Axios.get("http://localhost:5000/casestudy-page-get").then((res) =>
    setCaseStudyPage(res.data),
    );

    Axios.get("http://localhost:5000/case-studies-get").then((res) =>
    setCaseStudies(res.data),
    );
  }, []);

  console.log(casestudypage);


  return (
    <>
      {casestudypage.map((value, index) => (
        <CaseStudyPageHeadSection
          key={index}
          casefirstheading={value.caseFirstSection.casefirstheading}
          casefirstpera={value.caseFirstSection.casefirstpera}
          casefirstsubheading={value.caseFirstSection.casefirstsubheading}
        />
      ))}
      <div className="latest-post-sec">
        <div className="container">
          {caseStudies
            .map((value, index) => (
              <div className="row latest-post-rw" key={index}>
                <div className="col-xl-4 col-lg-4 col-md-4 latest-post-img-col ">
                  <div className="latest-post-img-container">
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="Intersection"
                      alt="Intersection"
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
                        <div>{parse(value.desc.slice(0, 247))}</div>
                        <Link to={`/case-studies/${value._id}`}>
                          Read More
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
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
          <div className="our-solution-head pb-5"></div>
          <div className="row all-post-rw">
            {caseStudies
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
                    <Link to={`/case-studies/${value._id}`}>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, -1)
              .reverse()}
          </div>
        </div>
      </div>

      {casestudypage.map((value, index) => (
        <CaseStudyPageFotterSection
          key={index}
          casesecondheading={value.caseSecondSection.casesecondheading}
          casesecondbtntext={value.caseSecondSection.casesecondbtntext}
          casesecondpera={value.caseSecondSection.casesecondpera}
        />
      ))}
    </>
  );
};

export default CaseStudies;
