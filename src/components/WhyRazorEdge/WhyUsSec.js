import React from "react";
import ReactPlayer from "react-player";
import parse from "html-react-parser";

const WhyUsSec = (props) => {
  const { WRESec1subheading, WRESec1heading, WRESec1image } = props; 

  return (
    <>
      <div className="why-us-sec ">
        <div className="container">
          <div className="our-solution-head text-center py-5">
            <h2 className="text-uppercase above-sub-heading">
              {WRESec1subheading}
            </h2>
            {parse(WRESec1heading)}
          </div>
        </div>
        <div className="empty-div"></div>
        <div className="container d-flex justify-content-center">
          <div className="why-us-img-container text-center">
            {/* <img
              src={`http://localhost:5000/images/${WRESec1image}`}
              className="whyUs"
              alt="whyUs"
            /> */}

            {props.WRESec1image.slice(0, 4) ? (
              <div className="player-wrapper">
                <ReactPlayer
                  playing={true}
                  // playIcon="nitin"
                  controls={true}
                  light={`http://localhost:5000/images/video-img.jpg`}
                  url={`http://localhost:5000/images/${props.WRESec1image}`}
                />
              </div>
            ) : (
              <div className="player-wrapper">
                <ReactPlayer
                  playing={true}
                  light={`http://localhost:5000/images/video-img.jpg`}
                  url={props.WRESec1image}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsSec;
