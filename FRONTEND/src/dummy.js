import React, { useState, useRef } from 'react';

import './sidebar.css';
import './Nav';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './redux/userSlice';
import { selectUser } from './redux/userSlice';
import Template1 from './templates/template1';
import Template2 from './templates/template2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function Sidebar() {
  const dispatch = useDispatch();
  const { value } = useParams();
  const [selectedComponent, setSelectedComponent] = useState('Home');
  const user = useSelector(selectUser);
  const [currentStep, setCurrentStep] = useState(0);
  // const user = useSelector(selectUser);
  const divRef = useRef(null);

  const [pdfFilename, setPdfFilename] = useState('');

  const handlePdfFilenameChange = (event) => {
    setPdfFilename(event.target.value);
  };
  const downloadAsPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    html2canvas(divRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(pdfFilename);
    });
  };
  const handleButtonClick = (componentName) => {
    switch (componentName) {
      case 'Next':
        if (selectedComponent === 'Details') {
          setSelectedComponent('Proffessional');
        } else if (selectedComponent === 'Proffessional') {
          setSelectedComponent('Skills');
        } else if (selectedComponent === 'Skills') {
          setSelectedComponent('Education');
        } // Add other cases if needed
        break;
      case 'Previous':
        if (selectedComponent === 'Proffessional') {
          setSelectedComponent('Details');
        } else if (selectedComponent === 'Skills') {
          setSelectedComponent('Proffessional');
        } else if (selectedComponent === 'Education') {
          setSelectedComponent('Skills');
        } // Add other cases if needed
        break;
      default:
        setSelectedComponent(componentName);
        break;
    }
  };
  
   let componentToRender1 = null;
   const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[age,setAge]=useState('');
  const[dob,setDob]=useState('');
  const[city,setCity]=useState('');
  const[pincode,setPincode]=useState('');
  const[state,setState]=useState('');
  const[positiontitle,setPosition]=useState('');
  const[startdate1,setStartdate1]=useState('');
  const[enddate1,setEnddate1]=useState('');
  const[startdate,setStartdate]=useState('');
  const[enddate,setEnddate]=useState('');
  const[description1,setDescription1]=useState('');
  const[description,setDescription]=useState('');
  const[exprience,setExperience]=useState('');
  const[school,setSchool]=useState('');
  const[degree,setDegree]=useState('');
  const [skills, setSkills] = useState([{ skill: '', description: '' }]);

  const handleSkillChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index].skill = e.target.value;
    setSkills(newSkills);
  };
  
  const handleDescriptionChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index].description = e.target.value;
    setSkills(newSkills);
  };
  
  const addNewSkill = () => {
    setSkills([...skills, { skill: '', description: '' }]);
  };

  const submitHandler = (e) => {
    // console.log(formdata.username,formdata.password)
    
    e.preventDefault(); 
    dispatch(login({
      
     ...user, firstname:firstname,
       lastname:lastname,
       age:age,
       dob:dob,
       city:city,
       state:state,
       pincode:pincode,
       positiontitle:positiontitle,
       startdate1:startdate1,
       enddate1:enddate1,
       description1:description1,
       startdate:startdate,
       enddate:enddate,
       description:description,
       exprience:exprience,
       school:school,
       degree:degree,
       skills: skills,
       // city:city,
     }))
     console.log('hello');
    }
  if (value ==='1') {
   componentToRender1=<Template1 skills={skills}/>}
  if (value ==='2') {
   componentToRender1=<Template2 skills={skills}/>}
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Details':
        return(
            <div>
            <div><h2>Personal Details</h2></div>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label" onChange>First name</label>
    <input type="text" class="form-control" id="validationDefault01"  onChange={(e)=>{setFirstname(e.target.value)}}required/>
  </div>
  <div class="col-md-6  ">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02"  onChange={(e)=>{setLastname(e.target.value)}}required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Age</label>
    <input type="number" class="form-control" id="validationDefault02"  onChange={(e)=>{setAge(e.target.value)}} required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">DOB</label>
    <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setDob(e.target.value)}}required/>
  </div>
  
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03"onChange={(e)=>{setCity(e.target.value)}} required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" onChange={(e)=>{setState(e.target.value)}}required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Pincode</label>
    <input type="number" class="form-control" id="validationDefault05" onChange={(e)=>{setPincode(e.target.value)}}required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler}  >Submit form</button>
      </div>
      <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      </div>  
 
