import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const BlogPage = (props) => {
  const navigate = useNavigate(); 
  const [blog, setBlog] = useState([]);
  const [blogfirstheading1, setblogfirstheading] = useState(
    props.blogfirstheading
  );
  const [blogfirstsubheading1, setblogfirstsubheading] = useState(
    props.blogfirstsubheading
  );
  const [blogfirstpera1, setblogfirstpera] = useState(props.blogfirstpera);
  const [blogsecondheading1, setblogsecondheading] = useState(
    props.blogsecondheading
  );
  const [blogsecondbtntext1, setblogsecondbtntext] = useState(
    props.blogsecondbtntext
  );
  const [blogsecondpera1, setblogsecondpera] = useState(props.blogsecondpera);

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/blogs-get").then((res) =>
      setBlog(res.data)
    );
  }, []);

  const updateData = () => {
    const data = {
      blogfirstheading: blogfirstheading1,
      blogfirstsubheading: blogfirstsubheading1,
      blogfirstpera: blogfirstpera1,
      blogsecondheading: blogsecondheading1,
      blogsecondbtntext: blogsecondbtntext1,
      blogsecondpera: blogsecondpera1,
      _id: props.id,
    };
    Axios.post("http://localhost:5000/blogPage-update", data).then((res) =>
      window.location.reload()
    );
  };

  const caseStudiesBtn = (e) => {
    navigate("/admin-case-studies");
  };

  return (
    <>
      <div className="blog-sec">
        <div className="container">
          <div className="our-solution-head blog-sec-heading pb-5 blog-heading-editable">
            {updateMode ? (
              <textarea
                value={blogfirstsubheading1}
                onChange={(e) => setblogfirstsubheading(e.target.value)}
              ></textarea>
            ) : (
              <h3>{props.blogfirstsubheading}</h3>
            )}
            {updateMode ? (
              <textarea
                value={blogfirstheading1}
                onChange={(e) => setblogfirstheading(e.target.value)}
              ></textarea>
            ) : (
              <h2>{props.blogfirstheading}</h2>
            )}
            {updateMode ? (
              <textarea
                value={blogfirstpera1}
                onChange={(e) => setblogfirstpera(e.target.value)}
              ></textarea>
            ) : (
              <p>{props.blogfirstpera}</p>
            )}
          </div>
        </div>
      </div>

      <div className="latest-post-sec">
        <div className="container">
          {blog
            .map((value, index) => (
              <div className="row latest-post-rw" key={index}>
                <div className="col-xl-4 col-lg-4 col-md-4 latest-post-img-col ">
                  <div className="latest-post-img-container">
                    <img
                      src={`http://localhost:5000/images/${value.img}`}
                      className="blog-image"
                      alt="blog"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 latest-post-sec-col">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-6">
                      <div className="latest-post-sub-col">
                        <span>LATEST POST</span>
                        <h3>{value.title.slice(0, 40)}</h3>
                        <span>{new Date(value.createdAt).toDateString()}</span>
                        <p>{parse(value.desc.slice(0, 247))}</p>
                        <Link
                          to={`/admin-blogs/${value._id}`}
                          className="latest-post-edit-btn"
                        >
                          Edit
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </div>
            ))
            .reverse()
            .slice(0, 1)}
        </div>
      </div>

      <div className="all-post-sec">
        <div className="container">
          <div className="our-solution-head pb-5">
            <h2>All Posts</h2>
          </div>
          <div className="row all-post-rw">
            {blog
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
                    <p>{parse(value.desc.slice(0, 247))}</p>
                    <Link
                      to={`/admin-blogs/${value._id}`}
                      className="admin-blog-edit-btn"
                    >
                      Edit
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, -1)
              .reverse()}
          </div>
        </div>
      </div>

      <div className="newsroom-stay-update-sec">
        <div className="container">
          <div className="row gx-5 ">
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col our-solution-head stay-update-admin-sec">
                {updateMode ? (
                  <textarea
                    className="mb-4"
                    value={blogsecondheading1}
                    onChange={(e) => setblogsecondheading(e.target.value)}
                  ></textarea>
                ) : (
                  <h2>{props.blogsecondheading}</h2>
                )}

                {updateMode ? (
                  <textarea
                    value={blogsecondbtntext1}
                    onChange={(e) => setblogsecondbtntext(e.target.value)}
                  ></textarea>
                ) : (
                  <button onClick={() => caseStudiesBtn()}>
                    {props.blogsecondbtntext}
                  </button>
                )}
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              <div className="stay-update-col stay-update-textarea">
                {updateMode ? (
                  <textarea
                    value={blogsecondpera1}
                    onChange={(e) => setblogsecondpera(e.target.value)}
                  ></textarea>
                ) : (
                  <p>{props.blogsecondpera}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {updateMode ? (
          <button
            onClick={() => updateData()}
            className="why-razor-fix-update-btn"
          >
            Update Page
            <i className="fa-solid fa-repeat"></i>
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => setUpdateMode(true)}
          className="why-razor-fix-edit-btn"
        >
          Edit Page
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </>
  );
};

export default BlogPage;
