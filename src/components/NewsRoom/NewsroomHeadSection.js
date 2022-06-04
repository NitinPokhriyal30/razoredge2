import React from 'react';

const NewsroomHeadSection = (props) => {

    const {newsfirstheading, newsfirstpera, newsfirstsubheading} = props;

  return (
      <>
        <div className="our-solution-head pb-5">
            <h3>{newsfirstsubheading}</h3>
            <h2>{newsfirstheading}</h2>
            <p>
              {newsfirstpera}
            </p>
          </div>
      </>
  );
};

export default NewsroomHeadSection;
