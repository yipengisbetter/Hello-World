import { observer } from "mobx-react-lite";

const MobxIndex = observer(function ({ timer }) {
  return (
    <div className="MobxIndex">
      <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>
    </div>
  );
});

export default MobxIndex;
