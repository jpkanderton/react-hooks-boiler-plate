import React from 'react';
import axios from 'axios';

const { useState } = React;

const App = () =>{
  const [hooksExample, setHooksExample] = useState('This is a React Hooks example');
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <div onClick = {handleClick}>
        {hooksExample} has been clicked {counter} times
      </div>
    </div>
  )
}

export default App;