import React from 'react';
import { Navigate, Outlet} from "react-router-dom";
// import Signin from './pages/Signin';

const PrivateRoute = ({admin}) => {

  return (admin ? <Outlet /> : <Navigate to="/" />);
};

export default PrivateRoute
