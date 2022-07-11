import React from 'react';
import LoginForm from '../Containers/LoginForm';
import Footer from '../Components/Footer';

const Login = () => {
  return (
    <div>
      <LoginForm isLoginPage={true}/>
    </div>
  )
}

export default Login;