
        document.addEventListener("DOMContentLoaded", function () {
            const passwordField = document.getElementById("psw");
            const togglePasswordButton = document.getElementById("togglePassword");

            // Toggle password visibility
            togglePasswordButton.addEventListener("click", function (event) {
                event.preventDefault();
                const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
                passwordField.setAttribute("type", type);
                this.classList.toggle("fa-eye-slash");
                this.classList.toggle("fa-eye");
            });

            // Form validation and submission
            const form = document.querySelector("form");

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const email = document.getElementById("email").value;
                const password = document.getElementById("psw").value;

                if (email.trim() === "") {
                    alert("Please enter your email.");
                    return;
                }

                if (password.trim() === "") {
                    alert("Please enter your password.");
                    return;
                }

                // Replace the following line with your form submission logic
                // For demonstration, here we just log the form data
                console.log("Email:", email);
                console.log("Password:", password);

                // Optionally, you can submit the form here:
                // form.submit();
            });
        });

