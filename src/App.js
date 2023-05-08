
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import './components/Navbar';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// import TodoList from './components/TodoList/TodoList'


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#0f0640';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#9cd8ed';
      showAlert("Light mode has been enabled", "success");
    }

  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="textUttam" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyes below" mode={mode} />}></Route> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyes below" mode={mode} />
          {/* <Route exact path="About/" element={<About />}/>
          </Routes> */}
          {/* <TodoList /> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
