import React, { useState } from "react";

const Update = (props) => {
  const [updateMode, setUpdateMode] = useState(false);

  const [heading, setHeading] = useState(props.heading);
  const [pera, setPera] = useState(props.pera);
  const [btntext, setBtntext] = useState(props.btntext);

  const updateData = async() => {
    // try{
    //   await Axios.put(`http://localhost:5000/update-create`, {
    //     heading,
    //     pera,
    //     btntext,
    //     id:props._id,
    //   })
    //     window.location.reload();
    // }catch(err){
    //   console.log(err);
    // }
  };

  return (
    <>
      <div className="newsroom-stay-update-sec">
        <div className="container">
          <div className="row stay-update-rw">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head">
                {updateMode ? (
                  <textarea
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                  ></textarea>
                ) : (
                  <h2>{props.heading}</h2>
                )}

                {updateMode ? (
                  <textarea
                    value={btntext}
                    onChange={(e) => setBtntext(e.target.value)}
                  ></textarea>
                ) : (
                  <button>{props.btntext}</button>
                )}
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col">
                {updateMode ? (
                  <textarea
                    value={pera}
                    onChange={(e) => setPera(e.target.value)}
                  ></textarea>
                ) : (
                  <p>{props.pera}</p>
                )}
              </div>
            </div>
            {updateMode ? (
              <button onClick={() => updateData()}>Update</button>
            ) : (
              ""
            )}
            <button onClick={() => setUpdateMode(true)}>Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
