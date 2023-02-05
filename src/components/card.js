import React from "react";

const card = (props) => {
  return (
    <div
      className={props.amount >= 0 ? "card money-added" : "card money-deduct"}
    >
      <p className="para">{props.res}</p>
      <p className="amount">
        {props.amount >= 0 ? props.amount : -1 * props.amount}
      </p>
    </div>
  );
};

export default card;
