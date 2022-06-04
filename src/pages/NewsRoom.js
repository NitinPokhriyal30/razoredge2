import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import NewsroomHeadSection from "../components/NewsRoom/NewsroomHeadSection";
import NewsroomFotterSection from "../components/NewsRoom/NewsroomFotterSection";
import parse from "html-react-parser";

const NewsRoom = () => {
  const [news, setNews] = useState([]);
  const [newsroom, setNewsroom] = useState([]); 

  useEffect(() => {
    Axios.get("http://localhost:5000/news-get").then((res) => 
      setNews(res.data)
    );

    Axios.get("http://localhost:5000/newsroom-get").then((res) =>
      setNewsroom(res.data)
    );
  }, []);

  console.log();

  return (
    <>
      <div className="newsrooom-blog-sec">
        <div className="container">
          {newsroom.map((value, index) => (
            <NewsroomHeadSection
              key={index}
              newsfirstheading={value.newsFirstSection.newsfirstheading}
              newsfirstpera={value.newsFirstSection.newsfirstpera}
              newsfirstsubheading={value.newsFirstSection.newsfirstsubheading}
            />
          ))}
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
                    <div>{parse(value.desc.slice(0, 247))}</div>

                    <Link to={`/newsroom/${value._id}`}>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
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
                    <div>{parse(value.desc.slice(0, 247))}</div>
                    <Link to={`/newsroom/${value._id}`}>
                      Read More
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </div>
                </div>
              ))
              .slice(0, -3)
              .reverse()}
          </div>
        </div>
      </div>
      {newsroom.map((value, index) => (
        <NewsroomFotterSection
          key={index}
          newssecondheading={value.newsSecondSection.newssecondheading}
          newssecondbtntext={value.newsSecondSection.newssecondbtntext}
          newssecondpera={value.newsSecondSection.newssecondpera}
        />
      ))}
    </>
  );
};

export default NewsRoom;
