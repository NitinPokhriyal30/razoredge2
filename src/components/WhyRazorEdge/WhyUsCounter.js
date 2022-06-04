import React from 'react';

const WhyUsCounter = (props) => {

  const {
    // WRESec4Part1H1, 
    WRESec4Part1pera, 
    // WRESec4Part2H1,
    WRESec4Part2pera, 
    // WRESec4Part3H1,
    WRESec4Part3pera, 
  } = props

  return (
  <>
    <div className="why-us-counter py-5">
        <div className="counter-inner-sec ">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center counter-first-container m-auto">
                <div className="counter-inner-col">
                  {/* <span>{`${WRESec4Part1H1}+`}</span> */}
                  <p>{WRESec4Part1pera}</p>
                </div>
              </div>
              <div className="col-md-4 m-auto text-center counter-second-container">
                <div className="counter-inner-col">
                  {/* <span>{WRESec4Part2H1}</span> */}
                  <p>{WRESec4Part2pera}</p>
                </div>
              </div>
              <div className="col-md-4 m-auto text-center">
                <div className="counter-inner-col">
                  {/* <span>{`${WRESec4Part3H1}+`}</span> */}
                  <p>{WRESec4Part3pera}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
    );
};

export default WhyUsCounter;
