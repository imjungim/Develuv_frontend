import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoginForm from '../Containers/LoginForm';

const Signup = () => {
  return (
    <LoginForm isSignUpPage={true}/>
  )
}

export default Signup;