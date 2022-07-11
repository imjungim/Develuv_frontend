import "./scss/Attendee.scss";
import AttendeeSearch from "./AttendeeSearch";

const Attendee = () => {
  return (
    <div className="attendee">
      <div>
        <h1>참가자 관리</h1>
      </div>
      <div>
        <AttendeeSearch/>
      </div>
      <table className="attendee-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="checkboxticket" />
            </th>
            <th>티켓번호</th>
            <th>이름</th>
            <th>이메일 주소</th>
            <th>휴대폰 번호</th>
            <th>구매 일자</th>
            <th>티켓 이름</th>
            <th>취소요청</th>
            <th>취소승인</th>
  
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" name="checkboxticket" />
            </td>
            <td>00001</td>
            <td>홍정임</td>
            <td>ㅁㅁㅁ@gmail.com</td>
            <td>010-1111-1111</td>
            <td>2022-07-10</td>
            <td>KOSTA Nodejs</td>
            <td></td>
            <td><button className="attendee-button" type="submit" onClick={()=>alert('취소하시겠습니까?')}>확인</button></td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" name="checkboxticket" />
            </td>
            <td>00001</td>
            <td>홍정임</td>
            <td>ㅁㅁㅁ@gmail.com</td>
            <td>010-1111-1111</td>
            <td>2022-07-10</td>
            <td>KOSTA Nodejs</td>
            <td></td>
            <td><button className="attendee-button" type="submit" onClick={()=>alert('취소하시겠습니까?')}>확인</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attendee;
