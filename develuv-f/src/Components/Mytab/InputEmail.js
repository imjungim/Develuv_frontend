import React, { useState } from "react";
import './scss/InputEmail.scss';
import axios from "axios";

const InputEmail = (props) => {

  const [email, setEmail] = useState('');

  const changeEmail = (e) => {
    e.preventDefault();
    setEmail({
      email: e.target.value
    })
  }

  const submitE = (e) => {
    e.preventDefault();
    if(props.email === email.email) {
      axios.post("profile/unpost").then((res) => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  if (props.check === false) {
    return null;
  }
  if (props.check === true) {
    return (
      <div>
        <hr width="680"></hr>
        <p>본인의 이메일을 입력하면 계정이 삭제됩니다.</p>
        <form onSubmit={submitE} id="editEmail">
          <h5>{props.email}</h5>
          <input onChange={changeEmail} placeholder="Edit your Email"></input>
          <button>탈퇴</button>
        </form>
      </div>
    )
  }
}

export default InputEmail;