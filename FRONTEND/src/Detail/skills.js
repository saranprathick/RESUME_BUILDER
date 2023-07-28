import React, { Component } from 'react'
function Skills() {
    return ( 
        <>
         <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
            <div style={{padding:'50px'}}><h2>Fill Your Skills</h2></div>
        <form class="row g-3">
  <div class="col-md-8">
    <label for="validationDefault01" class="form-label">Add Skills</label>
    <input type="textarea" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-7">
    <button class="btn btn-primary" type="submit">Add Skills</button>
  </div>
</form>
</div>
        </>
     );
}

export default Skills;

