import { useState } from 'react';
import './App.css'

import Accept from './components/accept.jsx';
import Argue from './components/argue.jsx';
import Reject from './components/reject.jsx';
import Explain from './components/explain.jsx';

function App() {
  const [uiState, setUiState] = useState("reject"); //accept, argue, reject, explain
  const renderUI = () => {
    switch (uiState) {
      case "accept":
        return <Accept />
      case "argue":
        return <Argue />
      case "reject":
        return <Reject />
      case "explain":
        return <Explain />
    }
  };
  return (
        <div style={{padding: "40px", fontFamily: "sans-serif"}}>
          <h1>ArgueUI Demo</h1>
          <div style={{marginBottom: "20px"}}>
            <button onClick={() => setUiState("accept")}>Accept</button>
            <button onClick={() => setUiState("argue")}>Argue</button>
            <button onClick={() => setUiState("reject")}>RejectExplain</button>
            <button onClick={() => setUiState("explain")}>Explain</button>
          </div>
          {renderUI()}


          {/* <h1>Accept Demo</h1>
          <Accept /> */}
          {/* <h1>Argue Demo</h1>
          <Argue /> */}
          {/* <h1>Reject Demo</h1>
          <Reject />  */}
          {/* <h1>Explanation Demo</h1>
          <Explain />  */}
        </div>
      )
}

// function App() {
//   return (
//     <div style={{padding: "40px", fontFamily: "sans-serif"}}>
//       {/* <h1>Accept Demo</h1>
//       <Accept /> */}
//       {/* <h1>Argue Demo</h1>
//       <Argue /> */}
//       <h1>Reject Demo</h1>
//       <Reject /> 
//       {/* <h1>Explanation Demo</h1>
//       <Explain />  */}
//     </div>
//   )
// }

export default App;