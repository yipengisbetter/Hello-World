import { useEffect, useState } from "react";
import { decremented, incremented, store } from './redux-toolkit';

function ReduxToolkitIndex() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    store.subscribe(() => setCount(store.getState().value));
  }, []);

  return (
    <div className="ReduxToolkitIndex">
      <span>{count}</span>
      <button onClick={() => store.dispatch(incremented())}>+</button>
      <button onClick={() => store.dispatch(decremented())}>-</button>
    </div>
  );
}

export default ReduxToolkitIndex;
