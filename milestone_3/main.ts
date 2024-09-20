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
<h2><b><i>Resume</h2></b></i>
<h3><i>Personal Information</h3></i>
<p><b><i>name:</b></i>${name}</p>
<p><b><i>email:</b></i>${email}</p>
<p><b><i>phone:</b></i>${phone}</p>

<h3><i>Education</h3></i>
<p>${education}</p>

<h3><i>Experience</h3></i>
<p>${experience}</p>

<h3><i>Skills</h3></i>
<p>${skills}</p>
`;

// Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error(`The Resume Display Element is Missing.`)
}
})


