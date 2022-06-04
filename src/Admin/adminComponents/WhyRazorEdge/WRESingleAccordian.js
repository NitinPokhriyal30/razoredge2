import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WRESingleAccordian = () => {
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

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [accordianHeading, setAccordianHeading] = useState("");
  const [accordianDecs, setAccordianDecs] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(
        "http://localhost:5000/wreaccordian/" + id
      );
      setData(res.data);
      setAccordianHeading(res.data.accordianHeading);
      setAccordianDecs(res.data.accordianDecs);
    };
    getData();
  }, [id]);

  const updateData = async () => {
    try {
      await Axios.put(
        `http://localhost:5000/wreaccordian/${data._id}`,
        {
          accordianHeading: accordianHeading,
          accordianDecs: convertedContent,
        }
      );
      navigate("/admin-why-razor-edge");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = () => {
    Axios.delete(
      `http://localhost:5000/wreaccordian/${data._id}`
    ).then((res) => navigate("/admin-why-razor-edge"));
  };

  const addNew = () => {
    navigate("/admin-why-razor-edge/accordian-add");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Edit</h2>
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
                    value={accordianHeading}
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
                    {parse(accordianDecs)}
                  <div className="login-submit-btn pt-3">
                    <button
                      onClick={() => updateData()}
                      className="btn btn-success"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteData()}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => addNew()}
                      className="btn btn-primary"
                    >
                      Add New
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

export default WRESingleAccordian;
