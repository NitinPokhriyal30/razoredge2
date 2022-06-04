import React, { useState } from "react";
import GetCard from "../components/CardsGet";
import Axios from "axios";
import { useEffect } from "react";

const About = () => {
  const [data, setdat] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/get").then((res) => setdat(res.data));
    console.log("working");
  }, []);

  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row py-5">
          {data.map((value) => (
            <GetCard
              key={value._id}
              name={value.name}
              age={value.age}
              city={value.city}
              country={value.country}
              id={value._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
