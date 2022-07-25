import React, { useState } from "react";
import LoginForm from "../Containers/LoginForm";
import Footer from "../Components/Footer";

const Login = ({getData}) => {


  return (
    <div>
      <LoginForm isLoginPage={true} getData={getData}/>
    </div>
  );
};

export default Login;