</form>
</div>
        );
      case 'Proffessional':
        return (
            <>
            <div>
               <div><h2>Professional Details</h2></div>
           <form class="row g-3">
      <div class="col-md-6">
       <label for="validationDefault01" class="form-label">Position title</label>
       <input type="text" class="form-control" id="validationDefault01" onChange={(e)=>{setPosition(e.target.value)}}required/>
      </div>
      <div class="col-md-6  ">
       <label for="validationDefault02" class="form-label">Experience</label>
       <input type="text" class="form-control" id="validationDefault02"onChange={(e)=>{setExperience(e.target.value)}} required/>
      </div>
      <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Start date</label>
       <input type="date" class="form-control" id="validationDefault02" onChange={(e)=>{setStartdate1(e.target.value)}} required/>
      </div>
      <div class="col-md-6">
       <label for="validationDefault02" class="form-label">End date</label>
       <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setEnddate1(e.target.value)}}required/>
      </div>
      <div>
        <h5>Description</h5>
      </div>
      <div class='col-md-6'>
        <textarea class='form-control' onChange={(e)=>{setDescription1(e.target.value)}}></textarea>
      
      </div>
      
      
      <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler}  >Submit form</button>
      </div>
      <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      </div>
      </form>
      </div>
           </>
        );
        case 'Skills':
          return (
            <>
              <div>
                <div>
                  <h2>Skills</h2>
                </div>
                <form className="row g-3">
                  {skills.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="col-md-6">
                        <label htmlFor={`skill-${index}`} className="form-label">
                          Skill {index + 1}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id={`skill-${index}`}
                          value={item.skill}
                          onChange={(e) => handleSkillChange(e, index)}
                          required
                        />
                      </div>
                    </React.Fragment>
                  ))}
        
                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      onClick={addNewSkill}
                      style={{ marginTop: '20px' }}
                    >
                      Add New Skill
                    </button>
                  </div>
                  <div className="col-12">
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleButtonClick('Next')}
                      style={{ marginTop: '20px' }}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </>
          );
        
      case 'Education':
        return(
            <>
        <div>
           <div><h2>Education Details</h2></div>
       <form class="row g-3">
 <div class="col-md-6">
   <label for="validationDefault01" class="form-label">School</label>
   <input type="text" class="form-control" id="validationDefault01"  onChange={(e)=>{setSchool(e.target.value)}}required/>
 </div>
 <div class="col-md-6  ">
   <label for="validationDefault02" class="form-label">Degree</label>
   <input type="text" class="form-control" id="validationDefault02" onChange={(e)=>{setDegree(e.target.value)}} required/>
 </div>
 <div class="col-md-6">
   <label for="validationDefault02" class="form-label">Start date</label>
   <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setStartdate(e.target.value)}} required/>
 </div>
 <div class="col-md-6">
   <label for="validationDefault02" class="form-label">End date</label>
   <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setEnddate(e.target.value)}} required/>
 </div>
 <div>
    <h5>Description</h5>
 </div>
 <div class='col-md-6'>
    <textarea class='form-control'  onChange={(e)=>{setDescription(e.target.value)}} ></textarea>

 </div>
 <div class="col-12">
   <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler} >Submit form</button>
 </div>
 <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      </div>
</form>
</div>
       </>
        );
    }
  };

  return (
    <>
      <div>
        {/* <NAV/> */}
      </div>
      <div className='main3'>
        <div className='sub1'>
          <div>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link
                  onClick={() => handleButtonClick('Details')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Personal details
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => handleButtonClick('Proffessional')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Professional details
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => handleButtonClick('Skills')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Skills
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => handleButtonClick('Education')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Educational details
                </Link>
              </li>
            </ul>

              
          </div>
          
        </div>
        <div className='sub2' id='dis'>
          <div style={{ padding: '70px' }}>{renderComponent()}</div>
        </div>
        <div className='sub3' ref={divRef}>
          {/* if (value === '1') {
          componentToRender1 = <Template1 skills={skills} />
          } */}
            {componentToRender1 }
            <div>
            <input
              type='text'
              className='form-control mb-3'
              placeholder='Enter Your Filename'
              value={pdfFilename}
              onChange={handlePdfFilenameChange}
            />

            <button
              type='submit'
              className='btn btn-primary w-50'
              onClick={downloadAsPDF}
              style={{
                justifyContent: 'center',
                marginLeft: '120px',
              }}
            >
              DOWNLOAD
            </button>
          </div>
            </div>
      </div>
    </>
  );
}

export default Sidebar;