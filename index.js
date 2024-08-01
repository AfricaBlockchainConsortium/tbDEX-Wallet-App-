import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.render(<AppContainer />, rootElement);
} else {
  console.error('Root element not found');
}

// Get the form elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginButton = document.getElementById('login-button');
const signupButton = document.getElementById('signup-button');
const resetPasswordButton = document.getElementById('reset-password-button');

// Add event listeners to the buttons
loginButton.addEventListener('click', handleLogin);
signupButton.addEventListener('click', handleSignup);
resetPasswordButton.addEventListener('click', handleResetPassword);

// Define the event handler functions
function handleLogin(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the form data
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  
  // Validate the form data
  if (email && password) {
    // Call the login API endpoint
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Login successful, redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        // Login failed, display error message
        alert('Invalid email or password');
      }
    });
  } else {
    // Display error message
    alert('Please fill in all fields');
  }
}

function handleSignup(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the form data
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  
  // Validate the form data
  if (email && password) {
    // Call the signup API endpoint
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Signup successful, redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        // Signup failed, display error message
        alert('Invalid email or password');
      }
    });
  } else {
    // Display error message
    alert('Please fill in all fields');
  }
}

function handleResetPassword(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the form data
  const email = resetPasswordForm.email.value;
  
  // Validate the form data
  if (email) {
    // Call the reset password API endpoint
    fetch('/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Reset password successful, display success message
        alert('Password reset email sent');
      } else {
        // Reset password failed, display error message
        alert('Invalid email');
      }
    });
  } else {
    // Display error message
    alert('Please fill in all fields');
  }
}


