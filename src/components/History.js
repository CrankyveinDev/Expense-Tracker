import React from 'react';
import "./HistoryStyles.css";
import Card from "./card"

const History = (props) => {
  return (
    <div className="history">
        <h2>History</h2>
        <hr />
        <div className="container">
        {
          props.data.map((value,ind)=>{
                return <Card 
                  key={ind}
                  res={value.reas}
                  amount={value.amount}
                />
            })
        }
        </div>
    </div>
  )
}

export default History;