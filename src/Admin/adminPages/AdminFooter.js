import React, { useEffect, useState } from "react";
import Footer from "../adminComponents/Footer/Footer";
import Axios from "axios";

const AdminFooter = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/footer").then((res) =>
      setFooter(res.data)
    );
  }, []);

  return (
    <>
      {footer.map((value, index) => (
        <Footer
          key={index}
          companyDesc={value.companyDesc}
          btnText={value.btnText}
          page1={value.page1}
          page2={value.page2}
          page3={value.page3}
          page4={value.page4}
          page4Url={value.page4Url} 
          page5={value.page5}
          page6={value.page6}
          page7={value.page7}
          page8={value.page8}
          heading1={value.heading1}
          heading2={value.heading2}
          heading3={value.heading3}
          heading4={value.heading4}
          heading5={value.heading5}
          address1title={value.address1title}
          address1desc={value.address1desc}
          address2title={value.address2title}
          address2desc={value.address2desc}
          email={value.email}
          time={value.time}
          copyright={value.copyright}
          facebookURL={value.facebookURL}
          youtubeURL={value.youtubeURL}
          linkedinURL={value.linkedinURL}
          twitterURL={value.twitterURL}
          img={value.img}
          id={value._id}
        />
      ))}
    </>
  );
};

export default AdminFooter;
