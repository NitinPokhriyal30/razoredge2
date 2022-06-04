import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WREAddAccordian = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const navigate = useNavigate();
  const [accordianHeading, setAccordianHeading] = useState("No Title Added"); 

  const postdata = () => {
    const data = {
      accordianHeading: accordianHeading,
      accordianDecs : convertedContent,
    };
    Axios.post("http://localhost:5000/wreaccordian", data).then(
      (res) => {
        navigate("/admin-why-razor-edge");
      }
    );
  };

  return (
    <div className="add-new-post-sec pb-5">
      <div className="add-new-heading">
        <h2>Add</h2>
      </div>
      <div className="container">
        <div className="row add-new-post-rw">
          <div className="col-xl-10 col-lg-10 col-md-10">
            <div className="mb-3 row add-new-post-sub-row">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="add title"
                  onChange={(e) => setAccordianHeading(e.target.value)} 
                />
              </div>
              <div className="col-md-8">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
                <div className="login-submit-btn pt-3">
                  <button
                    onClick={() => postdata()}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WREAddAccordian;
