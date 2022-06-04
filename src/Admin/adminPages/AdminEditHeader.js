import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; 

const AdminEditHeader = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [home, sethome] = useState(""); 
  const [whyrazoredge, setwhyrazoredge] = useState("");
  const [platform, setplatform] = useState("");
  const [solution, setsolution] = useState("");
  const [clients, setclients] = useState("");
  const [career, setcareer] = useState("");
  const [register, setregister] = useState("");
  const [registerUrl, setregisterUrl] = useState("");
  const [signin, setsignin] = useState("");
  const [signinUrl, setsigninUrl] = useState("");

  useEffect(() => {
    const get = async () => {
      const res = await Axios.get("http://localhost:5000/header/" + id); 
      setImg(res.data.logo);
      sethome(res.data.home);
      setwhyrazoredge(res.data.whyrazoredge);
      setplatform(res.data.platform);
      setsolution(res.data.solution);
      setclients(res.data.clients);
      setcareer(res.data.career);
      setregister(res.data.register);
      setregisterUrl(res.data.registerUrl);
      setsignin(res.data.signin);
      setsigninUrl(res.data.signinUrl);
    };
    get();
  }, [id]);

  const updateData = async () => {
    const formData = new FormData();

    formData.append("home", home);
    formData.append("whyrazoredge", whyrazoredge);
    formData.append("platform", platform);
    formData.append("solution", solution);
    formData.append("clients", clients);
    formData.append("career", career);
    formData.append("register", register);
    formData.append("registerUrl", registerUrl);
    formData.append("signin", signin); 
    formData.append("signinUrl", signinUrl);
    formData.append("id", id);
    formData.append("img", img);
    formData.append("imgFilename", img.name);
 
    Axios.put(`http://localhost:5000/header`, formData); 
    navigate("/admin-dashboard");
    window.location.reload();
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Update Header</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form onSubmit={updateData} encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Logo Image
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      filename="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e)=>{setImg(e.target.files[0]);}}
                    />
                  </div>
                </div>

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
                      value={home}
                      onChange={(e) => sethome(e.target.value)}
                    />
                  </div>
                </div>

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
                      value={whyrazoredge}
                      onChange={(e) => setwhyrazoredge(e.target.value)}
                    />
                  </div>
                </div>

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
                      value={platform}
                      onChange={(e) => setplatform(e.target.value)}
                    />
                  </div>
                </div>
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
                      value={solution}
                      onChange={(e) => setsolution(e.target.value)}
                    />
                  </div>
                </div>
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
                      placeholder="Give Name to your Page2"
                      value={clients}
                      onChange={(e) => setclients(e.target.value)}
                    />
                  </div>
                </div>
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
                      value={career}
                      onChange={(e) => setcareer(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      1 Button Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={register}
                      onChange={(e) => setregister(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      1 Button URL
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={registerUrl}
                      onChange={(e) => setregisterUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      2 Button Name
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={signin}
                      onChange={(e) => setsignin(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      2 Button URL
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={signinUrl}
                      onChange={(e) => setsigninUrl(e.target.value)}
                    />
                    <div className="login-submit-btn">
                      <button type="submit" className="btn btn-primary">
                        UPDATE
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditHeader;
