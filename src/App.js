import "./App.css";
import { useState } from "react";

function App() {
  let [cricketers, setCricketers] = useState([]);
  let getMethod = async () => {
    let jsonData = await fetch("http://localhost:1234/cricketers",{method:"GET"});
    let jsoData = await jsonData.json();
    setCricketers(jsoData);
    console.log(jsoData);
  };
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            getMethod();
          }}
        >
          Cricketers
        </button>
      </div>
      <div>
        {cricketers.map((ele,i)=>{
          return(
            <div>
              <p key={i}>{ele}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
