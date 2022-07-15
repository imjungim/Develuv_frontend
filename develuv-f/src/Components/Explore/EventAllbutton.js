import "./EventAllbutton.scss";
import {Link} from "react-router-dom";

const EventAllbutton = () => {
  
//   const eventAll = () => {
//     <Link to="/EventAllpage"></Link>
//   }
  return (
    <div className="eventAll">
    <Link to="/EventAllpage">
    <button>이벤트 모두보기</button>
    </Link>
  </div>
  )
}

export default EventAllbutton;