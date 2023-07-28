// ForgotPasswordForm.js
import React, { useState } from 'react';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSuccess, setResetSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let isValid = true;
    if (email.trim() === '') {
      setEmailError('Please enter your email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!isValid) {
      return;
    }

    // Make a POST request to the backend forgot-password endpoint
    fetch(`http://localhost:8181/api/v1/auth/forgot-password?email=${encodeURIComponent(email)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResetSuccess(data); // Response message indicating password reset email is sent
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error during password reset request
        // For simplicity, let's just set the resetSuccess state to the error message
        setResetSuccess('An error occurred during password reset.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className="text-danger">{emailError}</p>}
      </div>
      <button type="submit" className="btn btn-primary">Reset Password</button>
      {resetSuccess && <p className="text-success mt-3">{resetSuccess}</p>}
    </form>
  );
}

export default ForgotPasswordForm;
