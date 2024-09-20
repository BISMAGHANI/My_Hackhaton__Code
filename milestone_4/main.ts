// Get References to the form and dsplay area
const form = document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-display`) as HTMLDivElement;

// Handle form Submission
form.addEventListener(`submit`,(event:Event)=> {
    event.preventDefault();  //prevent page reload

    //collect input values
  const name = (document.getElementById(`name`) as HTMLInputElement).value 
  const email = (document.getElementById(`email`) as HTMLInputElement).value 
  const phone = (document.getElementById(`phone`) as HTMLInputElement).value 
  const education = (document.getElementById(`education`) as HTMLInputElement).value 
  const experience = (document.getElementById(`experience`) as HTMLInputElement).value 
  const skills = (document.getElementById(`skills`) as HTMLInputElement).value
  
//   Generate the Resume Dynamically
const resumeHTML = `
<h2><b><i>Editable Resume</h2></b></i>
<h3><i>Personal Information</h3></i>
<p><b><i>Name:</b></i><span contentaditable="true">${ name}</span></p>
<p><b><i>Email:</b></i><span contentaditable="true">${ email}</span></p>
<p><b><i>Phone:</b></i><span contentaditable="true">${ phone}</span></p>

<h3><i>Education</h3></i>
<p span contentaditable="true">${education}</p>

<h3><i>Experience</h3></i>
<p span contentaditable="true">${experience}</p>

<h3><i>Skills</h3></i>
<p span contentaditable="true">${skills}</p>
`;

// Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error(`The Resume Display Element is Missing.`)
}
})

// <span contentaditable="true">
// </span>
