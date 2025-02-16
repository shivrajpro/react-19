import { useState } from "react";

const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function onIncrement() {
    setCount((prevCount) => {
      if (prevCount + +step >= 100) return 100;
      return prevCount + +step;
    });
  }

  function onDecrement() {
    setCount((prevCount) => {
      if (prevCount - +step <= 0) return 0;
      return prevCount - +step;
    });
  }

  function onReset() {
    setCount(0);
  }

  return (
    <div>
      <h2> Count: {count} </h2>
      <h2>
        Step:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </h2>
      <div>
        <button onClick={onIncrement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={onDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterChallenge;
