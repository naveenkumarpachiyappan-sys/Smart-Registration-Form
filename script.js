// Selecting HTML elements

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let bioInput = document.getElementById("bio");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let bioError = document.getElementById("bioError");

let bioCounter = document.getElementById("bioCounter");

let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("registrationForm");
let successMessage = document.getElementById("successMessage");


// Validation functions

function validateName() {

    if (nameInput.value.trim() === "") {
        nameError.innerText = "Name is required";
        return false;
    }

    nameError.innerText = "";
    return true;
}


function validateEmail() {

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        emailError.innerText = "Email is required";
        return false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.innerText = "Please enter a valid email";
        return false;
    }

    emailError.innerText = "";
    return true;
}


function validatePassword() {

    if (passwordInput.value === "") {
        passwordError.innerText = "Password is required";
        return false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.innerText =
            "Password must contain at least 6 characters";
        return false;
    }

    passwordError.innerText = "";
    return true;
}


function validateBio() {

    let bioLength = bioInput.value.length;

    bioCounter.innerText = bioLength + " / 200 characters";

    if (bioInput.value.trim() === "") {
        bioError.innerText = "Bio is required";
        return false;
    }

    if (bioLength > 200) {
        bioError.innerText = "Bio cannot exceed 200 characters";
        return false;
    }

    bioError.innerText = "";
    return true;
}


// Check all fields

function checkForm() {

    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();
    let isBioValid = validateBio();

    submitBtn.disabled = !(
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isBioValid
    );
}


// Real-time validation using input events

nameInput.addEventListener("input", function() {
    checkForm();
});

emailInput.addEventListener("input", function() {
    checkForm();
});

passwordInput.addEventListener("input", function() {
    checkForm();
});

bioInput.addEventListener("input", function() {
    checkForm();
});


// Prevent invalid form submission

form.addEventListener("submit", function(event) {

    event.preventDefault();

    checkForm();

    if (!submitBtn.disabled) {
        successMessage.innerText =
            "Registration successful!";
    }
});