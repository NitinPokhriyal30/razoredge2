import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; 

const PrivacyPolicy = (props) => { 
  const navigate = useNavigate();
  const [title1, setTitle] = useState(props.title);
  const [desc1, setDesc] = useState(props.desc);

  const [update, setupdate] = useState(false);

  const updateData = async () => {
    const data = {
      title: title1,
      desc: desc1,
      id: props.id,
    };

    Axios.put(`http://localhost:5000/privacy-policy/`, data);
    window.location.reload();
    navigate("/admin-privacy-policy");
  };

  return (
    <>
      <div>
        <div className="disclaimer-head-sec">
          <h2>
            {update ? (
              <textarea
                className="form-control"
                value={title1}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            ) : (
              title1
            )}
          </h2>
        </div>
        <div className="privacy-policy-container">
          <div className="container">
            <div className="privacy-policy-inner-container">
              <h3>LAST UPDATED {new Date(props.time).toDateString()}</h3>
              {/* {update ? (
                <div className="editor">
                  <CKEditor
                    editor={ClassicEditor}
                    data={desc1}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDesc(data);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <h2>Content</h2>
                  <div>{parse(desc1)}</div> 
                </div>
              )} */}
              <p>
                {update ? (
                  <textarea
                    className="form-control"
                    value={desc1}
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                ) : (
                  desc1
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {update ? <button onClick={() => updateData()}>Update</button> : ""}
      <button onClick={() => setupdate(true)}>Edit</button>
    </>
  );
};

export default PrivacyPolicy;
