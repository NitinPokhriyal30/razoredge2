import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminFooter from "../Admin/adminPages/AdminFooter";
import AdminHeader from "../Admin/adminPages/AdminHeader";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Backend = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      try {
        const res = await Axios.get(
          "http://localhost:5000/user/data",
          {
            withCredentials: true,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        );
        // const data = res.data;

        if (!res.status === 200) {
          const error = new Error(res.error); 
          throw error;
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    data();
  }, []);

  return (
    <>
      <div>
        <AdminHeader />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <AdminFooter />
      </div>
    </>
  );
};

export default Backend;
