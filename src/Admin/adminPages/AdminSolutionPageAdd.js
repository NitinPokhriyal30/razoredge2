import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminSolutionPageAdd = () => {
  const navigate = useNavigate();
  const [pageName, setpageName] = useState("");
  const [pageDesc, setpageDesc] = useState("");
  const [sol2FirstMainSubHeading, setsol2FirstMainSubHeading] = useState("");
  const [sol2FirstMaiHeading, setsol2FirstMaiHeading] = useState("");
  const [sol2FirstMainPera, setsol2FirstMainPera] = useState("");
  const [sol2FirstHeading, setsol2FirstHeading] = useState("");
  const [sol2FirstPera, setsol2FirstPera] = useState("");
  const [sol2SecondHeading, setsol2SecondHeading] = useState("");
  const [sol2SecondPera, setsol2SecondPera] = useState("");
  const [sol2ThirdHeading, setsol2ThirdHeading] = useState("");
  const [sol2ThirdPera, setsol2ThirdPera] = useState("");
  const [sol2FourthHeading, setsol2FourthHeading] = useState("");
  const [sol2FourthBtnTxt, setsol2FourthBtnTxt] = useState("");
  const [sol2FourthPera, setsol2FourthPera] = useState("");

  const [sol1FifthMainHeading, setsol1FifthMainHeading] = useState("");
  const [sol1Fifthcard1Text, setsol1Fifthcard1Text] = useState("");
  const [sol1Fifthcard2Text, setsol1Fifthcard2Text] = useState("");
  const [sol1Fifthcard3Text, setsol1Fifthcard3Text] = useState("");
  const [sol1Fifthcard4Text, setsol1Fifthcard4Text] = useState("");

  const [sol2FirstImage, setsol2FirstImage] = useState("");
  const [sol2ThirdImage, setsol2ThirdImage] = useState("");
  const [sol1Fifthcard1Image, setsol1Fifthcard1Image] = useState("");
  const [sol1Fifthcard2Image, setsol1Fifthcard2Image] = useState("");
  const [sol1Fifthcard3Image, setsol1Fifthcard3Image] = useState("");
  const [sol1Fifthcard4Image, setsol1Fifthcard4Image] = useState("");

  const postdata = (e) => {
    const formData = new FormData();

    formData.append("pageName", pageName);
    formData.append("pageDesc", pageDesc);
    formData.append("sol2FirstMainSubHeading", sol2FirstMainSubHeading);
    formData.append("sol2FirstMaiHeading", sol2FirstMaiHeading);
    formData.append("sol2FirstMainPera", sol2FirstMainPera);
    formData.append("sol2FirstHeading", sol2FirstHeading);
    formData.append("sol2FirstPera", sol2FirstPera);
    formData.append("sol2SecondHeading", sol2SecondHeading);
    formData.append("sol2SecondPera", sol2SecondPera);
    formData.append("sol2ThirdHeading", sol2ThirdHeading);
    formData.append("sol2ThirdPera", sol2ThirdPera);
    formData.append("sol2FourthHeading", sol2FourthHeading);
    formData.append("sol2FourthBtnTxt", sol2FourthBtnTxt);
    formData.append("sol2FourthPera", sol2FourthPera);
    formData.append("sol1FifthMainHeading", sol1FifthMainHeading);
    formData.append("sol1Fifthcard1Text", sol1Fifthcard1Text);
    formData.append("sol1Fifthcard2Text", sol1Fifthcard2Text);
    formData.append("sol1Fifthcard3Text", sol1Fifthcard3Text);
    formData.append("sol1Fifthcard4Text", sol1Fifthcard4Text);
 
    formData.append("sol2FirstImage", sol2FirstImage);
    formData.append("sol2FirstImageFilename", sol2FirstImage.name);
    formData.append("sol2ThirdImage", sol2ThirdImage);
    formData.append("sol2ThirdImageFilename", sol2ThirdImage.name);
     
    formData.append("sol1Fifthcard1Image", sol1Fifthcard1Image);
    formData.append("sol1Fifthcard1ImageFilename", sol1Fifthcard1Image.name);
    formData.append("sol1Fifthcard2Image", sol1Fifthcard2Image);
    formData.append("sol1Fifthcard2ImageFilename", sol1Fifthcard2Image.name);
    formData.append("sol1Fifthcard3Image", sol1Fifthcard3Image);
    formData.append("sol1Fifthcard3ImageFilename", sol1Fifthcard3Image.name);
    formData.append("sol1Fifthcard4Image", sol1Fifthcard4Image);
    formData.append("sol1Fifthcard4ImageFilename", sol1Fifthcard4Image.name);

    Axios.post("http://localhost:5000/solution2-create", formData);
    navigate("/admin-dashboard");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Add New Solution Page</h2>
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

                <div className="section-first">
                  <div className=" row add-new-post-sub-row justify-content-center">
                    {/* <div className="col-md-2 text-end ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Section one Sub Heading
                      </label>
                    </div> */}
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Sub Heading"
                        onChange={(e) =>
                          setsol2FirstMainSubHeading(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className=" row add-new-post-sub-row justify-content-center">
                    {/* <div className="col-md-2 text-end ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Section one Heading
                      </label>
                    </div> */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Heading"
                        onChange={(e) => setsol2FirstMaiHeading(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row add-new-post-sub-row justify-content-center">
                    {/* <div className="col-md-2 text-end ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Section one Peragraph
                      </label>
                    </div> */}
                    <div className="col-md-8">
                      <textarea
                        type="text"
                        className="form-control "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Paragraph"
                        onChange={(e) => setsol2FirstMainPera(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="row pt-5">
                    <div className="col-md-6 m-auto">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-2 text-end">
                          {/* <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Image
                        </label> */}
                        </div>
                        <div className="col-md-8">
                          <input
                            type="file"
                            filename="sol2FirstImage"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Select Image (Featured).."
                            onChange={(e) => {
                              setsol2FirstImage(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 row add-new-post-sub-row">
                        {/* <div className="col-md-2 text-end ">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Section one Heading
                        </label>
                      </div> */}
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Heading"
                            onChange={(e) =>
                              setsol2FirstHeading(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="mb-3 row add-new-post-sub-row">
                        {/* <div className="col-md-2 text-end ">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Section one Peragraph
                        </label>
                      </div> */}
                        <div className="col-md-8">
                          <textarea
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Paragraph"
                            onChange={(e) => setsol2FirstPera(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-two">
                  <div className=" row add-new-post-sub-row justify-content-center">
                    {/* <div className="col-md-2 text-end ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Section one Heading
                      </label>
                    </div> */}
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Section two Heading"
                        onChange={(e) => setsol2SecondHeading(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row add-new-post-sub-row justify-content-center">
                    {/* <div className="col-md-2 text-end ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Section one Peragraph
                      </label>
                    </div> */}
                    <div className="col-md-8">
                      <textarea
                        type="text"
                        className="form-control "
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Section Two Paragraph"
                        onChange={(e) => setsol2SecondPera(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="section-third">
                  <div className="row">
                    <div className="col-md-6 m-auto">
                      <div className="mb-3 row add-new-post-sub-row ">
                        <div className="col-md-2 text-end">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Image
                          </label> */}
                        </div>

                        <div className="col-md-8">
                          <input
                            type="file"
                            filename="sol2ThirdImage"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setsol2ThirdImage(e.target.files[0]);
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 row add-new-post-sub-row justify-content-center">
                        {/* <div className="col-md-2 text-end ">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section one Heading
                          </label>
                        </div> */}
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Section third Heading"
                            onChange={(e) =>
                              setsol2ThirdHeading(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className=" row add-new-post-sub-row justify-content-center">
                        {/* <div className="col-md-2 text-end ">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section one Peragraph
                          </label>
                        </div> */}
                        <div className="col-md-8">
                          <textarea
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Section Third Paragraph"
                            onChange={(e) => setsol2ThirdPera(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-fourth-1">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3 row add-new-post-sub-row">
                        <div className="col-md-2 text-end ">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section one Heading
                          </label> */}
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Fourth Section Heading"
                            onChange={(e) =>
                              setsol2FourthHeading(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div className="mb-3 row add-new-post-sub-row">
                        <div className="col-md-2 text-end ">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section one Heading
                          </label> */}
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Button Text"
                            onChange={(e) =>
                              setsol2FourthBtnTxt(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 row add-new-post-sub-row">
                        <div className="col-md-2 text-end ">
                          {/* <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Section one Peragraph
                          </label> */}
                        </div>
                        <div className="col-md-8">
                          <textarea
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Fourth Section Paragraph"
                            onChange={(e) => setsol2FourthPera(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-fourth">
                  <div className="row">
                    <div className=" row add-new-post-sub-row justify-content-center">
                      {/* <div className="col-md-2 text-end ">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Section one Heading
                      </label>
                    </div> */}
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Section fifth Heading"
                          onChange={(e) =>
                            setsol1FifthMainHeading(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row ">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="sol1Fifthcard1Image"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setsol1Fifthcard1Image(e.target.files[0]);
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
                            placeholder="Section fifth Card Title"
                            onChange={(e) =>
                              setsol1Fifthcard1Text(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      {/* <div className="row add-new-post-sub-row ">
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control txtarea"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Section Fourth Card Description"
                            onChange={(e) =>
                              setsol1Fifthcard2Text(e.target.value)
                            }
                          ></input>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="sol1Fifthcard2Image"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setsol1Fifthcard2Image(e.target.files[0]);
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
                            placeholder="Section fifth Card Title"
                            onChange={(e) =>
                              setsol1Fifthcard2Text(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      {/* <div className=" row add-new-post-sub-row">
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
                      </div> */}
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="sol1Fifthcard3Image"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setsol1Fifthcard3Image(e.target.files[0]);
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
                            placeholder="Section fifth Card Title"
                            onChange={(e) =>
                              setsol1Fifthcard3Text(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      {/* <div className=" row add-new-post-sub-row">
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
                      </div> */}
                    </div>
                    <div className="col-md-3">
                      <div className=" row add-new-post-sub-row">
                        <div className="col-md-9">
                          <input
                            type="file"
                            filename="sol1Fifthcard4Image"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => {
                              setsol1Fifthcard4Image(e.target.files[0]);
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
                            placeholder="Section fifth Card Title"
                            onChange={(e) =>
                              setsol1Fifthcard4Text(e.target.value)
                            }
                          ></input>
                        </div>
                      </div>
                      {/* <div className=" row add-new-post-sub-row">
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
                      </div> */}
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

export default AdminSolutionPageAdd;
