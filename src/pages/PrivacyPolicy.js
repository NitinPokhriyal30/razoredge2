import React, { useEffect, useState } from "react";
import Axios from "axios"; 
import parse from "html-react-parser"; 

function PrivacyPolicy() { 

    const [data, setData] = useState([]) 

    useEffect(() => { 
        Axios.get("http://localhost:5000/privacy-policys").then((res) =>
            setData(res.data)
        );
    }, []);

    return (
      <>
        {data.map((value, index) => (
          <div key={index}>
            <div className="disclaimer-head-sec">
              <h2>{value.title}</h2>
            </div>
            <div className="privacy-policy-container">
              <div className="container">
                <div className="privacy-policy-inner-container">
                  <h3>
                    LAST UPDATED {new Date(value.createdAt).toDateString()}
                  </h3>
                  {parse(value.desc)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}

export default PrivacyPolicy;

