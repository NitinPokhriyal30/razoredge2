import React from 'react';
import parse from "html-react-parser"; 

const ProblemSec = (props) => {

  const { WRESec2pera, WRESec2heading, WRESec2leftimg, WRESec2rightimg } = props

  return (
    <>
      <div className="problem-sec">
        <div className="row problem-rw">
          <div className="col-md-2">
            <div className="problem-img-container">
              <img
                src={`http://localhost:5000/images/${WRESec2leftimg}`}
                className="problem1"
                alt="problem1"
              />
            </div>
          </div>
          <div className="col-md-8 m-auto">
            <div className="the-problem-head our-solution-head text-center py-3 ">
              <h2>{WRESec2heading}</h2>
                {parse(WRESec2pera)}
            </div>
          </div>
          <div className="col-md-2">
            <div className="problem-img-container">
              <img
                src={`http://localhost:5000/images/${WRESec2rightimg}`}
                className="problem1"
                alt="problem1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemSec;
