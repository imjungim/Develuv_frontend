import "../Components/scss/Navi.scss";

const Navi = () =>{
  return (
    <div>
      <section className="navimenu">
        <ul className="navi-tabs">
          <li>
            <a href='/'>FAQ</a>
          </li>
          <li>
            <a href='/'>이용가이드</a>
          </li>
          <li>
            <a href='/'>이용약관</a>
          </li>
          <li>
            <a href='/'>개인정보처리방침</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Navi;