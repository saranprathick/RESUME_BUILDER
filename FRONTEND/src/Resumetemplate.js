import React, { Component,useState } from 'react';
import '../src/resumetemplate.css';
import { useNavigate } from 'react-router-dom';
function Resumes(){
   const [isHovered, setIsHovered] = useState(false);
   const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
   };
   const navigate=useNavigate('');
   const info =(value)=>{
    navigate(`/details/${value}`)  };
    return ( 
        <>
        <div className='mainsub'>
            <h1>Choose Your Template</h1>
        </div>
        <div className='main'>
        <div className='tem1'
            
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
          >
            {isHovered &&( <button className='btn btn-primary w-20 h-6'style={{marginTop:'250px',marginLeft:'130px'}}onClick={()=>info(1)}>Use Template</button>) }
         
                  </div>
        <div className='tem2'
            
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}
            style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
          >
            {isHovered1 &&( <button className='btn btn-primary w-20 h-6'style={{marginTop:'250px',marginLeft:'130px'}}onClick={()=>info(2)}>Use Template</button>) }
         
                  </div>
        <div className='tem3'
            
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
            style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
          >
            {isHovered2 &&( <button className='btn btn-primary w-20 h-6'style={{marginTop:'250px',marginLeft:'130px'}}onClick={()=>info(1)}>Use Template</button>) }
         
                  </div>
        <div className='tem4'
            
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
            style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
          >
            {isHovered3 &&( <button className='btn btn-primary w-20 h-6'style={{marginTop:'250px',marginLeft:'130px'}}onClick={()=>info(2)}>Use Template</button>) }
         
                  </div>
         
      
        </div>
        </>
     );
}

export default Resumes;