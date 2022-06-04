import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const NewsRoomPage = (props) => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [newsfirstheading1, setNewsfirstheading] = useState(
    props.newsfirstheading
  );
  const [newsfirstsubheading1, setNewsfirstsubheading] = useState(
    props.newsfirstsubheading
  );
  const [newsfirstpera1, setNewsfirstpera] = useState(props.newsfirstpera);
  const [newssecondheading1, setNewssecondheading] = useState(
    props.newssecondheading
  );
  const [newssecondbtntext1, setNewssecondbtntext] = useState(
    props.newssecondbtntext
  );
  const [newssecondpera1, setNewssecondpera] = useState(props.newssecondpera);

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/news-get").then((res) =>
      setNews(res.data)
    );
  }, []);

  const updateData = () => {
    const data = {
      newsfirstheading: newsfirstheading1,
      newsfirstsubheading: newsfirstsubheading1,
      newsfirstpera: newsfirstpera1,
      newssecondheading: newssecondheading1,
      newssecondbtntext: newssecondbtntext1,
      newssecondpera: newssecondpera1,
      _id: props.id,
    };
    Axios.post("http://localhost:5000/newsroom-update", data).then((res) =>
      window.location.reload()
    );
  };

  const BlogsBtn = (e) =>{
    navigate("/admin-blogs");
  }

  return (
    <>
      <div className="newsrooom-blog-sec">
        <div className="container">
          <div className="our-solution-head pb-5 admin-case-txtarea">
            {updateMode ? (
              <textarea
                value={newsfirstsubheading1}
                onChange={(e) => setNewsfirstsubheading(e.target.value)}
              ></textarea>
            ) : (
              <h3>{props.newsfirstsubheading}</h3>
            )}
            {updateMode ? (
              <textarea
                value={newsfirstheading1}
                onChange={(e) => setNewsfirstheading(e.target.value)}
              ></textarea>
            ) : (
              <h2>{props.newsfirstheading}</h2>
            )}
            {updateMode ? (
              <textarea
                value={newsfirstpera1}
                onChange={(e) => setNewsfirstpera(e.target.value)}
              ></textarea>
            ) : (
              <p>{props.newsfirstpera}</p>
            )}
          </div>

          <div className="row newsroom-blog-rw">
            {news
              .map((value, index) => (
                <div className="col newsroom-blog-cl" key={index}>
                  <div className="newsroom-blog-col">
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="blog1"
                      alt="blog1"
                    />
                    <span>LATEST POST</span>
                    <h3>{value.title.slice(0, 40)}</h3>
                    <span>{new Date(value.createdAt).toDateString()}</span>
                    <p>{parse(value.desc.slice(0, 247))}</p>

                    <Link
                      to={`/admin-news/${value._id}`}
                      className="case-admin-edit-btn"
                    >
                      Edit
                      <i className="fa-solid fa-pen-to-square ps-2"></i>
                    </Link>
                  </div>
                </div>
              ))
              .reverse()
              .slice(0, 3)}
          </div>
        </div>
      </div>

      <div className="all-post-sec">
        <div className="container">
          <div className="our-solution-head pb-5">
            <h2>All Posts</h2>
          </div>
          <div className="row all-post-rw">
            {news
              .map((value, index) => (
                <div
                  className="col-xl-3 col-lg-3 col-md-3 mb-5 pb-5"
                  key={index}
                >
                  <div className="all-post-inner-cl">
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="allBlog1"
                      alt="allBlog1"
                    />
                    <h3>{value.title.slice(0, 40)}</h3>
                    <span>{new Date(value.createdAt).toDateString()}</span>
                    <p>{value.desc.slice(0, 247)}</p>
                    <Link
                      to={`/admin-news/${value._id}`}
                      className="case-admin-edit-btn"
                    >
                      Edit
                      <i className="fa-solid fa-pen-to-square ps-2"></i>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, -3)
              .reverse()}
          </div>
        </div>
      </div>

      <div className="newsroom-stay-update-sec">
        <div className="container">
          <div className="row ">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head admin-case-study-sec mb-5">
                {updateMode ? (
                  <textarea
                    value={newssecondheading1}
                    onChange={(e) => setNewssecondheading(e.target.value)}
                  ></textarea>
                ) : (
                  <h2>{props.newssecondheading}</h2>
                )}

                {updateMode ? (
                  <textarea
                    value={newssecondbtntext1}
                    onChange={(e) => setNewssecondbtntext(e.target.value)}
                  ></textarea>
                ) : (
                    <button onClick={() => BlogsBtn()}>
                    {props.newssecondbtntext}
                  </button>
                )}
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col">
                {updateMode ? (
                  <textarea
                    className="admin-stay-txtarea"
                    value={newssecondpera1}
                    onChange={(e) => setNewssecondpera(e.target.value)}
                  ></textarea>
                ) : (
                  <p>{props.newssecondpera}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Link to="/admin-news-add" className="admin-add-new-caseStudies-btn">
          Add New News
        </Link>
        {updateMode ? (
          <button
            onClick={() => updateData()}
            className="why-razor-fix-update-btn"
          >
            Update Page
            <i className="fa-solid fa-repeat "></i>
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => setUpdateMode(true)}
          className="why-razor-fix-edit-btn"
        >
          Edit Page
          <i className="fa-solid fa-pen-to-square "></i>
        </button>
      </div>
    </>
  );
};

export default NewsRoomPage;
