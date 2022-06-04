import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import parse from "html-react-parser";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminSolutionPage = () => {

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

  // ------------------------------------------
  
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

  // ------------------------------------------
  
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

  // ------------------------------------------
  
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

  // ------------------------------------------

  const navigate = useNavigate();
  const { id } = useParams(); 
  const [data, setData] = useState([]);
  const [key, setkey] = useState("");
  const [pageName1, setpageName] = useState("");
  const [pageDesc1, setpageDesc] = useState("");
  const [sol2FirstMainSubHeading1, setsol2FirstMainSubHeading] = useState("");
  const [sol2FirstMaiHeading1, setsol2FirstMaiHeading] = useState("");
  const [sol2FirstMainPera1, setsol2FirstMainPera] = useState("");

  const [sol2FirstImage1, setsol2FirstImage] = useState("");
  const [sol2FirstHeading1, setsol2FirstHeading] = useState("");
  const [sol2FirstPera1, setsol2FirstPera] = useState("");

  const [sol2SecondHeading1, setsol2SecondHeading] = useState("");
  const [sol2SecondPera1, setsol2SecondPera] = useState("");

  const [sol2ThirdImage1, setsol2ThirdImage] = useState("");
  const [sol2ThirdHeading1, setsol2ThirdHeading] = useState("");
  const [sol2ThirdPera1, setsol2ThirdPera] = useState("");

  const [sol2FourthHeading1, setsol2FourthHeading] = useState("");
  const [sol2FourthBtnTxt1, setsol2FourthBtnTxt] = useState("");
  const [sol2FourthPera1, setsol2FourthPera] = useState("");

  const [sol1FifthMainHeading1, setsol1FifthMainHeading] = useState("");
  const [sol1Fifthcard1Text1, setsol1Fifthcard1Text] = useState("");
  const [sol1Fifthcard2Text1, setsol1Fifthcard2Text] = useState("");
  const [sol1Fifthcard3Text1, setsol1Fifthcard3Text] = useState("");
  const [sol1Fifthcard4Text1, setsol1Fifthcard4Text] = useState("");

  const [sol1Fifthcard1Image1, setsol1Fifthcard1Image] = useState("");
  const [sol1Fifthcard2Image1, setsol1Fifthcard2Image] = useState("");
  const [sol1Fifthcard3Image1, setsol1Fifthcard3Image] = useState("");
  const [sol1Fifthcard4Image1, setsol1Fifthcard4Image] = useState("");

  const [update, setupdate] = useState(false);

  useEffect(() => { 
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/solution2-get/" + id);
      setkey(res.data._id);
      setData(res.data);
      setpageName(res.data.pageName);
      setpageDesc(res.data.pageDesc);
      setsol2FirstMainSubHeading(res.data.sol2FirstMainSubHeading);
      setsol2FirstMaiHeading(res.data.sol2FirstMaiHeading);
      setsol2FirstMainPera(res.data.sol2FirstMainPera);
      setsol2FirstHeading(res.data.sol2FirstHeading);
      setsol2FirstPera(res.data.sol2FirstPera);
      setsol2SecondHeading(res.data.sol2SecondHeading);
      setsol2SecondPera(res.data.sol2SecondPera);
      setsol2ThirdHeading(res.data.sol2ThirdHeading);
      setsol2ThirdPera(res.data.sol2ThirdPera);
      setsol2FourthHeading(res.data.sol2FourthHeading);
      setsol2FourthBtnTxt(res.data.sol2FourthBtnTxt);
      setsol2FourthPera(res.data.sol2FourthPera);
      setsol2FirstImage(res.data.sol2FirstImage);
      setsol2ThirdImage(res.data.sol2ThirdImage);

      setsol1FifthMainHeading(res.data.sol1FifthMainHeading);
      setsol1Fifthcard1Text(res.data.sol1Fifthcard1Text);
      setsol1Fifthcard2Text(res.data.sol1Fifthcard2Text);
      setsol1Fifthcard3Text(res.data.sol1Fifthcard3Text);
      setsol1Fifthcard4Text(res.data.sol1Fifthcard4Text);
      
      setsol1Fifthcard1Image(res.data.sol1Fifthcard1Image);
      setsol1Fifthcard2Image(res.data.sol1Fifthcard2Image); 
      setsol1Fifthcard3Image(res.data.sol1Fifthcard3Image);
      setsol1Fifthcard4Image(res.data.sol1Fifthcard4Image);
    };
    get();
  }, [id]); 

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pageName", pageName1);
    formData.append("pageDesc", pageDesc1);
    formData.append("sol2FirstMainSubHeading", sol2FirstMainSubHeading1);
    formData.append("sol2FirstMaiHeading", sol2FirstMaiHeading1);
    formData.append(
      "sol2FirstMainPera",
      convertedContent || sol2FirstMainPera1
    );
    // formData.append("sol2FirstMainPera", sol2FirstMainPera1);
    formData.append("sol2FirstHeading", sol2FirstHeading1);
    formData.append("sol2FirstPera", convertedContent1 || sol2FirstPera1);
    // formData.append("sol2FirstPera", sol2FirstPera1);
    formData.append("sol2SecondHeading", sol2SecondHeading1);
    formData.append("sol2SecondPera", convertedContent2 || sol2SecondPera1);
    formData.append("sol2ThirdHeading", sol2ThirdHeading1);
    formData.append("sol2ThirdPera", convertedContent3 || sol2ThirdPera1);
    formData.append("sol2FourthHeading", sol2FourthHeading1);
    formData.append("sol2FourthBtnTxt", sol2FourthBtnTxt1);
    formData.append("sol2FourthPera", sol2FourthPera1);
    formData.append("sol1FifthMainHeading", sol1FifthMainHeading1);
    formData.append("sol1Fifthcard1Text", sol1Fifthcard1Text1);
    formData.append("sol1Fifthcard2Text", sol1Fifthcard2Text1);
    formData.append("sol1Fifthcard3Text", sol1Fifthcard3Text1);
    formData.append("sol1Fifthcard4Text", sol1Fifthcard4Text1);

    formData.append("sol2FirstImage", sol2FirstImage1);
    formData.append("sol2FirstImageFilename", sol2FirstImage1.name);
    formData.append("sol2ThirdImage", sol2ThirdImage1);
    formData.append("sol2ThirdImageFilename", sol2ThirdImage1.name);
    formData.append("sol1Fifthcard1Image", sol1Fifthcard1Image1);
    formData.append("sol1Fifthcard1ImageFilename", sol1Fifthcard1Image1.name); 
    formData.append("sol1Fifthcard2Image", sol1Fifthcard2Image1);
    formData.append("sol1Fifthcard2ImageFilename", sol1Fifthcard2Image1.name);
    formData.append("sol1Fifthcard3Image", sol1Fifthcard3Image1);
    formData.append("sol1Fifthcard3ImageFilename", sol1Fifthcard3Image1.name);
    formData.append("sol1Fifthcard4Image", sol1Fifthcard4Image1);
    formData.append("sol1Fifthcard4ImageFilename", sol1Fifthcard4Image1.name);

    formData.append("id", data._id);

    await Axios.put("http://localhost:5000/solution2-update", formData);
    window.location.reload();
    // navigate("/admin-dashboard");
  };

  const addData = (e) => {
    navigate("/admin-solution-add");
  };

  const deleteData = () => {
    Axios.delete(`http://localhost:5000/solution2-delete/${key}`);
    navigate("/admin-dashboard");
  };

  return (
    <>
      <form onSubmit={updateData} encType="multipart/form-data">
        <div className="investor-sentiment-sec">
          <div className="container">
            <div className="row">
              <div className="invester-inner-txt-container">
                {/* <h3>
                  {update ? (
                    <textarea
                      value={pageName1}
                      onChange={(e) => setpageName(e.target.value)}
                    ></textarea>
                  ) : (
                    pageName1
                  )}
                </h3>
                <h3>
                  {update ? (
                    <textarea
                      value={pageDesc1}
                      onChange={(e) => setpageDesc(e.target.value)}
                    ></textarea>
                  ) : (
                    pageDesc1
                  )}
                </h3> */}
                <h3>
                  {update ? (
                    <textarea
                      value={sol2FirstMainSubHeading1}
                      onChange={(e) =>
                        setsol2FirstMainSubHeading(e.target.value)
                      }
                    ></textarea>
                  ) : (
                    sol2FirstMainSubHeading1
                  )}
                </h3>
                <h2>
                  {update ? (
                    <textarea
                      value={sol2FirstMaiHeading1}
                      onChange={(e) => setsol2FirstMaiHeading(e.target.value)}
                    ></textarea>
                  ) : (
                    sol2FirstMaiHeading1
                  )}
                </h2>
                {/* <p>
                  {update ? (
                    <textarea
                      value={sol2FirstMainPera1}
                      onChange={(e) => setsol2FirstMainPera(e.target.value)}
                    ></textarea>
                  ) : (
                    sol2FirstMainPera1
                  )}
                </p> */}
                {update ? (
                  <>
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleEditorChange}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                    />
                    {parse(sol2FirstMainPera1)}
                  </>
                ) : (
                  parse(sol2FirstMainPera1)
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bullets-point-sec integration-data-sec solution-investor-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col pb-3">
                <div className="bullet-img-sec">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="sol2FirstImage"
                      onChange={(e) => setsol2FirstImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol2FirstImage1}`}
                      className="whyUs"
                      alt="whyUs"
                    />
                  )}
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 m-auto">
                <div className="integration-data-txt-container">
                  <h3>
                    {update ? (
                      <textarea
                        value={sol2FirstHeading1}
                        onChange={(e) => setsol2FirstHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FirstHeading1
                    )}
                  </h3>
                  {/* {update ? (
                      <textarea
                        value={sol2FirstPera1}
                        onChange={(e) => setsol2FirstPera(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FirstPera1
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
                      {parse(sol2FirstPera1)}
                    </>
                  ) : (
                    parse(sol2FirstPera1)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="unlock-the-value-sec">
          <div className="unlock-the-value-txt-container solution-unlock-the-value">
            <h2>
              {update ? (
                <textarea
                  value={sol2SecondHeading1}
                  onChange={(e) => setsol2SecondHeading(e.target.value)}
                ></textarea>
              ) : (
                sol2SecondHeading1
              )}
            </h2>
            {/* <p>
              {update ? (
                <textarea
                  value={sol2SecondPera1}
                  onChange={(e) => setsol2SecondPera(e.target.value)}
                ></textarea>
              ) : (
                sol2SecondPera1
              )}
            </p> */}
            {update ? (
              <>
                <Editor
                  editorState2={editorState2}
                  onEditorStateChange={handleEditorChange2}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
                {parse(sol2SecondPera1)}
              </>
            ) : (
              parse(sol2SecondPera1)
            )}
          </div>
        </div>
        <div className="bullets-point-sec solution-connect-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-6 integration-data-col">
                <div className="bullet-img-sec">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="sol2ThirdImage"
                      onChange={(e) => setsol2ThirdImage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol2ThirdImage1}`}
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
                        value={sol2ThirdHeading1}
                        onChange={(e) => setsol2ThirdHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2ThirdHeading1
                    )}
                  </h3>
                  {/* <p>
                    {update ? (
                      <textarea
                        value={sol2ThirdPera1}
                        onChange={(e) => setsol2ThirdPera(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2ThirdPera1
                    )}
                  </p> */}
                  {update ? (
                    <>
                      <Editor
                        editorState3={editorState3}
                        onEditorStateChange={handleEditorChange3}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                      />
                      {parse(sol2ThirdPera1)}
                    </>
                  ) : (
                    parse(sol2ThirdPera1)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stay-update-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pb-3">
                <div className="integration-data-txt-container">
                  <h3>
                    {update ? (
                      <textarea
                        value={sol2FourthHeading1}
                        onChange={(e) => setsol2FourthHeading(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FourthHeading1
                    )}
                  </h3>
                  {/* <Link className="footer-register-btn stay-update-btn" to="/"> */}
                  <button type="button" className="btn btn-primary">
                    {update ? (
                      <textarea
                        value={sol2FourthBtnTxt1}
                        onChange={(e) => setsol2FourthBtnTxt(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FourthBtnTxt1
                    )}
                  </button>
                  {/* </Link> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="stay-update-txt">
                  <p>
                    {update ? (
                      <textarea
                        value={sol2FourthPera1}
                        onChange={(e) => setsol2FourthPera(e.target.value)}
                      ></textarea>
                    ) : (
                      sol2FourthPera1
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-three-comp-sec text-center">
          <div className="get-more-head">
            <h3>
              {update ? (
                <textarea
                  value={sol1FifthMainHeading1}
                  onChange={(e) => setsol1FifthMainHeading(e.target.value)}
                ></textarea>
              ) : (
                sol1FifthMainHeading1
              )}
            </h3>
          </div>
          <div className="container">
            <div className="row product-comp-rw">
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="setsol1Fifthcard1Image"
                      onChange={(e) =>
                        setsol1Fifthcard1Image(e.target.files[0])
                      }
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol1Fifthcard1Image1}`}
                      className={sol1Fifthcard1Image1}
                      alt={sol1Fifthcard1Image1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={sol1Fifthcard1Text1}
                        onChange={(e) => setsol1Fifthcard1Text(e.target.value)}
                      ></textarea>
                    ) : (
                      sol1Fifthcard1Text1
                    )}
                  </h5>
                  {/* <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards1desc1}
                        onChange={(e) => setproFourthCards1desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards1desc1
                    )}
                  </p> */}
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="sol1Fifthcard2Image"
                      onChange={(e) =>
                        setsol1Fifthcard2Image(e.target.files[0])
                      }
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol1Fifthcard2Image1}`}
                      className={sol1Fifthcard2Image1}
                      alt={sol1Fifthcard2Image1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={sol1Fifthcard2Text1}
                        onChange={(e) => setsol1Fifthcard2Text(e.target.value)}
                      ></textarea>
                    ) : (
                      sol1Fifthcard2Text1
                    )}
                  </h5>
                  {/* <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards2desc1}
                        onChange={(e) => setproFourthCards2desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards2desc1
                    )}
                  </p> */}
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="sol1Fifthcard3Image"
                      onChange={(e) =>
                        setsol1Fifthcard3Image(e.target.files[0])
                      }
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol1Fifthcard3Image1}`}
                      className={sol1Fifthcard3Image1}
                      alt={sol1Fifthcard3Image1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={sol1Fifthcard3Text1}
                        onChange={(e) => setsol1Fifthcard3Text(e.target.value)}
                      ></textarea>
                    ) : (
                      sol1Fifthcard3Text1
                    )}
                  </h5>
                  {/* <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards3desc1}
                        onChange={(e) => setproFourthCards3desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards3desc1
                    )}
                  </p> */}
                </div>
              </div>
              <div className="col-md-3 py-3">
                <div className="product-first-img">
                  {update ? (
                    <input
                      className="form-control" 
                      type="file"
                      name="sol1Fifthcard4Image"
                      onChange={(e) =>
                        setsol1Fifthcard4Image(e.target.files[0])
                      }
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${sol1Fifthcard4Image1}`}
                      className={sol1Fifthcard4Image1}
                      alt={sol1Fifthcard4Image1}
                    />
                  )}
                </div>
                <div className="product-first-comp">
                  <h5>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={sol1Fifthcard4Text1}
                        onChange={(e) => setsol1Fifthcard4Text(e.target.value)}
                      ></textarea>
                    ) : (
                      sol1Fifthcard4Text1
                    )}
                  </h5>
                  {/* <p>
                    {update ? (
                      <textarea
                        className="form-control"
                        value={proFourthCards4desc1}
                        onChange={(e) => setproFourthCards4desc(e.target.value)}
                      ></textarea>
                    ) : (
                      proFourthCards4desc1
                    )}
                  </p> */}
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
        {update ? (
          <button
            type="button"
            onClick={addData}
            className="admin-add-new-page-btn"
          >
            Add New Page
          </button>
        ) : (
          ""
        )}
        {update ? (
          <button
            type="button"
            onClick={deleteData}
            className="admin-add-new-page-btn my-5"
          >
            Delete Page
          </button>
        ) : (
          ""
        )}
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

export default AdminSolutionPage;
