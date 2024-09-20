// Get References to the form and dsplay area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //   Generate the Resume Dynamically
    var resumeHTML = "\n<h2><b><i>Resume</h2></b></i>\n<h3><i>Personal Information</h3></i>\n<p><b><i>name:</b></i>".concat(name, "</p>\n<p><b><i>email:</b></i>").concat(email, "</p>\n<p><b><i>phone:</b></i>").concat(phone, "</p>\n\n<h3><i>Education</h3></i>\n<p>").concat(education, "</p>\n\n<h3><i>Experience</h3></i>\n<p>").concat(experience, "</p>\n\n<h3><i>Skills</h3></i>\n<p>").concat(skills, "</p>\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume Display Element is Missing.");
    }
});
