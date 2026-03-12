import React, { useEffect, useState } from "react";
const CounterApp = () => {

  const [num, setNum] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const addIncrease = () => {
    setNum(num + 1);
  };

  const deCrease = () => {
    setNum(num - 1);
  };

  return (
    <div className="app">

      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h1 className="title">Counter Application</h1>

      <div className="main-container">

        <h2 className="live-time">Live Time</h2>

        <h3 className="time-text">
          {time.toLocaleTimeString()}
        </h3>

        <h2 key={num} className="count-text">
          Count : {num}
        </h2>

        <img
          className="cat"
          src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
          alt="cat"
        />

        <div className="btn-group">

          <button
            className="increase"
            onClick={addIncrease}
          >
            Increase
          </button>

          <button
            className="decrease"
            onClick={deCrease}
          >
            Decrease
          </button>

        </div>

      </div>

    </div>
  );
};

export default CounterApp;