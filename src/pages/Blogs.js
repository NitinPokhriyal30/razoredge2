import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import BlogPageHeadSection from "../components/BlogPage/BlogPageHeadSection";
import BlogPageFotterSection from "../components/BlogPage/BlogPageFotterSection";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [blogpage, setBlogpage] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/blogPage-get").then((res) =>  
      setBlogpage(res.data)
    );

    Axios.get("http://localhost:5000/blogs-get").then((res) =>
      setBlog(res.data)
    );
  }, []);

  return (
    <>
      <div className="blog-sec">
        <div className="container">
          {blogpage.map((value, index) => (
            <BlogPageHeadSection
              key={index}
              blogfirstheading={value.blogFirstSection.blogfirstheading}
              blogfirstpera={value.blogFirstSection.blogfirstpera}
              blogfirstsubheading={value.blogFirstSection.blogfirstsubheading}
            />
          ))}
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
                      className="blogImage"
                      alt="blogImage"
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
                        <div>{parse(value.desc.slice(0, 247))}</div>
                        <Link to={`/blogs/${value._id}`}>
                          Read More
                          <i
                            className="fa fa-long-arrow-right"
                            aria-hidden="true"
                          ></i>
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
                      className="blogimg"
                      alt="blogimg"
                    />
                    <h3>{value.title.slice(0, 40)}</h3>
                    <span>{new Date(value.createdAt).toDateString()}</span>
                    <div>{parse(value.desc.slice(0, 247))}</div>
                    <Link to={`/blogs/${value._id}`}>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, -1)
              .reverse()}
          </div>
        </div>
      </div>

      {blogpage.map((value, index) => (
        <BlogPageFotterSection
          key={index}
          blogsecondheading={value.blogSecondSection.blogsecondheading}
          blogsecondbtntext={value.blogSecondSection.blogsecondbtntext}
          blogsecondpera={value.blogSecondSection.blogsecondpera}
        />
      ))}
    </>
  );
};

export default Blogs;
