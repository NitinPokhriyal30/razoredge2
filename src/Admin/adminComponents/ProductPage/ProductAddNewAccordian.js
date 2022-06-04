import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert"; 
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ProductAddNewAccordian = () => {

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

  // const createMarkup = (html) => {
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // };

  const { id } = useParams();
  const navigate = useNavigate();
  const [pageName, setpageName] = useState("");
  const [accordian, setAccordian] = useState([]);
  const [title, setTitle] = useState("No Title Added");
  // const [desc, setDesc] = useState("No Description Added");

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/product-get/" + id);
      setAccordian(res.data.proThirdAccordia);
      setpageName(res.data.pageName);
    };
    get();
  }, []);

  const addData = (e) => {
    accordian.push(...[{ title: title, desc:convertedContent }]);
    updateData();
  };

  const updateData = () => {
    const newdata = {
      proThirdAccordia: accordian,
    };
    Axios.put(`http://localhost:5000/product-update/${id}`, newdata).then(
      (res) => navigate(`/admin-product/${pageName}`)
    );
  };

  return (
    <>
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
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-md-8">
                  {/* <textarea
                    type="text"
                    className="form-control txtarea"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="add description"
                  ></textarea> */}
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />
                  <div className="login-submit-btn pt-3">
                    <button
                      onClick={() => addData()}
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
    </>
  );
};

export default ProductAddNewAccordian;
