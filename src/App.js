import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {

  const [result, setResult] = useState("Not retrieved yet!");
  const [consecutiveWins, setConsecutiveWins] = useState("not fetched yet!")

  const handleDecide = () => {
    console.log("Retrieving data from my contract!");
  }
  return (
    <div className="App">
      <header className="App-header">Carbonyte Project</header>
      <div>
        <div className="row">

          <div className="column">
            <h4>My Helper Contract</h4>
            <h6>Result: {result}</h6>
            <button className="button" onClick={handleDecide}>Decide</button>
          </div>

          <div className="vl"></div>

          <div className="column">
            <h4>Your Arbitrum Contract</h4>
            <h6>Consecutive Wins: {consecutiveWins}</h6>
            <button className="button">Send True</button>
            <button className="button">Send False</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
