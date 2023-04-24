import React, { useState } from 'react';

function Calculator() {
  const [value, setValue] = useState('');

  const onClick = (event) => {
    const buttonText = event.target.innerText;
    if (buttonText === 'C') {
      setValue('');
    } else if (buttonText === '=') {
      try {
        const result = eval(value);
        console.log('result!');
        setValue(result.toString());
      } catch (error) {
        alert('Invalid input!');
        setValue('');
      }
    } else {
      setValue(value + buttonText);
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input type="text" value={value} />
        </div>
        <div className="button-grid">
          <button onClick={onClick}>C</button>
          <button onClick={onClick}>/</button>
          <button onClick={onClick}>*</button>
          <button onClick={onClick}>^</button>
          <button onClick={onClick}>7</button>
          <button onClick={onClick}>8</button>
          <button onClick={onClick}>9</button>
          <button onClick={onClick}>-</button>
          <button onClick={onClick}>4</button>
          <button onClick={onClick}>5</button>
          <button onClick={onClick}>6</button>
          <button onClick={onClick}>+</button>
          <button onClick={onClick}>1</button>
          <button onClick={onClick}>2</button>
          <button onClick={onClick}>3</button>
          <button classname="equals-button" onClick={onClick}>=</button>
          <button onClick={onClick}>0</button>
          <button onClick={onClick}>.</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator;