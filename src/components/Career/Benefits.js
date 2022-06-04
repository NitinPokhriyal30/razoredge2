import React, { useEffect, useState } from 'react';
import Axios from "axios";

const Benefits = () => {

    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/benefits").then((res) =>
        setBenefits(res.data)
        );
    }, []);

    return (
        <>
        {benefits.map((value, index)=>(
            <div className="col-xl-3 col-lg-3 col-md-3 pb-5" key={index}>
            <div className="banefit-inner-component">
                <img
                src={`http://localhost:5000/images/${value.img}`}
                className="Growth" 
                alt="Growth" />
                <h4>{value.title}</h4>
                <p>
                    {value.desc}
                </p>
            </div>
        </div>
        ))}
        </>
    )
}

export default Benefits