//App.js
import React, {useState} from 'react';

//JSX
function App(){ 

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  return(
    <div className="Cnt">
      <h1>Home</h1>
      <button onClick={increment}>Incrementa</button>
      <h4>Counter: {count}</h4>
    </div>
  );
}

//Equivale a 
//React.createElement(div)

export default App;