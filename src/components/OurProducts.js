import React, { useEffect, useState } from "react";
import Axios from "axios";
import OurSubProduct from "./OurSubProduct";

const OurProducts = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
      Axios.get("http://localhost:5000/home-get").then((res) =>
        setProductData(res.data)
      );
    }, []);

    return (
      <>
        {productData.map((value, index) => (
          <OurSubProduct
            key={index}
            heading={value.OurProducts.heading}
            subheading={value.OurProducts.subheading}
            mainimage={value.OurProducts.mainimage}
            productList={value.OurProducts.productList}
          />
        ))}
      </>
    );
};

export default OurProducts;
