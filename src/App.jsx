import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { InputContext } from "./context/userContext";

function App() {
  const defaultValue = useContext(InputContext)
  const [pageTitle, setPageTitle] = useState(defaultValue)
  const [input, setInput] = useState(defaultValue)
  
  const handleInput = (event) => {
    setInput(event.target.value)
  }

  const object = {input, handleInput}

  return (
    <>
    <InputContext.Provider value={object} >
      <Header title={pageTitle} inputValue={input} onTitleChange={handleInput}/>
    </InputContext.Provider>



      <h1>{input}</h1>
    </>
  )
}

export default App;
