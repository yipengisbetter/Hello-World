import { Consumer } from ".";

function Home() {
  return (
    <div className="Home">
      <Consumer>
        {
          ({count, setCount}) => {
            return (
              <>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
              </>
            )
          }
        }
      </Consumer>
    </div>
  );
}

export default Home;
