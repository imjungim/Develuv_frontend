import React from "react";
import "./scss/card.scss";

const Card = (props) => {
  return (
    <div id="cardWrap">
      <div className="card_body">
        <div className="halfWrap">{props.img}</div>
        <div className="halfWrap">{props.contents}</div>
      </div>
    </div>
  );
};

export default Card;
