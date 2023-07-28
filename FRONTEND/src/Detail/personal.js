import React, { Component } from 'react'
function Personal() {
    return ( 
        <>
         <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
            <div style={{padding:'50px'}}><h2>Fill Your Personal Details</h2></div>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-md-6  ">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Age</label>
    <input type="number" class="form-control" id="validationDefault03"  required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">DOB</label>
    <input type="date" class="form-control" id="validationDefault04"  required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Address</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">PhoneNumber</label>
    <input type="number" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">State</label>
    <select class="form-select" id="validationDefault06" required>
      <option selected disabled value="">Choose</option>
      <option>Tamil Nadu</option>
      <option>Kerala</option>
      <option>Andhara Pradesh</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="validationDefault05" class="form-label">Pincode</label>
    <input type="number" class="form-control" id="validationDefault05" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault05" class="form-label">Country</label>
    <input type="text" class="form-control" id="validationDefault05" required/>
  </div>
  {/* <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div> */}
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Save</button>
  </div>
</form>
</div>
        </>
     );
}

export default Personal;

