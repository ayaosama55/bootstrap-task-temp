// select skills selector
let ourSkills = document.querySelector(".skills");
let toTopButton = document.querySelector(".toTop");

window.onscroll = function () {

    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // outer height 
    let skillsOuterHeight = ourSkills.offsetHeight;
    // window height
    let windowHeight = this.innerHeight;
    // window scrolltop
    let windowScrollTop = this.pageYOffset;
    
    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skills .progress .progress-bar");
        allSkills.forEach(skills => {
            skills.style.width = skills.dataset.progress;
        });
    }

    if (window.scrollY > 500) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}


toTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".top").scrollIntoView({
        behavior: "smooth"
    });
});
