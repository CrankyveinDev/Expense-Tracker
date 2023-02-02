import React from 'react';
import "./HistoryStyles.css";

const History = (props) => {
  return (
    <div className="history">
        <h2>History</h2>
        <hr />
        <div className="container">
          <div className="card money-added">
            <p className="para">cash</p>
            <p className="amount">$250</p>
          </div>
          <div className="card money-deduct">
            <p className="para">Bill</p>
            <p className="amount">$50</p>
          </div>
          <div className="card money-added">
            <p className="para">cash</p>
            <p className="amount">$250</p>
          </div>
          <div className="card money-deduct">
            <p className="para">Bill</p>
            <p className="amount">$50</p>
          </div>
          <div className="card money-added">
            <p className="para">cash</p>
            <p className="amount">$250</p>
          </div>
          <div className="card money-deduct">
            <p className="para">Bill</p>
            <p className="amount">$50</p>
          </div>
          <div className="card money-added">
            <p className="para">cash</p>
            <p className="amount">$250</p>
          </div>
          <div className="card money-deduct">
            <p className="para">Bill</p>
            <p className="amount">$50</p>
          </div>
        </div>
    </div>
  )
}

export default History;