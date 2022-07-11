import "./scss/Unregister.scss";

const Unregister = () => {


  return (
    <div className="my-unregister">
      <h1>안녕~</h1>
      <p>이용해주셔서 엄청나게 감사합니다.</p>
      <button type="submit" onClick={()=>alert('정말 탈퇴하시겠습니까?')}>더 이상 이용하지 않습니다~</button>
    </div>
  )
}

export default Unregister;