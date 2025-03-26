const button = document.getElementById('BtnCV')
button.addEventListener("click",function(){
    window.open('https://drive.usercontent.google.com/u/0/uc?id=1TM2i972RRYJxVmN8hcOdIpeneDe-UPbl&export=download')
})

const clock = document.getElementById("clock");

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-link");

    function changeActiveNav() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
                if (link.getAttribute("href").substring(1) === 'hardskill' ||link.getAttribute("href").substring(1) === 'Softskill'){
                    const skill = document.getElementById('skilllink')
                    skill.classList.add('active');
                }
            }
            
        });
    }
    setInterval(updateClock, 1000);
    window.addEventListener("scroll", changeActiveNav);
    updateClock();
});
