import React from 'react';
import './App.scss';
import Number from "./components/Number/Number";
import Operator from './components/Operator/Operator';

function App() {
  let mappedNumbers = [];
    for(let i = 1; i < 10; i ++) {
      mappedNumbers.push(<Number number={i} />)
    }

  let operatorArr = ["/","*","-","+","="]
  let mappedOperators = operatorArr.map(op => {
    return <Operator operator={op} />;
  });
  return (
    <div className="App">
      <div className="text-display">
        Text
      </div>
      <div className="operation-display">
        <div className="number-display">{mappedNumbers}</div>
  <div className="operator-display">{mappedOperators}</div>

      </div>
    </div>
  );
}

export default App;
