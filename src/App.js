import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import ArbitrumABI from "./ArbitrumABI.json";
import MyContractABI from "./MyContractABI.json";
import {ethers, BigNumber} from "ethers";




function App() {

  const contractAddress = "0x18B7DFF2a1EC88790D129719232FC07e50FC29A5";
  const myContract = "0x07E3DFD2A4CCAc8b857fEC1477CAEa10A91fF17E";

  const [wins, setWins] = useState("not fetched yet!");

  const handleDecide = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const instance = new ethers.Contract(myContract, MyContractABI.abi, signer);
    const response = await instance.decide();
    console.log(response);
  }

  const handleWalletConnect = async () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" }).then(result => console.log("Your Public Key:",result[0]));

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const instance = new ethers.Contract(contractAddress, ArbitrumABI.abi, provider);

      const response = await instance.consecutiveWins();
      setWins(ethers.BigNumber.from(response).toNumber());

    } else {
      alert("Need to install Metamask!");
    }
  }



  return (
    <div className="App">

      <header className="App-header">Carbonyte Project
        <button className="button" onClick={handleWalletConnect}>Update Data</button>
      </header>
      
      <div>
        <div className="row">

          <div className="column">
            <h4>My Helper Contract</h4>
            <button className="button" onClick={handleDecide}>Execute</button>
          </div>

          <div className="vl"></div>

          <div className="column">
            <h4>Your Arbitrum Contract</h4>
            <h6>Consecutive Wins: {wins}</h6>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
