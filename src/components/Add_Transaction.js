import React from "react";
import "./Add_TransactionStyles.css";
import { useState, useEffect } from "react";

const Add_Transaction = ({ fun }) => {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState({
    reas: "",
    amount: 0,
  });

  function changeInInput(event) {
    const a = event.target.name;
    const b = event.target.value;

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
  }

  const handleChange = () => {
    if (text.reas == null||text.reas==="") {
      alert("Please enter some the reason for the expense\n");
    } else if (text.amount == null||text.amount==="") {
      alert(
        "Please enter some value in amount section\n If the expenses you made is 0 then enter 0\n"
      );
    } else {
      var temparr = arr;
      temparr.push(text);
      setArr([...temparr]);
      setText({
        reas: "",
        amount: 0,
      });
    }
  };

  useEffect(() => {
    fun([...arr]);
  }, [arr, fun]);

  return (
    <div className="transac">
      <hr />
      <div className="enter">
        <p className="text">Text</p>
        <input
          type="text"
          name="input1"
          value={text.reas}
          placeholder="Enter the text.."
          onChange={changeInInput}
        />
        <p className="text">Amount</p>
        <p className="text2">(negative-expense, positive-income)</p>
        <input
          onChange={changeInInput}
          type="number"
          name="input2"
          value={text.amount}
          placeholder="Enter the amount.."
        />
        <button onClick={handleChange}>Add Transaction</button>
      </div>
    </div>
  );
};

export default Add_Transaction;
