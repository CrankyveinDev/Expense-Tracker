import React from "react";
import "./Add_TransactionStyles.css";
import { useState } from "react";

const Add_Transaction = (props) => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState({
    reas: "",
    amount: 0,
  });

  function changeInInput (event){
    const a = event.target.name;
    const b = event.target.val;

    setText((prevValue) => {
      if (a === "input1") {
        return {
          reas: b,
          amount: prevValue.amount,
        };
      } else {
        return {
          reas: prevValue.reas,
          amount: b,
        };
      }
    });
    console.log(text);
  };

  const handleChange = () => {
    var temparr = arr;
    temparr.push(text);
    setArr(temparr);
    setText({
      reas: "",
      amount: 0,
    });
    props.fun(arr);
  };

  return (
    <div className="transac">
      <hr />
      <div className="enter">
        <p className="text">Text</p>
        <input
          type="text"
          name="input1"
          val={text.reas}
          placeholder="Enter the text.."
          onChange={changeInInput()}
        />
        <p className="text">Amount</p>
        <p className="text2">(negative-expense, positive-income)</p>
        <input
          onChange={changeInInput()}
          type="number"
          name="input2"
          val={text.amount}
          placeholder="Enter the amount.."
        />
        <button onClick={handleChange}>Add Transaction</button>
      </div>
    </div>
  );
};

export default Add_Transaction;
