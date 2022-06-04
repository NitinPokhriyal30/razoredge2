import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminProductPageAdd = () => {

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
  const [pageName, setpageName] = useState("");
  const [pageDesc, setpageDesc] = useState("");
  //   const [proSecondBullets1, setproSecondBullets] = useState([]);
  //   const [proThirdAccordia1, setproThirdAccordia] = useState([]);
  const [proFirstHeading1, setProFirstHeading] = useState("");
  const [proFirstImage1, setProFirstImage] = useState("");
  const [proFirstPera1, setProFirstPera] = useState("");
  const [proFirstSubHeading1, setProFirstSubHeading] = useState("");
  const [proSecondHeading1, setProSecondHeading] = useState("");
  const [proSecondImage1, setProSecondImage] = useState("");
  const [proSecondSubHeading1, setProSecondSubHeading] = useState("");
  const [proThirdHeading1, setProThirdHeading] = useState("");
  const [proThirdImage1, setProThirdImage] = useState("");
  const [proThirdPera1, setProThirdPera] = useState("");

  const [proFourthCards1img1, setproFourthCards1img] = useState("");
  const [proFourthCards1title1, setproFourthCards1title] = useState("");
  const [proFourthCards1desc1, setproFourthCards1desc] = useState("");
  const [proFourthCards2img1, setproFourthCards2img] = useState("");
  const [proFourthCards2title1, setproFourthCards2title] = useState("");
  const [proFourthCards2desc1, setproFourthCards2desc] = useState("");
  const [proFourthCards3img1, setproFourthCards3img] = useState("");
  const [proFourthCards3title1, setproFourthCards3title] = useState("");
  const [proFourthCards3desc1, setproFourthCards3desc] = useState("");
  const [proFourthCards4img1, setproFourthCards4img] = useState("");
  const [proFourthCards4title1, setproFourthCards4title] = useState("");
  const [proFourthCards4desc1, setproFourthCards4desc] = useState("");

  const postdata = (e) => {
    const formData = new FormData();

    formData.append("pageName", pageName);
    formData.append("pageDesc", pageDesc);
    formData.append("proFirstHeading", proFirstHeading1);
    formData.append("proFirstImage", proFirstImage1);
    formData.append("proFirstImageFilename", proFirstImage1.name);
    formData.append("proFirstPera", proFirstPera1);
    formData.append("proFirstSubHeading", proFirstSubHeading1);
    formData.append("proSecondHeading", convertedContent);
    // formData.append("proSecondHeading", proSecondHeading1);
    formData.append("proSecondImage", proSecondImage1);
    formData.append("proSecondImageFilename", proSecondImage1.name);
    formData.append("proSecondSubHeading", proSecondSubHeading1);
    // formData.append("proSecondBullets", proSecondBullets1);
    formData.append("proThirdHeading", proThirdHeading1);
    formData.append("proThirdImage", proThirdImage1);
    formData.append("proThirdImageFilename", proThirdImage1.name);
    formData.append("proThirdPera", proThirdPera1);
    // formData.append("proThirdAccordia", proThirdAccordia1);
    formData.append("proFourthCards1title", proFourthCards1title1);
    formData.append("proFourthCards1desc", proFourthCards1desc1);
    formData.append("proFourthCards2title", proFourthCards2title1);
    formData.append("proFourthCards2desc", proFourthCards2desc1);
    formData.append("proFourthCards3title", proFourthCards3title1);
    formData.append("proFourthCards3desc", proFourthCards3desc1);
    formData.append("proFourthCards4title", proFourthCards4title1);
    formData.append("proFourthCards4desc", proFourthCards4desc1);
    formData.append("proFourthCards1img", proFourthCards1img1);
    formData.append("proFourthCards1imgFilename", proFourthCards1img1.name);
    formData.append("proFourthCards2img", proFourthCards2img1);
    formData.append("proFourthCards2imgFilename", proFourthCards2img1.name);
    formData.append("proFourthCards3img", proFourthCards3img1);
    formData.append("proFourthCards3imgFilename", proFourthCards3img1.name);
    formData.append("proFourthCards4img", proFourthCards4img1);
    formData.append("proFourthCards4imgFilename", proFourthCards4img1.name);

    Axios.post("http://localhost:5000/product-create", formData);
    navigate("/admin-dashboard");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New product Page</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <form encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Page Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Give Title to your Page"
                      onChange={(e) => setpageName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Page Description
                    </label>
                  </div>
                  <div className="col-md-8">
                    <textarea
                      type="text"
                      className="form-control txtarea"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Give Description to your Page"
                      onChange={(e) => setpageDesc(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {/* page section started */}
                <div className="section-first">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <div className=" row add-new-post-sub-row justify-content-start">
                        <div className="col-md-3 text-end ">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section one Sub Heading
                          </label> */}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section First Sub Heading"
                            onChange={(e) =>
                              setProFirstSubHeading(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row justify-content-start">
                        <div className="col-md-3 text-end ">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section First Heading
                          </label> */}
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section First Heading"
                            onChange={(e) => setProFirstHeading(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row justify-content-start">
                        <div className="col-md-3 text-end ">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section First Peragraph
                          </label> */}
                        </div>
                        <div className="col-md-9">
                          <textarea
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section First Paragraph"
                            onChange={(e) => setProFirstPera(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 m-auto">
                      <div className="row add-new-post-sub-row justify-content-center">
                        <div className="col-md-8">
                          <input
                            type="file"
                            filename="ProFirstImage"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setProFirstImage(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-two">
                  <div className="row mb-5 justify-content-center">
                    <div className=" row add-new-post-sub-row justify-content-center">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Section Two Sub Heading"
                          onChange={(e) =>
                            setProSecondSubHeading(e.target.value)
                          }
                        ></input>
                      </div>
                    </div>
                    <div className=" row add-new-post-sub-row justify-content-center">
                      <div className="col-md-9">
                        {/* <input
                          type="text"
                          className="form-control "
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Section Two Heading"
                          onChange={(e) => setProSecondHeading(e.target.value)}
                        ></input> */}
                        <Editor
                          editorState={editorState}
                          onEditorStateChange={handleEditorChange}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName="toolbar-class"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-3 text-end">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section Two Image
                          </label> */}
                        </div>
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="ProSecondImage"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setProSecondImage(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <h1 className="mb-0">Bullets Point Section</h1>
                    </div>
                  </div>
                </div>

                <div className="section-third">
                  <div className="row">
                    <div className="col-md-6 m-auto">
                      <div className="mb-3 row add-new-post-sub-row">
                        <div className="col-md-2 text-end">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section Two Image
                          </label> */}
                        </div>
                        <div className="col-md-8">
                          <input
                            type="file"
                            filename="ProThirdImage"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setProThirdImage(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className=" row add-new-post-sub-row justify-content-start">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control "
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Third Heading"
                            onChange={(e) => setProThirdHeading(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div className="mb-3 row add-new-post-sub-row justify-content-start">
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Third Pera"
                            onChange={(e) => setProThirdPera(e.target.value)}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-fourth">
                  <div className="row">
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row ">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="proFourthCards1img"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setproFourthCards1img(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row ">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Card 1 Title"
                            onChange={(e) =>
                              setproFourthCards1title(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      <div className="row add-new-post-sub-row ">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Card Description"
                            onChange={(e) =>
                              setproFourthCards1desc(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="proFourthCards1img"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setproFourthCards2img(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Card 2 Title"
                            onChange={(e) =>
                              setproFourthCards2title(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Description"
                            onChange={(e) =>
                              setproFourthCards2desc(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="proFourthCards1img"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setproFourthCards3img(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className="row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Card 3 Title"
                            onChange={(e) =>
                              setproFourthCards3title(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Description"
                            onChange={(e) =>
                              setproFourthCards3desc(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="proFourthCards1img"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setproFourthCards4img(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className="row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Card 3 Title"
                            onChange={(e) =>
                              setproFourthCards4title(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Description"
                            onChange={(e) =>
                              setproFourthCards4desc(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="login-submit-btn">
                  <button
                    type="button"
                    onClick={postdata}
                    className="btn btn-primary"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductPageAdd;
