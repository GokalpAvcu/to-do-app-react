import React from 'react'
import {useTodoLayerValue} from "./context/TodoContext";

function App  () {
  const [{ todos }, dispatch] = useTodoLayerValue();
  console.log(todos);
  return  <div>App</div>;

};

export default App
