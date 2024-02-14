import React, { useState, useEffect } from 'react';
import './Calculator.css';
import anime from 'animejs/lib/anime.es.js';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  
  useEffect(() => {
    const animation = anime({
      targets: '.calculator',
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 1500,
      easing: 'easeInOutExpo',
      update: (anim) => {
        const calculator = document.querySelector('.calculator');
        const rect = calculator.getBoundingClientRect();
        calculator.style.left = `calc(50% - ${rect.width / 2}px)`;
        calculator.style.top = `calc(50% - ${rect.height / 2}px)`;
      }
    });

    return () => {
      animation.pause();
    };
  }, []);

  const handleClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleAllClear = () => {
    setDisplayValue('');
  };

  const handleDelete = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Hata');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />
      <div className="keypad">
        <button onClick={handleAllClear}>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button className="operator" onClick={() => handleClick('/')}>/</button>
        <button className="operator" onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className="operator" onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button className="operator" onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        
        <button className="equal" onClick={calculateResult}>=</button>

        <button className='zero' onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
