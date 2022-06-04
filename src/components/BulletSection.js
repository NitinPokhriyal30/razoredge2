import React, { useEffect, useState } from "react";
import Axios from "axios";
import BulletSubSection from "./BulletSubSection";

const BulletSection = () => {
  const [bulletData, setBulletData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/home-get").then((res) =>
      setBulletData(res.data),
    );
  }, []); 

  return (
    <>
      {bulletData.map((value, index) => (
        <BulletSubSection
          key={index}
          // data={value.bulletSection.data}
          image={value.bulletSection.bulletimage}
        />
      ))}
    </>
  );
};

export default BulletSection;
