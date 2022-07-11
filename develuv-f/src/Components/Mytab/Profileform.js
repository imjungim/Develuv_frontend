import "./scss/Profileform.scss";
import { Link } from "react-router-dom";

const Profileform = () => {
  return (
    <div className="profile">
      <section className="profile-info">
        <h1>기본정보</h1>
        <div>
          <div className="profile-email">
            <h4>이메일</h4>
            <p>aaaa@gmail.com</p>
          </div>
          <form name="profile" action="post">
            <div className="profileName">
            <div className="input-name">
              <label>성</label>
              <input name="lastName" type="text" />
            </div>
            <div className="input-name">
              <label>이름</label>
              <input name="firstName" type="text"  />
            </div>
            </div>
            <div className="input-name">
              <label>전화번호</label>
              <input name="phone" type="text"  />
            </div>
            <div className="profile-button">
              <button type="submit">수정하기</button>
            </div>
          </form>
        </div>
      </section>

      <section className="profile-password">
        <h1>비밀번호 변경</h1>
        <div>
          <form>
            <div className="password-text">
              <label>새로운 비밀번호</label>
              <input name="newPassword" type="password" />
            </div>
            <div className="password-text">
              <label>비밀번호 재입력</label>
              <input name="confirmPassword" type="password" />
            </div>
            <div className="profile-button">
              <button type="submit">변경하기</button>
            </div>
          </form>
        </div>
      </section>
      <section className="unregister" >
        <div className="unregister">
          <h2>회원탈퇴</h2>
          <Link to="/unregister">
          <button type="submit">탈퇴요청</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Profileform;
