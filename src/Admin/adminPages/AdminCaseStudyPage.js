import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import CaseStudyPage from "../adminComponents/CaseStudy/CaseStudyPage";

const AdminCaseStudyPage = () => {
  const [caseStudyPage, setCaseStudyPage] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/casestudy-page-get").then((res) =>
      setCaseStudyPage(res.data)
    );
  }, []);

  return (
    <>
      {caseStudyPage.map((value, index) => (
        <CaseStudyPage
          key={index}
          casefirstheading={value.caseFirstSection.casefirstheading}
          casefirstpera={value.caseFirstSection.casefirstpera}
          casefirstsubheading={value.caseFirstSection.casefirstsubheading}
          casesecondheading={value.caseSecondSection.casesecondheading}
          casesecondbtntext={value.caseSecondSection.casesecondbtntext}
          casesecondpera={value.caseSecondSection.casesecondpera}
          id={value._id}
        />
      ))}
      <Link
        to="/admin-case-studies-add"
        className="admin-add-new-caseStudies-btn"
      >
        Add New Case Study
      </Link>
    </>
  );
};

export default AdminCaseStudyPage;
