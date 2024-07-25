import { useEffect, useState } from "react";
import { store } from './store';

function StoreIndex() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe(() => setCount(store.getState().value));
  }, []);

  return (
    <div className="StoreIndex">
      <span>{count}</span>
      <button onClick={() => store.dispatch({ type: "counter/incremented" })}>+</button>
      <button onClick={() => store.dispatch({ type: "counter/decremented" })}>-</button>
    </div>
  );
}

export default StoreIndex;
