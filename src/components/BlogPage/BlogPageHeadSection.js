import React from 'react';

const BlogPageHeadSection = (props) => {

    const {blogfirstheading, blogfirstpera, blogfirstsubheading} = props;

  return (
      <>
        <div className="our-solution-head blog-sec-heading pb-5">
            <h3>{blogfirstsubheading}</h3>
            <h2>{blogfirstheading}</h2>
            <p>{blogfirstpera}</p>
        </div>
      </>
  );
};

export default BlogPageHeadSection;
