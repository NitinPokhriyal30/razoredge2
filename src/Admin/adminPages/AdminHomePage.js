import React, { useState } from "react";
import Axios from "axios";
import ReactPlayer from "react-player";
import AdminTestimonial from "../adminComponents/Testimonial/AdminTestimonial";
import HomeBulletSection from "../adminComponents/Home/HomeBulletSection";
import HomeAccordian from "../adminComponents/Home/HomeAccordian";
import HomeProductList from "../adminComponents/Home/HomeProductList";
// import { Link } from "react-router-dom";

import parse from "html-react-parser";
import { EditorState } from "draft-js"; 
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminHomePage = (props) => {
  
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

  // -----------------
  
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

  // -----------------

  // const [solutionPages, setSolutionPages] = useState([]);
  const [heroMainHeading1, setHeroMainHeading] = useState(
    props.heroMainHeading
  );
  const [herofirstbtn1, setHerofirstbtn] = useState(props.herofirstbtn);
  const [herofirstbtnUrl1, setHerofirstbtnUrl] = useState(
    props.herofirstbtnUrl
  );
  const [herosecondbtn1, setHerosecondbtn] = useState(props.herosecondbtn);
  const [herosecondbtnUrl1, setHerosecondbtnUrl] = useState(
    props.herosecondbtnUrl
  );
  const [herovideoimage1, setHerovideoimage] = useState(props.herovideoimage);
  const [herosubheading1, setHerosubheading] = useState(props.herosubheading);
  const [heropera1, setHeropera] = useState(props.heropera);
  const [bulletimage1, setBulletimage] = useState(props.bulletimage);
  const [heading1, setheading] = useState(props.heading);
  const [subheading1, setSubheading] = useState(props.subheading);
  const [solutionimage1, setSolutionimage] = useState(props.solutionimage);
  const [mainheading1, setMainheading] = useState(props.mainheading);
  const [pera1, setPera] = useState(props.pera);
  const [proSecHeading1, setProSecHeading] = useState(props.proSecHeading);
  const [proSecsubheading1, setProSecsubheading] = useState(
    props.proSecsubheading
  );
  const [proSecmainimage1, setProSecmainimage] = useState(
    props.proSecmainimage
  );

  const [update, setupdate] = useState(false);
  const [upload, setUpload] = useState();

  // useEffect(() => {
  //   Axios.get("http://localhost:5000/solution2-get").then((res) =>
  //     setSolutionPages(res.data)
  //   );
  // }, []);

  const updateData = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("heroMainHeading", convertedContent1 || heroMainHeading1);
    // formData.append("heroMainHeading", heroMainHeading1);
    formData.append("herofirstbtn", herofirstbtn1);
    formData.append("herofirstbtnUrl", herofirstbtnUrl1);
    formData.append("herosecondbtn", herosecondbtn1);
    formData.append("herosecondbtnUrl", herosecondbtnUrl1);
    formData.append("herosubheading", herosubheading1);
    formData.append("heropera", convertedContent || heropera1);
    // formData.append("heropera", heropera1);
    formData.append("heading", heading1);
    formData.append("subheading", subheading1);
    formData.append("mainheading", mainheading1);
    formData.append("pera", pera1);
    formData.append("proSecHeading", proSecHeading1);
    formData.append("proSecsubheading", proSecsubheading1);

    formData.append("herovideoimage", herovideoimage1);
    formData.append("herovideoimageFilename", herovideoimage1.name);
    formData.append("bulletimage", bulletimage1);
    formData.append("bulletimageFilename", bulletimage1.name);
    formData.append("solutionimage", solutionimage1);
    formData.append("solutionimageFilename", solutionimage1.name);
    formData.append("proSecmainimage", proSecmainimage1);
    formData.append("proSecmainimageFilename", proSecmainimage1.name);
    formData.append("id", props.id);

    await Axios.put(
      "http://localhost:5000/home-update",
      formData
    );
    window.location.reload();
  };

  const setVideoUpload = (e) => {
    setUpload(true);
  };

  const setUrl = (e) => {
    setUpload(false);
  };

  return (
    <>
      {/* <<<<<<<<<<<<<<<<<<<<<-------------------------------HERO SECTION--------------------------->>>>>>>>>>>>>>>>>>>>>>>>> */}

      <form onSubmit={updateData} encType="multipart/form-data">
        <div className="hero-sec">
          <div className="container">
            <div className="inner-sec">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                  <div className="hero-txt">
                    {update ? (
                      <>
                        {parse(heroMainHeading1)}
                        <Editor
                          editorState1={editorState1}
                          onEditorStateChange={handleEditorChange1}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          toolbarClassName="toolbar-class"
                        />
                      </>
                    ) : (
                      parse(heroMainHeading1)
                    )}

                    <div className="button-group">
                      {update ? (
                        <>
                          <input
                            value={herofirstbtn1}
                            className="mb-2 me-2"
                            onChange={(e) => setHerofirstbtn(e.target.value)}
                          />
                          <input
                            value={herofirstbtnUrl1}
                            onChange={(e) => setHerofirstbtnUrl(e.target.value)}
                          />
                        </>
                      ) : (
                        <a href={herofirstbtnUrl1}>
                          <button className="register mb-2 me-2" type="button">
                            {herofirstbtn1}
                          </button>
                        </a>
                      )}
                      {update ? (
                        <>
                          <input
                            value={herosecondbtn1}
                            className="mb-2 me-2"
                            onChange={(e) => setHerosecondbtn(e.target.value)}
                          />
                          <input
                            value={herosecondbtnUrl1}
                            onChange={(e) =>
                              setHerosecondbtnUrl(e.target.value)
                            }
                          />
                        </>
                      ) : (
                        <a href={herosecondbtnUrl1}>
                          <button className="register" type="button">
                            {herosecondbtn1}
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="video-container">
                    <div className="content">
                      <div className=""></div>
                      {update ? (
                        <>
                          <button
                            type="button"
                            className="admin-video-btn"
                            onClick={setVideoUpload}
                          >
                            Upload
                          </button>
                          <button
                            type="button"
                            className="admin-video-btn"
                            onClick={setUrl}
                          >
                            URL
                          </button>
                        </>
                      ) : (
                        ""
                      )}

                      {upload ? (
                        update ? (
                          <input
                            className="form-control"
                            type="file"
                            name="herovideoimage"
                            onChange={(e) =>
                              setHerovideoimage(e.target.files[0])
                            }
                          />
                        ) : (
                          <div className="player-wrapper">
                            <ReactPlayer
                              playing={true}
                              controls={true}
                              light={`http://localhost:5000/images/video-img.jpg`}
                              url={`http://localhost:5000/images/${herovideoimage1}`}
                            />
                          </div>
                        )
                      ) : update ? (
                        <input
                          className="form-control"
                          placeholder="Enter Video Url"
                          type="text"
                          onChange={(e) => setHerovideoimage(e.target.value)}
                        />
                      ) : (
                        <div className="player-wrapper">
                          <ReactPlayer
                            playing={true}
                            light={`http://localhost:5000/images/video-img.jpg`}
                            url={herovideoimage1}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="investment-decesion">
          <div className="investment-decesion-txt">
            <h4>
              {update ? (
                <input
                  value={herosubheading1}
                  onChange={(e) => setHerosubheading(e.target.value)}
                />
              ) : (
                herosubheading1
              )}
            </h4>
            {/* <p>
              {update ? (
                <input
                  value={heropera1}
                  onChange={(e) => setHeropera(e.target.value)}
                />
              ) : (
                heropera1
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
                {parse(heropera1)}
              </>
            ) : (
              parse(heropera1)
            )}
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<-------------------------------BULLET SECTION--------------------------->>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className="bullets-point-sec">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 m-auto">
                <div className="bullet-img-sec">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="bulletimage"
                      onChange={(e) => setBulletimage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${bulletimage1}`}
                      className="BullrtsImg"
                      alt="BullrtsImg"
                    />
                  )}
                </div>
              </div>
              <div className=" col-lg-6 m-auto">
                <div className="bullet-txt-container">
                  <ul>
                    <HomeBulletSection />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<-------------------------------SOLUTION SECTION--------------------------->>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className="our-solution">
          <div className="container">
            <div className="row">
              <div className="our-solution-head pb-5">
                <h3>
                  {update ? (
                    <input
                      value={subheading1}
                      onChange={(e) => setSubheading(e.target.value)}
                    />
                  ) : (
                    subheading1
                  )}
                </h3>
                <h2>
                  {update ? (
                    <input
                      value={heading1}
                      onChange={(e) => setheading(e.target.value)}
                    />
                  ) : (
                    heading1
                  )}
                </h2>
              </div>
              <div className="our-solution-txt-img-container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="innovation-head">
                      <h2>
                        {update ? (
                          <input
                            value={mainheading1}
                            onChange={(e) => setMainheading(e.target.value)}
                          />
                        ) : (
                          mainheading1
                        )}
                      </h2>
                      <p>
                        {update ? (
                          <input
                            value={pera1}
                            onChange={(e) => setPera(e.target.value)}
                          />
                        ) : (
                          pera1
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 m-auto text-center ">
                    <div className="solution-img-container">
                      {update ? (
                        <input
                          className="form-control"
                          type="file"
                          name="solutionimage"
                          onChange={(e) => setSolutionimage(e.target.files[0])}
                        />
                      ) : (
                        <img
                          src={`http://localhost:5000/images/${solutionimage1}`}
                          className="Solution"
                          alt="Solution"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="accordian-sec adminPanel-accordion-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 accordion-col py-2">
                <div className="accordion" id="accordionExample">
                  <HomeAccordian />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<-------------------------------PRODUCT SECTION--------------------------->>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className="our-product">
          <div className="container">
            <div className="case-studies-sec text-center pb-5">
              <div className="our-solution-head ">
                {/* <h3>
                  {update ? (
                    <input
                      value={proSecsubheading1}
                      onChange={(e) => setProSecsubheading(e.target.value)}
                    />
                  ) : (
                    proSecsubheading1
                  )}
                </h3>
                <h2 className="mb-5">
                  {update ? (
                    <input
                      value={proSecHeading1}
                      onChange={(e) => setProSecHeading(e.target.value)}
                    />
                  ) : (
                    proSecHeading1
                  )}
                </h2>
                <div className="product-img-conatiner">
                  {update ? (
                    <input
                      className="form-control"
                      type="file"
                      name="proSecmainimage"
                      onChange={(e) => setProSecmainimage(e.target.files[0])}
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/images/${proSecmainimage1}`}
                      className="product"
                      alt="product"
                    />
                  )}
                </div> */}
                <div className="row">
                  <HomeProductList />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<-------------------------------Testimonial SECTION--------------------------->>>>>>>>>>>>>>>>>>>>>>>>> */}

        {/* <AdminTestimonial /> */}

        {/* {update ? <button onClick={() => updateData()}>Update</button> : ""}
        <button onClick={() => setupdate(true)}>Edit</button>   */}

        {update ? (
          <button
            type="submit"
            // onClick={updateData}
            className="home-page-update-btn"
          >
            UPDATE
            <i className="fa-solid fa-repeat"></i>
          </button>
        ) : (
          ""
        )}
      </form>
      <button onClick={() => setupdate(true)} className="home-page-edit-btn">
        Home Page
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </>
  );
};;

export default AdminHomePage;
