import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({ total: null, next: null, operation: null });
  const handleClick = (e) => {
    setData(calculate(data, e.target.name));
  };

  return (
    <div className="calc-cover">
      <div className="output">
        <div className="prev-operand">0</div>
        <div className="curr-operand">
          {' '}
          { data.next || data.operation || data.total || 0 }
        </div>
      </div>
      <button type="button" onClick={handleClick} name="AC">AC</button>
      <button type="button" onClick={handleClick} name="+/-">+/-</button>
      <button type="button" onClick={handleClick} name="%">%</button>
      <button type="button" className="operator" onClick={handleClick} name="÷">÷</button>
      <button type="button" onClick={handleClick} name="7">7</button>
      <button type="button" onClick={handleClick} name="8">8</button>
      <button type="button" onClick={handleClick} name="9">9</button>
      <button type="button" className="operator" onClick={handleClick} name="x">x</button>
      <button type="button" onClick={handleClick} name="4">4</button>
      <button type="button" onClick={handleClick} name="5">5</button>
      <button type="button" onClick={handleClick} name="6">6</button>
      <button type="button" className="operator" onClick={handleClick} name="-">-</button>
      <button type="button" onClick={handleClick} name="1">1</button>
      <button type="button" onClick={handleClick} name="2">2</button>
      <button type="button" onClick={handleClick} name="3">3</button>
      <button type="button" className="operator" onClick={handleClick} name="+">+</button>
      <button type="button" className="double" onClick={handleClick} name="0">0</button>
      <button type="button" onClick={handleClick} name=".">.</button>
      <button type="button" className="operator" onClick={handleClick} name="=">=</button>
    </div>
  );
};

export default Calculator;
