import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Incanse from "./components/Incanse";
import History from "./components/History";
import Transaction from "./components/Add_Transaction";
import { useState } from 'react';


function App() {
  const [Trans, setTrans] = useState([]);

  return (
    <div>
      <Header />
      <Balance />
      <Balance />
      <Incanse/>
      <Transaction fun={setTrans}/>
      <History data={Trans}/>
    </div>
  );
}

export default App;
