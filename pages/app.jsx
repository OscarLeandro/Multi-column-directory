
import { useEffect, useState } from "react";

function App() {
  const [state1, setState1] = useState("estado 1");
  const [state2, setState2] = useState("estado 2");
  const [state3, setState3] = useState("estado 3");



function updateState({data:ter}){
  setState1('Estado 1 Actualizado')
}


useEffect(() => {
  setState2('Estado 2 Actualizado')
  
}, [])



// Cada vez que el estado 1 cambie a actualizado, quiero que el estado 3 se actualize

// Cada vez que el estado 1 cambie a actualizado, quiero que el estado 3 se actualize.

useEffect(() => {

    if (state1 ==='Estado 1 Actualizado' ) {
      setState3('Estado 3 Actualizado')
    
    }
    
      
    }, [state1])

    
      return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>{state1}</p>
            <p>{state2}</p>
            <p>{state3}</p>
            <button onClick={updateState} > click</button>
          </header>
        </div>
      )}
    export default App;