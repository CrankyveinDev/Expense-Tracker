import React from "react";
import "./IncanseStyles.css";

const Incanse = () => {
  return (
    <div className="incanse-section">
      <div className="income">
        <h4>INCOME</h4>
        <h2 className="plus">$500</h2>
      </div>
      <div className="expense">
        <h4>EXPENSES</h4>
        <h2 className="minus">$400</h2>
      </div>
    </div>
  );
};

export default Incanse;
