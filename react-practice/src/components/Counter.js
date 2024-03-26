import { useState } from 'react';

export default function Counter2() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
        <p>Count : {count}</p>
        <p>Double : {double}</p>
        <button onClick={()=>{setCount(count+1); setDouble(double+2)}}>+</button>
        <button onClick={()=>{setCount(count-1); setDouble(double-2)}}>-</button>
    </div>
  );
}
