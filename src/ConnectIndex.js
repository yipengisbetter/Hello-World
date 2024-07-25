import { connect } from "react-redux";
import { increment, decrement } from "./counter-slice2";

function ConnectIndex({
  count,
  increment,
  decrement
}) {
  return (
    <div className="ConnectIndex">
      <span>{count}</span>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default connect(
  (state, ownProps) => {
    return {
      count: state.counter.value
    }
  },
  (dispatch) => {
    return {
      increment() {
        dispatch(increment())
      },
      decrement() {
        dispatch(decrement())
      }
    }
  }
)(ConnectIndex);
