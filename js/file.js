// select skills selector
let ourSkills = document.querySelector(".skills");

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
}

