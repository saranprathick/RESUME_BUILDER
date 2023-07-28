import React, { Component } from 'react'
function Professional() {
    return ( 
        <>
         <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
            <div style={{padding:'50px'}}><h2>Fill Your Professional Details</h2></div>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">PositionTitle</label>
    <input type="text" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-md-6  ">
    <label for="validationDefault02" class="form-label">YearExperience</label>
    <input type="number" class="form-control" id="validationDefault02" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">StartDate</label>
    <input type="date" class="form-control" id="validationDefault03"  required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">EndDate</label>
    <input type="date" class="form-control" id="validationDefault04"  required/>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Save</button>
  </div>
</form>
</div>
        </>
     );
}

export default Professional;

