import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calc = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid Input');
      return;
    }

    if (op === '+') setResult(a + b);
    if (op === '-') setResult(a - b);
    if (op === '*') setResult(a * b);
    if (op === '/') setResult(b !== 0 ? a / b : 'Error: Div by 0');
  };

  return (
    <div className="calculator-card">
      <h3>Calculator</h3>
      
      <input 
        className="calc-input"
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
        placeholder="Num 1"
      />
      
      <input 
        className="calc-input"
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
        placeholder="Num 2"
      />

      <div className="button-group">
        <button className="calc-btn" onClick={() => calc('+')}>+</button>
        <button className="calc-btn" onClick={() => calc('-')}>-</button>
        <button className="calc-btn" onClick={() => calc('*')}>*</button>
        <button className="calc-btn" onClick={() => calc('/')}>/</button>
      </div>

      <div className="result-display">
        <strong>Result: {result}</strong>
      </div>
    </div>
  );
};

export default Calculator;