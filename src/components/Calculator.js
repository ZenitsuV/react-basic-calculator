import React, { useState } from 'react';

const operators = {
  '+': function (a, b) {
    return a + b;
  },
  '-': function (a, b) {
    return a - b;
  },
  '*': function (a, b) {
    return a * b;
  },
  '÷': function (a, b) {
    return a / b;
  },
  '%': function (a, b) {
    return (a / 100) * b;
  },
};

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('');
  const [previousInput, setPreviousInput] = useState('');
  const [displayInput, setDisplayInput] = useState('');
  const [opeartion, setOperation] = useState('');
  const [output, setOutput] = useState('');

  const handleInput = (e) => {
    const inputValue = e.target.innerHTML;

    if (opeartion) {
      setPreviousInput((prevValue) => (prevValue += inputValue));
    } else {
      setCurrentInput((prevValue) => (prevValue += inputValue));
    }
  };

  const handleOperation = (e) => {
    const operationValue = e.target.innerHTML;
    setOperation(operationValue);
  };

  const handleAllClear = (e) => {
    setCurrentInput('');
    setPreviousInput('');
    setOperation('');
    setDisplayInput('');
    setOutput('');
  };

  const handleDelete = (e) => {
    setCurrentInput('');
  };

  const handleCalculation = (e) => {
    if (currentInput === '' || previousInput === '') return;

    const displayString = `${currentInput} ${opeartion} ${previousInput}`;
    setDisplayInput(displayString);
    const op = operators[opeartion];
    const resultValue = op(Number(currentInput), Number(previousInput));
    setCurrentInput('');
    setPreviousInput('');
    setOperation('');
    if (currentInput.includes('.') || previousInput.includes('.')) {
      setOutput(resultValue.toFixed(2));
    } else {
      setOutput(resultValue.toFixed(1));
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{`${displayInput}`}</div>
        <div className="current-operand">
          {!output && `${currentInput} ${opeartion} ${previousInput}`}
          {output}
        </div>
      </div>
      <button className="span-two" onClick={handleAllClear}>
        AC
      </button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={handleOperation}>÷</button>
      <button onClick={handleInput}>1</button>
      <button onClick={handleInput}>2</button>
      <button onClick={handleInput}>3</button>
      <button onClick={handleOperation}>*</button>
      <button onClick={handleInput}>4</button>
      <button onClick={handleInput}>5</button>
      <button onClick={handleInput}>6</button>
      <button onClick={handleOperation}>+</button>
      <button onClick={handleInput}>7</button>
      <button onClick={handleInput}>8</button>
      <button onClick={handleInput}>9</button>
      <button onClick={handleOperation}>-</button>
      <button onClick={handleInput}>.</button>
      <button onClick={handleInput}>0</button>
      <button onClick={handleOperation}>%</button>
      <button onClick={handleCalculation}>=</button>
    </div>
  );
};

export default Calculator;
