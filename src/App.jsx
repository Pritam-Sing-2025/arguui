import { useState } from 'react';
import './App.css'
import {getUIComponent} from './tambo/uiRouter.js';

function App() {
  const [input, setInput] = useState("");
  const [SelectedUI, setSelectedUI] = useState(null);
  const handleSubmit = async() => {
    const UI = getUIComponent(input);
    setSelectedUI(() => UI);
  };

  return (
        <div style={{padding: "40px", fontFamily: "sans-serif"}}>
          <h1>ArgueUI</h1>
          <input
            type='text'
            placeholder='Tell me what u wanna do..'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{width: "100%", padding: "10px", marginBottom: "10px"}}
          />
          <button onClick={(handleSubmit)}>          
            Submit 
          </button>
          <div style={{marginTop: "20px"}}>
            {SelectedUI ? <SelectedUI /> : <p>Waiting for input..</p>}
          </div> 

        </div>
      );
}

export default App;