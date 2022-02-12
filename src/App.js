import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [integer, setInteger] = useState('')
  const [summary, setSummary] = useState(null)
  const [type, setType] = useState('isPrime')

  useEffect(() => {
    if (type === 'isPrime') {
      checkPrime(integer)
    } else {
      checkFibonacci(integer)
    }
  }, [integer, type])

  const number = (value) => {
    var num = Number(value)
    if (value === '') {
      setSummary(null)
    }
    if (type === 'isPrime' && value === '0') {
      setSummary('false')
      setInteger(0)
    }
    else if (type === 'isFibonacci' && value === '0') {
      setSummary('false')
      setInteger(0)
    }
    else if (num < 0) {
      setInteger(1)
    }
    else if (num === 0) {
      setInteger(null)
    }
    else {
      num = Math.round(num)
      setInteger(num)
    }
  }

  const checkPrime = (value) => {
    var number = Number(value);
    let isPrime = true;

    if (value === '' || value === null || number === NaN) {
      setSummary(null)
    }
    else if (number === 1 || number === 0) {
      console.log(number + " is neither prime nor composite number.");
      setSummary('false')
    }
    else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        console.log(`${number} is a prime number`);
        setSummary('true')
      } else {
        console.log(`${number} is a not prime number`);
        setSummary('false')
      }
    }

    else {
      console.log("The number is not a prime number.");
      setSummary('false')
    }
  }



  const checkFibonacci = (value) => {
    console.log('checkFibonacci-value', value);
    console.log('checkFibonacci-num', num);
    console.log('checkFibonacci-integer', integer);
    var Fibonacci = null
    var num = value
    var fib = [0, 1];

    if (integer !== null && integer !== '' && !undefined) {
      for (var i = fib.length; i < num + num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
      }
      Fibonacci = fib.includes(num).toString()
      if (value === null && num === null && integer === null) {
        setSummary(null)
      }
      else if (num === 0) {
        setSummary('false')
      }
      else {
        setSummary(Fibonacci)
        // setSummary('falsevvv')
      }
    }
  }
  console.log(summary, type);

  return (
    <div className="App">
      <div className="row column">
        <div className="column-1">
          <input type="number" value={integer} onChange={(e) => { number(e.target.value) }} />
        </div>
        <div className="column-2">
          <select name="select" id="select" onChange={(e) => { setType(e.target.value) }}>
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="column-3">
          {summary}
        </div>
      </div>
    </div>
  );
}

export default App;
