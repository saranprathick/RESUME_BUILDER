import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import '../templates/template2.css';

function Template2({ skills }) {
  const user = useSelector(selectUser);

  return (
    <div className="mb-5 p-4 w-100" style={{ border: "5px solid #00adb5" }}>
      <div>
        <div className="row m-0 d-flex align-items-center" style={{ height: "60px" }}>
          <h1 style={{ textAlign: 'center' }}>Resume</h1>
        </div>
      </div>
      <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />

      <div className="container" style={{ fontFamily: "Serif" }}>
        <div className="row">
          <div className="col-3 text-left" style={{ color: "#00adb5" }}>
            <h4> Personal Details</h4>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="addr">Name: {user.firstname} {user.lastname}</div>
                  <div className="addr">Age: {user.age}</div>
                  <div className="duration">City: {user.city}</div>
                </div>
                <div className="right">
                  <div className="desc">DOB: {user.dob}</div>
                  <div className="desc">Pincode: {user.pincode}</div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
          <div className="col-3 text-left" style={{ color: "#00adb5" }}>
            <h4> Professional Details</h4>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="addr">Position title: {user.positiontitle}</div>
                  <div className="addr">Start date: {user.startdate1}</div>
                  <div className="duration">Description: {user.description1}</div>
                </div>
                <div className="right">
                  <div className="desc">Experience: {user.experience}</div>
                  <div className="desc">End date: {user.enddate1}</div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
          <div className="col-3 text-left" style={{ color: "#00adb5" }}>
            <h4>Education</h4>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="addr">School: {user.school}</div>
                  <div className="addr">Start date: {user.startdate}</div>
                  <div className="duration">Description: {user.description}</div>
                </div>
                <div className="right">
                  <div className="desc">Degree: {user.degree}</div>
                  <div className="desc">End date: {user.enddate}</div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
          <div className="col-3 text-left">
            <h4 style={{ color: "#00adb5" }}>Key Skills</h4>
            <div className="section__list">
              {skills.map((skill, index) => (
                <div className="section__list-item" key={index}>
                  <div className="left">
                    <div className="addr">Skill {index + 1}: {skill.skill}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template2;
