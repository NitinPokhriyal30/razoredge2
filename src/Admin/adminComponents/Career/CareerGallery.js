import React, { useEffect, useState } from "react";
import Axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";

const CareerGallery = () => {
  const [careerGallery, setCareerGallery] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/career-gallery").then((res) =>
      setCareerGallery(res.data)
    );
  }, []);

  return (
    <ImageList
      // sx={{ width: 1310, height: 450 }}
      cols={3}
    >
      {careerGallery.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`http://localhost:5000/images/${item.img}?w=164&h=164&fit=crop&auto=format`}
            // srcSet={`http://localhost:5000/images/${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.img}
            loading="lazy"
          />
          <Link to={`/admin-career/${item._id}`} className="client-admin-btn">
            Edit
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CareerGallery;
