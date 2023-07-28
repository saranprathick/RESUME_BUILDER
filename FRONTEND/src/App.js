import React from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Login from './Login';
import SignupForm from './SignUpForm';
import About from './Aboutus';
import "./Home.css";
import Home from './Homepage';
import Resumes from './Resumetemplate';
import Sidebar from './sidebar';
import Personal from './Detail/personal';

function App() {
  return (
    <div>
    <>
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<SignupForm/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/resume' element={<Resumes/>}/>
        <Route path='/details/:value' element={<Sidebar/>}/>
      </Routes>
      </div>
    </Router>
    </>
    </div>
  );
}

export default App;