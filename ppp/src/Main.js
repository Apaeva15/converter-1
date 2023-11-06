import React, { useState } from 'react';
import MainNum from './MainNum';

function Main() {
  const [counter, setCounter] = useState(0);

  function handleCounter(num) {
    setCounter(counter + num);
  }

  return (
    <div>
      <button onClick={() => handleCounter(1)}>+</button>
      <button onClick={() => handleCounter(-1)}>-</button>
      <MainNum num={counter} />
    </div>
  );
}

export default Main;

