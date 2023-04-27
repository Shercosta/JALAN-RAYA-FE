import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col col-9">
            <h1>Koordinat Jalan Lampung Selatan</h1>
          </div>
          <div className="col col-3">
            <form className="d-flex">
              <input
                type="search"
                className="form-control my-2"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
