import React, { useEffect, useState } from "react";
import "./BalanceStyles.css";
const Balance = ({ data }) => {
  const [bal, setBal] = useState(0);
  useEffect(() => {
    var len = data.length;
    var b = 0;
    for (var i = 0; i < len; i++) {
      b += data[i]?.amount|0;
    }
    setBal(b > 0 ? b : 0);
  }, [data]);
  return (
    <div className="Balance-compo">
      <h4 className="your-balance">YOUR BALANCE</h4>
      <h1 className="balance">{"$" + bal}</h1>
    </div>
  );
};

export default Balance;
