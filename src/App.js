import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message, type)=>{
     setAlert({
       msg: message,
       type : type
     })
     setTimeout(()=>{
       setAlert(null);
     },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About />}>
      </Route>
      <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
      </Route>
    </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
