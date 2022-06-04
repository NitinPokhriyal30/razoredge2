import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { EditorState } from "draft-js"; 
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminPrivacyPolicy = () => {
 
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [title1, setTitle] = useState(data.title);

    const [update, setupdate] = useState(false);

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

    const createMarkup = (html) => {
      return {
        __html: DOMPurify.sanitize(html),
      };
    };

    let id;

    data.map((value) => {
      id = value._id;
    });

    const updateData = async () => {
      const data = {
        title: title1,
        desc: convertedContent,
        id: id,
      };

      Axios.put(`http://localhost:5000/privacy-policys/`, data);
      window.location.reload();
      navigate("/admin-disclaimer");
    };

    useEffect(() => {
        Axios.get("http://localhost:5000/privacy-policys").then((res) =>
            setData(res.data) 
        );

    }, []); 

    return (
      <>
        <div className="accept-of-terms-sec">
          <div className="container">
            <div className="accept-of-terms-txt-container">
              <h3>Acceptance of Terms</h3>
              {update ? (
                <div>
                  {data.map((value, index) => (
                    <div
                      className="preview"
                      dangerouslySetInnerHTML={createMarkup(value.desc)}
                    ></div>
                  ))}
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />
                </div>
              ) : (
                <div>
                  {data.map((value, index) => (
                    <div
                      className="preview"
                      dangerouslySetInnerHTML={createMarkup(value.desc)}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {update ? <button onClick={() => updateData()}>Update</button> : ""}
        <button onClick={() => setupdate(true)}>Edit</button>
      </>
    );
}

export default AdminPrivacyPolicy