import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import parse from "html-react-parser";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminSolution1Page = () => {
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

  // --------------------------------------------

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
  
  // --------------------------------------------

  const [editorState2, setEditorState2] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent2, setConvertedContent2] = useState(null);

  const handleEditorChange2 = (state) => {
    setEditorState2(state);
    convertContentToHTML2();
  };

  const convertContentToHTML2 = () => {
    let currentContentAsHTML = convertToHTML(editorState2.getCurrentContent());
    setConvertedContent2(currentContentAsHTML);
  };
  
  // --------------------------------------------

  const [editorState3, setEditorState3] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent3, setConvertedContent3] = useState(null);

  const handleEditorChange3 = (state) => {
    setEditorState3(state);
    convertContentToHTML3();
  };

  const convertContentToHTML3 = () => {
    let currentContentAsHTML = convertToHTML(editorState3.getCurrentContent());
    setConvertedContent3(currentContentAsHTML);
  };
 
  // --------------------------------------------

  const [editorState4, setEditorState4] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent4, setConvertedContent4] = useState(null);

  const handleEditorChange4 = (state) => {
    setEditorState4(state);
    convertContentToHTML4();
  };

  const convertContentToHTML4 = () => {
    let currentContentAsHTML = convertToHTML(editorState4.getCurrentContent()); 
    setConvertedContent4(currentContentAsHTML);
  };

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [pageName1, setpageName] = useState("");
  const [pageDesc1, setpageDesc] = useState("");
  const [sol1ZeroImage1, setsol1ZeroImage] = useState("");
  const [sol1ZeroTitle1, setsol1ZeroTitle] = useState("");
  const [sol1ZeroSubtitle1, setsol1ZeroSubtitle] = useState("");
  const [sol1ZeroPera1, setsol1ZeroPera] = useState(""); 

  const [sol1FirstImage1, setsol1FirstImage] = useState("");
  const [sol1FirstHeading1, setsol1FirstHeading] = useState("");
  const [sol1FirstPera1, setsol1FirstPera] = useState("");

  const [sol1SecondHeading1, setsol1SecondHeading] = useState("");
  const [sol1SecondPera1, setsol1SecondPera] = useState("");

  const [sol1ThirdMainHeading1, setsol1ThirdMainHeading] = useState("");
  const [sol1Thirdcard1Image1, setsol1Thirdcard1Image] = useState("");
  const [sol1Thirdcard1Text1, setsol1Thirdcard1Text] = useState("");
  const [sol1Thirdcard2Image1, setsol1Thirdcard2Image] = useState("");
  const [sol1Thirdcard2Text1, setsol1Thirdcard2Text] = useState("");
  const [sol1Thirdcard3Image1, setsol1Thirdcard3Image] = useState("");
  const [sol1Thirdcard3Text1, setsol1Thirdcard3Text] = useState("");
  const [sol1Thirdcard4Image1, setsol1Thirdcard4Image] = useState("");
  const [sol1Thirdcard4Text1, setsol1Thirdcard4Text] = useState("");

  const [sol1FourthImage1, setsol1FourthImage] = useState("");
  const [sol1FourthHeading1, setsol1FourthHeading] = useState("");
  const [sol1FourthPera1, setsol1FourthPera] = useState("");

  const [sol1FifthImage1, setsol1FifthImage] = useState("");
  const [sol1FifthHeading1, setsol1FifthHeading] = useState("");
  const [sol1FifthPera1, setsol1FifthPera] = useState("");
  const [sol1FifthBtnText1, setsol1FifthBtnText] = useState("");

  const [update, setupdate] = useState(false);

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get(
        "http://localhost:5000/solution1-get/" + id
      );
      setData(res.data);
      setpageName(res.data.pageName);
      setpageDesc(res.data.pageDesc);
      setsol1ZeroImage(res.data.sol1ZeroImage);
      setsol1ZeroTitle(res.data.sol1ZeroTitle);
      setsol1ZeroSubtitle(res.data.sol1ZeroSubtitle);
      setsol1ZeroPera(res.data.sol1ZeroPera);

      setsol1FirstImage(res.data.sol1FirstImage);
      setsol1FirstHeading(res.data.sol1FirstHeading);
      setsol1FirstPera(res.data.sol1FirstPera);

      setsol1SecondHeading(res.data.sol1SecondHeading);
      setsol1SecondPera(res.data.sol1SecondPera);

      setsol1ThirdMainHeading(res.data.sol1ThirdMainHeading);
      setsol1Thirdcard1Image(res.data.sol1Thirdcard1Image);
      setsol1Thirdcard1Text(res.data.sol1Thirdcard1Text);
      setsol1Thirdcard2Image(res.data.sol1Thirdcard2Image);
      setsol1Thirdcard2Text(res.data.sol1Thirdcard2Text);
      setsol1Thirdcard3Image(res.data.sol1Thirdcard3Image);
      setsol1Thirdcard3Text(res.data.sol1Thirdcard3Text);
      setsol1Thirdcard4Image(res.data.sol1Thirdcard4Image);
      setsol1Thirdcard4Text(res.data.sol1Thirdcard4Text);

      setsol1FourthImage(res.data.sol1FourthImage);
      setsol1FourthHeading(res.data.sol1FourthHeading);
      setsol1FourthPera(res.data.sol1FourthPera);

      setsol1FifthImage(res.data.sol1FifthImage);
      setsol1FifthHeading(res.data.sol1FifthHeading);
      setsol1FifthPera(res.data.sol1FifthPera);
      setsol1FifthBtnText(res.data.sol1FifthBtnText);
    };
    get();
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pageName", pageName1);
    formData.append("pageDesc", pageDesc1);
    formData.append("sol1ZeroImage", sol1ZeroImage1);
    formData.append("sol1ZeroImageFilename", sol1ZeroImage1.name);
    formData.append("sol1ZeroTitle", sol1ZeroTitle1);
    formData.append("sol1ZeroSubtitle", sol1ZeroSubtitle1);
    formData.append("sol1ZeroPera", convertedContent || sol1ZeroPera1);
    // formData.append("sol1ZeroPera", sol1ZeroPera1);

    formData.append("sol1FirstImage", sol1FirstImage1);
    formData.append("sol1FirstImageFilename", sol1FirstImage1.name);
    formData.append("sol1FirstHeading", sol1FirstHeading1);
    formData.append("sol1FirstPera", convertedContent1 || sol1FirstPera1);
    // formData.append("sol1FirstPera", sol1FirstPera1);

    formData.append("sol1SecondHeading", sol1SecondHeading1);
    formData.append("sol1SecondPera", convertedContent2 || sol1SecondPera1);
    // formData.append("sol1SecondPera", sol1SecondPera1);

    formData.append("sol1ThirdMainHeading", sol1ThirdMainHeading1);
    formData.append("sol1Thirdcard1Image", sol1Thirdcard1Image1);
    formData.append("sol1Thirdcard1ImageFilename", sol1Thirdcard1Image1.name);
    formData.append("sol1Thirdcard1Text", sol1Thirdcard1Text1);
    formData.append("sol1Thirdcard2Image", sol1Thirdcard2Image1);
    formData.append("sol1Thirdcard2ImageFilename", sol1Thirdcard2Image1.name);
    formData.append("sol1Thirdcard2Text", sol1Thirdcard2Text1);
    formData.append("sol1Thirdcard3Image", sol1Thirdcard3Image1);
    formData.append("sol1Thirdcard3ImageFilename", sol1Thirdcard3Image1.name);
    formData.append("sol1Thirdcard3Text", sol1Thirdcard3Text1);
    formData.append("sol1Thirdcard4Image", sol1Thirdcard4Image1);
    formData.append("sol1Thirdcard4ImageFilename", sol1Thirdcard4Image1.name);
    formData.append("sol1Thirdcard4Text", sol1Thirdcard4Text1);

    formData.append("sol1FourthImage", sol1FourthImage1);
    formData.append("sol1FourthImageFilename", sol1FourthImage1.name);
    formData.append("sol1FourthHeading", sol1FourthHeading1);
    formData.append("sol1FourthPera", convertedContent3 || sol1FourthPera1);
    // formData.append("sol1FourthPera", sol1FourthPera1);

    formData.append("sol1FifthImage", sol1FifthImage1);
    formData.append("sol1FifthImageFilename", sol1FifthImage1.name);
    formData.append("sol1FifthHeading", sol1FifthHeading1);
    formData.append("sol1FifthPera", convertedContent4 || sol1FifthPera1);
    // formData.append("sol1FifthPera", sol1FifthPera1);
    formData.append("sol1FifthBtnText", sol1FifthBtnText1);

    formData.append("id", data._id);

    await Axios.put(
      "http://localhost:5000/solution1-update",
      formData
    );
    window.location.reload();
    // navigate("/admin-dashboard");
  };

  return (
    <>
      <form onSubmit={updateData} encType="multipart/form-data">
        <div>
          <div className="integration-hero-sec">
            <div className="empty-div integration-empty-div"></div>
            <div className="container ">
              <div className="row">
                {/* <h3 className="text-center">
                  {update ? (
                    <textarea
                      value={pageName1}
                      onChange={(e) => setpageName(e.target.value)}
                    ></textarea>
                  ) : (
                    pageName1
                  )}
                </h3>
                <h3 className="text-center">
                  {update ? (
                    <textarea
                      value={pageDesc1}
                      onChange={(e) => setpageDesc(e.target.value)}
                    ></textarea>
                  ) : (
                    pageDesc1
                  )}
                </h3> */}
                <div className="col-lg-6 col-md-6 m-auto">
                  <div className="integration-txt-container">
                    <span>
                      {update ? (
                        <textarea
                          value={sol1ZeroSubtitle1}
                          onChange={(e) => setsol1ZeroSubtitle(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1ZeroSubtitle1
                      )}
                    </span>
                    <h2>
                      {update ? (
                        <textarea
                          value={sol1ZeroTitle1}
                          onChange={(e) => setsol1ZeroTitle(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1ZeroTitle1
                      )}
                    </h2>
                    <p className="alternative-manager-first-para">
                      {update ? (
                        // <textarea
                        //   value={sol1ZeroPera1}
                        //   onChange={(e) => setsol1ZeroPera(e.target.value)}
                        // ></textarea>
                        <>
                          <Editor
                            editorState={editorState}
                            onEditorStateChange={handleEditorChange}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                          />
                          {parse(sol1ZeroPera1)}
                        </>
                      ) : (
                        // sol1ZeroPera1
                        parse(sol1ZeroPera1) 
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="integration-img-container">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1ZeroImage"
                        onChange={(e) => setsol1ZeroImage(e.target.files[0])}
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1ZeroImage1}`}
                        className="integration"
                        alt="integration"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bullets-point-sec integration-data-sec">
            <div className="container">
              <div className="row">
                <div className=" col-lg-6 col-md-6 integration-data-col">
                  <div className="bullet-img-sec">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1FirstImage"
                        onChange={(e) => setsol1FirstImage(e.target.files[0])}
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1FirstImage1}`}
                        className="data"
                        alt="data"
                      />
                    )}
                  </div>
                </div>
                <div className=" col-lg-6 col-md-6 m-auto">
                  <div className="integration-data-txt-container">
                    <h3>
                      {update ? (
                        <textarea
                          value={sol1FirstHeading1}
                          onChange={(e) => setsol1FirstHeading(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FirstHeading1
                      )}
                    </h3>
                    <p>
                      {/* {update ? (
                        <textarea
                          value={sol1FirstPera1}
                          onChange={(e) => setsol1FirstPera(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FirstPera1
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
                          {parse(sol1FirstPera1)}
                        </>
                      ) : (
                        parse(sol1FirstPera1)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="unlock-the-value-txt-container">
            <h2>
              {update ? (
                <textarea
                  value={sol1SecondHeading1}
                  onChange={(e) => setsol1SecondHeading(e.target.value)}
                ></textarea>
              ) : (
                sol1SecondHeading1
              )}
            </h2>
            <p>
              {update ? (
                // <textarea
                //   value={sol1SecondPera1}
                //   onChange={(e) => setsol1SecondPera(e.target.value)}
                // ></textarea>
                <>
                  <Editor
                    editorState2={editorState2}
                    onEditorStateChange={handleEditorChange2}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                  />
                  {parse(sol1SecondPera1)}
                </>
              ) : (
                // sol1SecondPera1
                parse(sol1SecondPera1)
              )}
            </p>
          </div>

          <div
            className="get-more-sec"
            // style={{ backgroundImage: `url(${Background})` }}
          >
            <div className="get-more-head">
              <h3>
                {update ? (
                  <textarea
                    value={sol1ThirdMainHeading1}
                    onChange={(e) => setsol1ThirdMainHeading(e.target.value)}
                  ></textarea>
                ) : (
                  sol1ThirdMainHeading1 
                )}
              </h3>
            </div>
            <div className="container">
              <div className="row get-more-row">
                <div className="col-md-3 py-3">
                  <div className="get-more-inner-col product-first-comp py-3">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1Thirdcard1Image"
                        onChange={(e) =>
                          setsol1Thirdcard1Image(e.target.files[0])
                        }
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1Thirdcard1Image1}`}
                        className="connect"
                        alt="connect"
                      />
                    )}
                    <h5>
                      {update ? (
                        <textarea
                          value={sol1Thirdcard1Text1}
                          onChange={(e) =>
                            setsol1Thirdcard1Text(e.target.value)
                          }
                        ></textarea>
                      ) : (
                        sol1Thirdcard1Text1
                      )}
                    </h5>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className="get-more-inner-col product-first-comp py-3">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1Thirdcard2Image"
                        onChange={(e) =>
                          setsol1Thirdcard2Image(e.target.files[0])
                        }
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1Thirdcard2Image1}`}
                        className="connect"
                        alt="connect"
                      />
                    )}

                    <h5>
                      {update ? (
                        <textarea
                          value={sol1Thirdcard2Text1}
                          onChange={(e) =>
                            setsol1Thirdcard2Text(e.target.value)
                          }
                        ></textarea>
                      ) : (
                        sol1Thirdcard2Text1
                      )}
                    </h5>
                  </div>
                </div>
                <div className="col-md-3 py-3">
                  <div className="get-more-inner-col product-first-comp py-3">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1Thirdcard3Image"
                        onChange={(e) =>
                          setsol1Thirdcard3Image(e.target.files[0])
                        }
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1Thirdcard3Image1}`}
                        className="connect"
                        alt="connect"
                      />
                    )}
                    <h5>
                      {update ? ( 
                        <textarea
                          value={sol1Thirdcard3Text1}
                          onChange={(e) =>
                            setsol1Thirdcard3Text(e.target.value)
                          }
                        ></textarea>
                      ) : (
                        sol1Thirdcard3Text1
                      )}
                    </h5>
                  </div>
                </div>
                <div className="col-md-3 py-3">
                  <div className="get-more-inner-col product-first-comp py-3">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1Thirdcard4Image"
                        onChange={(e) =>
                          setsol1Thirdcard4Image(e.target.files[0])
                        }
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1Thirdcard4Image1}`}
                        className="connect"
                        alt="connect"
                      />
                    )}
                    <h5>
                      {update ? (
                        <textarea
                          value={sol1Thirdcard4Text1}
                          onChange={(e) =>
                            setsol1Thirdcard4Text(e.target.value)
                          }
                        ></textarea>
                      ) : (
                        sol1Thirdcard4Text1
                      )}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bullets-point-sec integration-data-sec connect-with-tool-sec">
            <div className="container">
              <div className="row">
                <div className=" col-lg-6 col-md-6 integration-data-col">
                  <div className="bullet-img-sec">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1FourthImage"
                        onChange={(e) => setsol1FourthImage(e.target.files[0])}
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1FourthImage1}`}
                        className="bulletsImg"
                        alt="bulletsImg"
                      />
                    )}
                  </div>
                </div>
                <div className=" col-lg-6 col-md-6 m-auto">
                  <div className="integration-data-txt-container connect-tool">
                    <h3>
                      {update ? (
                        <textarea
                          value={sol1FourthHeading1}
                          onChange={(e) => setsol1FourthHeading(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FourthHeading1
                      )}
                    </h3>
                    {/* {update ? (
                        <textarea
                          value={sol1FourthPera1}
                          onChange={(e) => setsol1FourthPera(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FourthPera1
                      )} */}
                    {update ? (
                      <>
                        <Editor
                          editorState3={editorState3}
                          onEditorStateChange={handleEditorChange3}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName="toolbar-class"
                        />
                        {parse(sol1FourthPera1)}
                      </>
                    ) : (
                      parse(sol1FourthPera1)
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bullets-point-sec integration-data-sec resources-sec mt-5">
            <div className="container">
              <div className="row">
                <div className=" col-lg-6 col-md-6 py-3 m-auto">
                  <div className="integration-data-txt-container connect-tool resources-sec-txt-container">
                    <h3>
                      {update ? (
                        <textarea
                          value={sol1FifthHeading1}
                          onChange={(e) => setsol1FifthHeading(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FifthHeading1
                      )}
                    </h3>
                    <p>
                      {/* {update ? (
                        <textarea
                          value={sol1FifthPera1}
                          onChange={(e) => setsol1FifthPera(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FifthPera1
                      )} */}
                      {update ? (
                        <>
                          <Editor
                            editorState4={editorState4}
                            onEditorStateChange={handleEditorChange4}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                          />
                          {parse(sol1FifthPera1)}
                        </>
                      ) : (
                        parse(sol1FifthPera1)
                      )}
                    </p>
                    <button>
                      {update ? (
                        <textarea
                          value={sol1FifthBtnText1}
                          onChange={(e) => setsol1FifthBtnText(e.target.value)}
                        ></textarea>
                      ) : (
                        sol1FifthBtnText1
                      )}
                    </button>
                  </div>
                </div>
                <div className=" col-lg-6 col-md-6 py-3 m-auto">
                  <div className="bullet-img-sec">
                    {update ? (
                      <input
                        className="form-control"
                        type="file"
                        name="sol1FifthImage"
                        onChange={(e) => setsol1FifthImage(e.target.files[0])}
                      />
                    ) : (
                      <img
                        src={`http://localhost:5000/images/${sol1FifthImage1}`}
                        className="resources"
                        alt="resources"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {update ? (
          <button
            type="submit"
            // onClick={updateData}
            className="why-razor-fix-update-btn"
          >
            Update Page
            <i className="fa-solid fa-repeat "></i>
          </button>
        ) : (
          ""
        )}
        {/* {update ? (
          <button type="button" onClick={addData} className="btn btn-primary">
            ADD
          </button>
        ) : (
          ""
        )} */}
      </form>
      <button
        onClick={() => setupdate(true)}
        className="why-razor-fix-edit-btn"
      >
        Edit Page
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </>
  );
};

export default AdminSolution1Page;
