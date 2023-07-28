import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import '../template1.css'

function Template1({skills}) {
  const user = useSelector(selectUser);

  return (
    <div className="resume-container">
      {/* Personal Details */}
      <div className="section">
        <div className="section__title">Personal Details</div>
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

      {/* Professional Details */}
      <div className="section">
        <div className="section__title">Professional Details</div>
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

      {/* Skills */}
      <div className="section">
      <div className="section__title">Skills</div>
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

      {/* Educational Details */}
      <div className="section">
        <div className="section__title">Educational Details</div>
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
    </div>
  );
}

export default Template1;
