import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const PartnersPage = (props) => {
  const [heading1, setHeading] = useState(props.heading);
  const [subheading1, setSubheading] = useState(props.subheading);
  const [desc1, setDesc] = useState(props.desc);
  const [partnersService, setPatnersSerevice] = useState([]);

  const [update, setupdate] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/partner-service").then((res) => {
      setPatnersSerevice(res.data);
    });
  }, []);

  const updateData = async (e) => {
    const data = {
      heading: heading1,
      subheading: subheading1,
      desc: desc1,
      _id: props.id,
    };
    // console.log(data);

    Axios.put("http://localhost:5000/partners", data).then((res) =>
      window.location.reload()
    );
  };

  return (
    <>
      <div>
        <div className="our-client-sec">
          <div className="container">
            <div className="our-client-txt-container">
              {update ? (
                <textarea
                  className="form-control"
                  value={subheading1}
                  onChange={(e) => setSubheading(e.target.value)}
                ></textarea>
              ) : (
                <h3>{props.subheading}</h3>
              )}

              {update ? (
                <textarea
                  className="form-control"
                  value={heading1}
                  onChange={(e) => setHeading(e.target.value)}
                ></textarea>
              ) : (
                <h2>{props.heading}</h2>
              )}
            </div>
          </div>
        </div>

        <div className="client-text-component">
          <div className="container">
            <div className="row client-text-component-rw">
              <div className="col-xl-10">
                <div className="client-inner-txt-container">
                  {update ? (
                    <textarea
                      className="form-control"
                      value={desc1}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  ) : (
                    <p>{props.desc}</p>
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
          onClick={updateData}
          className="why-razor-fix-update-btn"
        >
          Update Page
          <i className="fa-solid fa-repeat"></i>
        </button>
      ) : (
        ""
      )}
      <button
        onClick={() => setupdate(true)}
        className="why-razor-fix-edit-btn"
      >
        Edit Page
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <div className="partners-components-sec">
        <div className="container">
          <div className="row partners-component-rw">
            {partnersService.map((value, index) => (
              <div className="col-xl-3 col-lg-4 col-md-4" key={index}>
                <div className="partners-inner-components">
                  <img
                    src={`http://localhost:5000/images/${value.img}`}
                    className="data"
                    alt="data"
                  />
                  <h3 id="partner-head">{value.title}</h3>
                  <p>{value.desc}</p>
                  <Link
                    to={`/admin-partners/${value._id}`}
                    className="admin-partners-btn"
                  >
                    Edit
                    <i className="fa-solid fa-pen-to-square ps-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
