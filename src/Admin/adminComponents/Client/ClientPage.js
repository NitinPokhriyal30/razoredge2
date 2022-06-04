import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"; 
import { convertToHTML } from "draft-convert";
import parse from "html-react-parser";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ClientPage = (props) => {

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

  // ------------------------------

  const [editorState1, setEditorState1] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent1, setConvertedContent1] = useState(null);

  const handleEditorChange1 = (state) => {
    setEditorState1(state);
    convertContentToHTML1(); 
  };
  const convertContentToHTML1 = () => {
    let currentContentAsHTML = convertToHTML(editorState1.getCurrentContent());
    setConvertedContent1(currentContentAsHTML);
  };

  const [clientGallery, setClientGallery] = useState([]);
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [pera, setPera] = useState('');

  const [update, setupdate] = useState(false); 

  useEffect(() => {
    Axios.get("http://localhost:5000/clientgallery").then((res) =>
      setClientGallery(res.data)
    );

    Axios.get("http://localhost:5000/clientPage").then((res) =>
      res.data.map((value) => {
        setHeading(value.heading);
        setSubheading(value.subheading);
        setPera(value.pera);
      })
    );

  }, []);

  const updateData = () => {
    const data = {
      heading: convertedContent || heading,
      subheading: subheading,
      pera: convertedContent1 || pera,
      _id: props.id,
    };
    Axios.put("http://localhost:5000/clientPage", data).then((res) =>
      window.location.reload()
    );
  };

  return (
    <>
      <div className="our-client-sec">
        <div className="container">
          <div className="our-client-txt-container">
            <h3>
              {update ? (
                <input
                  type="text"
                  className="form-control"
                  value={subheading}
                  onChange={(e) => setSubheading(e.target.value)}
                ></input>
              ) : (
                subheading
              )}
            </h3>
            {/* {update ? (
                <input
                  type="text"
                  className="form-control"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                ></input>
              ) : (
                heading
              )} */}
            {update ? (
              <>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
                {parse(heading)}
              </>
            ) : (
              parse(heading)
            )}
          </div>
        </div>
      </div>

      <div className="client-text-component">
        <div className="container">
          <div className="row client-text-component-rw">
            <div className="col-xl-10">
              <div className="client-inner-txt-container">
                <p>
                  {/* {update ? (
                    <textarea
                      type="text"
                      className="form-control txtarea"
                      value={pera}
                      onChange={(e) => setPera(e.target.value)}
                    ></textarea>
                  ) : (
                    pera
                  )} */}
                  {update ? (
                    <>
                      <Editor
                        editorState1={editorState1}
                        onEditorStateChange={handleEditorChange1}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                      />
                      {parse(pera)}
                    </>
                  ) : (
                    parse(pera)
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {update ? (
        <button
          onClick={() => updateData()}
          className="why-razor-fix-update-btn "
        >
          Update Page <i className="fa-solid fa-repeat "></i>
        </button>
      ) : (
        ""
      )}
      <button
        onClick={() => setupdate(true)}
        className="why-razor-fix-edit-btn"
      >
        Edit Page <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <div className="client-img-gallery">
        <div className="container-fluid p-0">
          <div className="row p-0 gx-0 gy-0">
            {clientGallery
              .map((value, index) => (
                <div
                  className="col-xl-6 col-lg-6 col-md-6 client-img-col"
                  key={index}
                >
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="contentImage2"
                      alt="contentImage2"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">{value.heading}</h3>
                      <p className="content-text">{value.desc}</p>
                      <Link
                        to={`/admin-client/${value._id}`}
                        className="client-admin-btn"
                      >
                        Edit
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .reverse()
              .slice(0, 2)}
            {clientGallery
              .map((value, index) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-4 client-img-col"
                  key={index}
                >
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="contentImage3"
                      alt="contentImage3"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">{value.heading}</h3>
                      <p className="content-text">{value.desc}</p>
                      <Link
                        to={`/admin-client/${value._id}`}
                        className="client-admin-btn"
                      >
                        Edit
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, -2)
              .reverse()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientPage;
