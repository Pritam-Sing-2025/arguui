
import './App.css'

import Accept from './components/accept.jsx';
import Argue from './components/argue.jsx';
import Reject from './components/reject.jsx';
import Explain from './components/explain.jsx';


function App() {
  return (
    <div style={{padding: "40px", fontFamily: "sans-serif"}}>
      {/* <h1>Accept Demo</h1>
      <Accept /> */}
      {/* <h1>Argue Demo</h1>
      <Argue /> */}
      <h1>Reject Demo</h1>
      <Reject /> 
      {/* <h1>Explanation Demo</h1>
      <Explain />  */}
    </div>
  )
}

export default App;