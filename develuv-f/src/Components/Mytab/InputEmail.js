import React from "react";
import './scss/InputEmail.scss';

const InputEmail = (props) => {
  if (props.check === false) {
    return null;
  }
  if (props.check === true) {
    return (
      <div>
        <hr width="680"></hr>
        <p>본인의 이메일을 입력하면 계정이 삭제됩니다.</p>
        <div id="editEmail">
          <h5>{props.email}</h5>
          <input id placeholder="Edit your Email"></input>
        </div>
      </div>
    )
  }
}

export default InputEmail;