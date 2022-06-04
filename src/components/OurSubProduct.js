import React, { useEffect, useState } from "react";
import Axios from "axios";

const OurSubProduct = (props) => {
  const { heading, subheading, mainimage } = props;

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/homeproductlist").then((res) =>
      setProductList(res.data)
    );
  }, []);

  return (
    <>
      <div className="our-product">
        <div className="container">
          <div className="case-studies-sec text-center pb-5">
            <div className="our-solution-head ">
              {/* <h3>{subheading}</h3>
              <h2 className="mb-5">{heading}</h2>
              <div className="product-img-conatiner">
                <img
                  src={`http://localhost:5000/images/${mainimage}`}
                  className="product"
                  alt="product"
                />
              </div> */}
              <div className="row">
                {productList.map((value, index) => (
                  <div
                    className="col-xl-2 col-lg-2 col-md-4 col-sm-4"
                    key={index}
                  >
                    <div className="product-page-icon-container">
                      <img
                        src={`http://localhost:5000/images/${value.img}`}
                        className="multi"
                        alt="multi"
                      />
                      <p>{value.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSubProduct;
