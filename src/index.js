import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StoreIndex from "./StoreIndex";
import ReduxToolkitIndex from "./ReduxToolkitIndex";
import ReactReduxIndex from "./ReactReduxIndex";
import ConnectIndex from "./ConnectIndex";
import MobxIndex from "./MobxIndex";
import { Provider as ReactReduxProvider } from "react-redux";
import { store } from "./store";
import { store as reactReduxStore } from "./counter-slice";
import { store as reactReduxStore2 } from "./counter-slice2";
import { myTimer } from './mobx';

function wrapHome(p) {
  return process.env.NODE_ENV !== "development" ? `/hello-world${p}` : p;
}

const router = createBrowserRouter([
  {
    path: wrapHome("/"),
    element: <Home />
  },
  {
    path: wrapHome("/contact/:contactId"),
    element: <Contact />
  },
  {
    path: wrapHome("/storeIndex"),
    element: <StoreIndex />
  },
  {
    path: wrapHome("/reduxToolkitIndex"),
    element: <ReduxToolkitIndex />
  },
  {
    path: wrapHome("/reactReduxIndex"),
    element: <ReactReduxIndex />
  },
  {
    path: wrapHome("/connectIndex"),
    element: <ConnectIndex />
  },
  {
    path: wrapHome("/mobxIndex"),
    element: <MobxIndex timer={myTimer} />
  }
]);

const defaultCount = 0;

export const {
  Consumer,
  Provider
} = React.createContext(defaultCount);

console.log("start react app!");

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  const [count, setCount] = useState(defaultCount);

  return (
    <Provider value={{
      count,
      setCount
    }}>
      <ReactReduxProvider store={store}>
        <ReactReduxProvider store={reactReduxStore}>
          <ReactReduxProvider store={reactReduxStore2}>
            <RouterProvider router={router} />
          </ReactReduxProvider>
        </ReactReduxProvider>
      </ReactReduxProvider>
    </Provider>
  )
}

root.render(
  <App />
);
