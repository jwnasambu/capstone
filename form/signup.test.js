// Load the necessary modules
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Load the HTML content
const html = fs.readFileSync(path.resolve(__dirname, './signup.html'), 'utf8');

let dom;
let document;
let window;

beforeEach(() => {
  // Create a new JSDOM instance before each test
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;
  window = dom.window;

  // Add the JavaScript file to the JSDOM environment
  const scriptPath = path.resolve(__dirname, './signup.js');
  const scriptContent = fs.readFileSync(scriptPath, 'utf8');
  const scriptElement = document.createElement('script');
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);

  // Mock the intlTelInput function
  window.intlTelInput = jest.fn().mockReturnValue({
    getSelectedCountryData: () => ({ dialCode: '1' })
  });
});

test('Form submission', () => {
  // Mock the alert function
  window.alert = jest.fn();

  // Fill the form fields
  document.getElementById('firstName').value = 'Jane';
  document.getElementById('surname').value = 'Moraa';
  document.getElementById('email').value = 'jane@yahoo.com';
  document.getElementById('password').value = 'Admin123';
  document.getElementById('confirmPassword').value = 'Admin123';
  document.getElementById('dateOfBirth').value = '1990-01-01';
  document.getElementById('gender').value = 'female';
  document.getElementById('location').value = 'Nakuru';
  document.getElementById('countryCode').value = '+254';
  document.getElementById('mobileNumber').value = '1234567890';
  document.getElementById('height').value = '180';
  document.getElementById('weight').value = '70';
  document.getElementById('bloodTypeInput').value = 'A+';

  // Submit the form
  document.getElementById('signup-form').dispatchEvent(new window.Event('submit'));

  // Check if alert was called with the success message
  expect(window.alert).toHaveBeenCalledWith('Form submitted successfully');
});
