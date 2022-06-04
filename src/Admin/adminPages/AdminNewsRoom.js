import React, { useEffect, useState } from 'react';
import Axios from "axios";
import NewsRoomPage from '../adminComponents/NewsRoom/NewsRoomPage';

const AdminNewsRoom = () => {

    const [newsroom, setNewsroom] = useState([]);

    useEffect(() => {

    Axios.get("http://localhost:5000/newsroom-get").then((res) =>
    setNewsroom(res.data),
    );

    }, []);

  return (
      <>
        {newsroom.map((value,index)=>(
            <NewsRoomPage key={index}
            newsfirstheading = {value.newsFirstSection.newsfirstheading}
            newsfirstpera = {value.newsFirstSection.newsfirstpera}
            newsfirstsubheading = {value.newsFirstSection.newsfirstsubheading}
            newssecondheading = {value.newsSecondSection.newssecondheading}
            newssecondbtntext = {value.newsSecondSection.newssecondbtntext}
            newssecondpera = {value.newsSecondSection.newssecondpera}
            id = {value._id}
            />
        ))}
      </>
  );
};

export default AdminNewsRoom;
