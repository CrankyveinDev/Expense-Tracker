import React,{useState,useEffect} from "react";
import "./IncanseStyles.css";

const Incanse = ({data}) => {
  const [incanse, setIncanse] = useState({
    income:0,
    expense:0,
  });

  useEffect(() => {
    var len=data.length;
    var a=0;
    var b=0;
    if(len>0){
      var num=(data[len-1]?.amount|0);
      if(num>=0)a+=num;
      else b+=num;
      setIncanse((preValue)=>{
        return {
          income:a+preValue.income,
          expense:b+preValue.expense,
        }
      });
    }    
  }, [data]);

  return (
    <div className="incanse-section">
      <div className="income">
        <h4>INCOME</h4>
        <h2 className="plus">{"$"+incanse.income}</h2>
      </div>
      <div className="expense">
        <h4>EXPENSES</h4>
        <h2 className="minus">{"$"+(-1*incanse.expense)}</h2>
      </div>
    </div>
  );
};

export default Incanse;
