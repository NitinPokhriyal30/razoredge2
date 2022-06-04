import React, { useEffect, useState } from "react";
import Axios from "axios";
import BlogPage from "../adminComponents/Blog/BlogPage";

const AdminBlogsPage = () => {
  const [blogpage, setBlogpage] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/blogPage-get").then((res) => 
      setBlogpage(res.data)
    );
  }, []);

  return (
    <>

      {blogpage.map((value, index) => (
        <BlogPage
          key={index}
          blogfirstheading={value.blogFirstSection.blogfirstheading}
          blogfirstpera={value.blogFirstSection.blogfirstpera}
          blogfirstsubheading={value.blogFirstSection.blogfirstsubheading}
          blogsecondheading={value.blogSecondSection.blogsecondheading}
          blogsecondbtntext={value.blogSecondSection.blogsecondbtntext}
          blogsecondpera={value.blogSecondSection.blogsecondpera}
          id={value._id}
        />
      ))}
    </>
  );
};

export default AdminBlogsPage;
