import { useState } from 'react';
import './App.css'

import Accept from './components/accept.jsx';
import Argue from './components/argue.jsx';
import Reject from './components/reject.jsx';
import Explain from './components/explain.jsx';

function App() {
  const [uiState, setUiState] = useState(null); //accept, argue, reject, explain
  const [input, setInput] = useState("");

  const decideUI = (input) => {
    const lower = input.trim().toLowerCase();
    if (!lower) {
      setUiState('reject');
      return;
    }
    if (lower.includes("submit") || lower.includes("ok")) {
      setUiState("accept");
    }
    else if (lower.includes("why") || lower.includes("explain")) {
      setUiState("explain");
    }
    else if (lower.includes("don't care") || lower.includes("dont care") || lower.includes("force")) {
      setUiState("argue");
    } 
    else {
      setUiState("reject");
    }
  };

  const renderUI = () => {
    if (!uiState) {
      return <p style={{opacity: 0.6}}>Waiting for intent...</p>;
    }
    switch (uiState) {
      case "accept":
        return <Accept />
      case "argue":
        return <Argue />
      case "reject":
        return <Reject />
      case "explain":
        return <Explain />
      default:
        return null;
    }
  };

  return (
        <div style={{padding: "40px", fontFamily: "sans-serif"}}>
          <h1>ArgueUI Demo</h1>
          <input
            type='text'
            placeholder='Tell UI what u wanna do..'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{width: "100%", padding: "10px", marginBottom: "10px"}}
          />
          <button 
            onClick={() => {
              console.log("Input: ", input);
              decideUI(input);
            }}
          >
            Submit 
          </button>
          <div style={{marginTop: "20px"}}>
            {renderUI()}
          </div>



          {/* <div style={{marginBottom: "20px"}}>
            <button onClick={() => setUiState("accept")}>Accept</button>
            <button onClick={() => setUiState("argue")}>Argue</button>
            <button onClick={() => setUiState("reject")}>RejectExplain</button>
            <button onClick={() => setUiState("explain")}>Explain</button>
          </div>
          {renderUI()} */}

          {/* <h1>Accept Demo</h1>
          <Accept /> */}
          {/* <h1>Argue Demo</h1>
          <Argue /> */}
          {/* <h1>Reject Demo</h1>
          <Reject />  */}
          {/* <h1>Explanation Demo</h1>
          <Explain />  */}

        </div>
      );
}

export default App;