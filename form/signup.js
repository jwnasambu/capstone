 document.getElementById('signup-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form values
      var firstName = document.getElementById('firstName').value;
      var surname = document.getElementById('surname').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirmPassword').value;
      var dateOfBirth = document.getElementById('dateOfBirth').value;

      // Simple validation
      if (firstName.trim() === '') {
        alert('Please enter your first name');
        return;
      }

      if (surname.trim() === '') {
        alert('Please enter your surname');
        return;
      }

      if (email.trim() === '') {
        alert('Please enter your email');
        return;
      }

      if (password.trim() === '') {
        alert('Please enter your password');
        return;
      }

      if (confirmPassword.trim() === '') {
        alert('Please confirm your password');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (dateOfBirth.trim() === '') {
        alert('Please enter your date of birth');
        return;
      }

      // If all validation passes, you can submit the form
      // Here you may want to send the data to the server using AJAX or any other method
      alert('Form submitted successfully');
    });
 