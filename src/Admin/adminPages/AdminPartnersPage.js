import React, { useEffect, useState } from 'react';
import Axios from "axios";
import PartnersPage from '../adminComponents/Partners/PartnersPage';

const AdminPartnersPage = () => {

    const [patners, setPartners] = useState([]);

    useEffect(() => {
    Axios.get("http://localhost:5000/partners").then((res) =>
      setPartners(res.data)
    );
    }, []);

  return (
    <>
      {patners.map((value, index) => (
        <PartnersPage  
          key={index}
          heading={value.heading}
          subheading={value.subheading}
          desc={value.desc}
          id={value._id}
        />
      ))}
    </>
  );
}

export default AdminPartnersPage