
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});


window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    navLinks.forEach(link => {
        const section = document.getElementById(link.getAttribute("href").substring(1));
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        }
    });
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(button);
    const email = document.querySelector("input[type='email']").value;
    const phone = document.querySelector("input[type='number']").value;
    const subject = document.querySelector("input[type='text']").value;
    const message = document.querySelector("textarea").value;

    if (!email || !phone || !subject || !message) {
        alert("Please fill in all fields");
    } else {
        alert("Message sent successfully!");
        form.reset();
    }
});


const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "<i class='bx bx-menu'></i>";
document.querySelector(".header").appendChild(menuToggle);
const navbar = document.querySelector(".navbar");
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("open");
});


const resume = document.querySelectorAll(".btn-0");
resume.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open("https://drive.google.com/file/d/1lL_hA2nlwFmiq7of_38OWFvVTy3_9rbM/view?usp=drive_link");
    })
});

const PROJECTS = document.querySelectorAll(".btn-1");
PROJECTS.forEach(btn => {
    btn.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/noor-ali-7aa206274/");
    })
});


// const HOME = document.querySelectorAll(".active");
// HOME.forEach(active => {
//     active.addEventListener("click", () => {
//         window.open("home");
//     });
// });
