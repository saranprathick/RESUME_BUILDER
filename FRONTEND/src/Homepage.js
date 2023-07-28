import React from "react";
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import NAV from "./Nav";
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice';

function Home() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const resume = () => {
    navigate('/resume');
  };

  return (
    <>
      <NAV />
      <h1 style={{ fontFamily: 'courier', fontSize: '30px', marginLeft: '70%' }}>
        {/* Welcome <span className='username-color'>{user}</span> ! */}
      </h1>
      <div className="front">
        <div id="para">
          <h5>“The goal is to present yourself well and quickly.”</h5>
          <h5>Your resume isn't an autobiography. It's your chance to prove—in 6 seconds,</h5>
          <h5>according to a large eye-tracking study of recruiters—that you'd be a great</h5>
          <h5>fit for a given role. Prioritize quality, relevant words—that is, resume</h5>
          <h5>keywords—over quantity of words.</h5>
        </div>
        <button type='button' className='btn btn-danger' id="btn" onClick={resume}>Create My Resume</button>
      </div>
    </>
  );
}

export default Home;
