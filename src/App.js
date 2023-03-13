import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'

import Home from './components/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'


function App() {

  const [userName, setUserName] = useState(" "); 

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      
      if(user) {
        setUserName(user.displayName)
      }else setUserName("")

      console.log(user); 
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home name={ userName }/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
