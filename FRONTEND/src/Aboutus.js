import React, { Component } from 'react';
import '../src/about.css';
import Nav from './Homepage';
import imgs from '../src/images/img1.mp4';
import NAV from './Nav';
function About() {
    return ( 
        <>
        <NAV/>
        <center>
        <div className='main1'>
            <div>
                <video className='logo' autoPlay loop muted style={{width:'350px',padding:'20px'}}>
                <source src={imgs} type='video/mp4'/>
                </video>
            <h4>
            Our family of BOLD solutions help jobseekers and employers. Our online destinations provide unique
            solutions that help people find jobs, and employers find people. Each one of our unique brands is 
            dedicated to making a meaningful, positive impact on the lives and careers of our customers, 
            and our hard-working employees.we want to provide a professional resume building service.
            </h4>
            <h1>Share With Your Friends</h1>
            <div className='icons'>
                <img src='https://cdn.iconscout.com/icon-pack/preview-mockup/free-social-media-color-3924.png?f=avif&h=240&modified_at=1494583291' />
            </div>
            </div>
        </div>
        </center>


        </>
     );
}

export default About;