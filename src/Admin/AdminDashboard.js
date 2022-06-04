import React, { useEffect, useState } from "react";
import Axios from "axios";
import AdminHomePage from "./adminPages/AdminHomePage";

const AdminDashboard = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/home-get").then((res) => 
      setData(res.data)
    );
  }, []);

  return (
    <>
      {Data.map((value, index) => (
        <AdminHomePage
          key={index}
          heroMainHeading={value.heroSection.heroMainHeading}
          herofirstbtn={value.heroSection.herofirstbtn}
          herofirstbtnUrl={value.heroSection.herofirstbtnUrl}
          herosecondbtn={value.heroSection.herosecondbtn}
          herosecondbtnUrl={value.heroSection.herosecondbtnUrl}
          herovideoimage={value.heroSection.herovideoimage}
          herosubheading={value.heroSection.herosubheading}
          heropera={value.heroSection.heropera}
          data={value.bulletSection.data}
          bulletimage={value.bulletSection.bulletimage}
          heading={value.ourSolutions.heading}
          subheading={value.ourSolutions.subheading}
          mainheading={value.ourSolutions.mainheading}
          pera={value.ourSolutions.pera}
          solutionimage={value.ourSolutions.solutionimage}
          proSecHeading={value.OurProducts.heading}
          proSecsubheading={value.OurProducts.subheading}
          proSecmainimage={value.OurProducts.mainimage}
          proSecproductList={value.OurProducts.productList}
          id={value._id}
        />
      ))}
    </>
  );
};

export default AdminDashboard;
