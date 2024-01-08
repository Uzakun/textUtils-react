import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#666666";
      showAlert("Dark mode Enabled", "success")
      // document.title = "In Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success")
      // document.title = "In light Mode";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">

          {/* <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/"> */}
              <TextForm heading="Enter The Text Below" mode={mode} showAlert={showAlert} /> 
            {/* </Route> */}


          {/* </Switch> */}
         

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;



