import "./EventAllbutton.scss";
import {Link} from "react-router-dom";

const EventAllbutton = () => {
  
  return (
    <div className="eventAll">
    <Link to="/events">
    <button>이벤트 모두보기</button>
    </Link>
  </div>
  )
}

export default EventAllbutton;