    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        var firstName = document.getElementById('firstName').value;
        var surname = document.getElementById('surname').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var location = document.getElementById('location').value;
        var countryCode = document.getElementById('countryCode').value;
        var mobileNumber = document.getElementById('mobileNumber').value;

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

        if (gender.trim() === '') {
            alert('Please enter your gender');
            return;
        }

        if (location.trim() === '') {
            alert('Please enter your location');
            return;
        }

        if (countryCode.trim() === '') {
            alert('Please enter your country code');
            return;
        }

        if (mobileNumber.trim() === '') {
            alert('Please enter your mobile number');
            return;
        }

        // If all validation passes, you can submit the form
        // Here you may want to send the data to the server using AJAX or any other method
        alert('Form submitted successfully');
    });

    // Password visibility toggler
    document.getElementById('togglePassword1').addEventListener('click', function() {
        var passwordInput = document.getElementById('password');
        var icon = document.getElementById('togglePassword1');

        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            passwordInput.setAttribute('type', 'password');
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });

    document.getElementById('togglePassword2').addEventListener('click', function() {
        var confirmPasswordInput = document.getElementById('confirmPassword');
        var icon = document.getElementById('togglePassword2');

        if (confirmPasswordInput.getAttribute('type') === 'password') {
            confirmPasswordInput.setAttribute('type', 'text');
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            confirmPasswordInput.setAttribute('type', 'password');
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });

