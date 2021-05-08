window.onload = function () {
    document.querySelector(".loading-page").style.display = "none"; 
}
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

    if (window.scrollY > 500){
        document.querySelector(".topbar").style.display = "none";
    } else {
        document.querySelector(".topbar").style.display = "block";
    }
}

toTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".top").scrollIntoView({
        behavior: "smooth"
    });
});

var menucount = document.getElementById("porlist");
var menubar = document.querySelectorAll(".portfolio ul li")
var prodBox = document.querySelectorAll(".portfolio .img-box");
var x;
for (x = 0; x < menubar.length; x++) {
    menubar[x].addEventListener("click", function() {
        var current = menucount.getElementsByClassName("active");
        current[0].classList.remove("active");
        this.className += " active";
        if (this.dataset.porlist == "all") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                prodBox[t].style.display = "block";
            }
        } else if (this.dataset.porlist == "app") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "app") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        } else if (this.dataset.porlist == "card") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "card") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        } else if (this.dataset.porlist == "web") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "web") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        }
    });
}