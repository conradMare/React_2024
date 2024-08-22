import React, { useEffect, useState } from "react";
import Message from "./components/Message";

function App() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    // setCount(count + 1);
    setCount((c) => c + 1);
  }

  useEffect(function() {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message 
        count={count}
      />
    </div>
  );
}

export default App;