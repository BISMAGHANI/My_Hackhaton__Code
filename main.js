var togglebutton = document.getElementById("toggle-skills");
var skills = document.getElementById("Skills-Section");
togglebutton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
