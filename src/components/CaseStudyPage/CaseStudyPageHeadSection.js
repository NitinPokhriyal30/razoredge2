import React from 'react';

const CaseStudyPageHeadSection = (props) => {

  const {casefirstheading, casefirstpera, casefirstsubheading} = props;

  return (
      <>
        <div className="blog-sec">
        <div className="container">
          <div className="our-solution-head blog-sec-heading pb-5">
            <h3>{casefirstsubheading}</h3>
            <h2>{casefirstheading}</h2>
            <p>{casefirstpera}</p>
          </div>
        </div>
      </div>
      </>
  );
};

export default CaseStudyPageHeadSection;
