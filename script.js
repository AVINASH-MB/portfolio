// ==============================
// TYPING ANIMATION
// ==============================

const typed = new Typed("#typing", {
    strings: [
        "Full-Stack Developer",
        "React Developer",
        "Node.js Developer",
        "Problem Solver",
        "Web Application Developer"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu when clicking nav links

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });
});

// ==============================
// SCROLL PROGRESS BAR
// ==============================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ==============================
// SCROLL TO TOP BUTTON
// ==============================

const scrollTopBtn =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTopBtn.style.display = "flex";
        scrollTopBtn.style.alignItems = "center";
        scrollTopBtn.style.justifyContent = "center";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==============================
// ACTIVE NAVIGATION LINKS
// ==============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ==============================
// CONTACT FORM HANDLING
// ==============================

// =========================
// EMAILJS CONFIG
// =========================

emailjs.init("MzZJAib3qx3yhxPc-");

const contactForm =
document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_7cz88oo",
        "template_h3wc32g",
        this
    )

    .then(() => {

        alert(
            "Message sent successfully!"
        );

        contactForm.reset();

    })

    .catch((error) => {

        console.error(error);

        alert(
            "Failed to send message."
        );

    });

});
// ==============================
// SMOOTH REVEAL ANIMATION
// ==============================

const revealElements =
    document.querySelectorAll(
        ".glass, .project-card, .skill-card"
    );

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const elementTop =
            el.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform =
                "translateY(0px)";

        }

    });

};

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
        "translateY(50px)";
    el.style.transition =
        "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ==============================
// PARALLAX HERO IMAGE
// ==============================

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ==============================
// PARTICLE BACKGROUND
// ==============================

tsParticles.load("particles-js", {

    background: {
        color: {
            value: "transparent"
        }
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                area: 800
            }
        },

        color: {
            value: [
                "#4f8cff",
                "#8b5cf6",
                "#ffffff"
            ]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: {
                min: 1,
                max: 4
            }
        },

        links: {
            enable: true,
            distance: 150,
            color: "#4f8cff",
            opacity: 0.2,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "bounce"
            }
        }

    },

    interactivity: {

        events: {

            onHover: {
                enable: true,
                mode: "grab"
            },

            onClick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 180,
                links: {
                    opacity: 0.6
                }
            },

            push: {
                quantity: 4
            }

        }

    },

    detectRetina: true

});

// ==============================
// BUTTON HOVER EFFECT
// ==============================

document
    .querySelectorAll(".btn")
    .forEach(btn => {

        btn.addEventListener(
            "mouseenter",
            () => {
                btn.style.transform =
                    "translateY(-5px) scale(1.03)";
            }
        );

        btn.addEventListener(
            "mouseleave",
            () => {
                btn.style.transform =
                    "translateY(0px) scale(1)";
            }
        );

    });

// ==============================
// PAGE LOADER FADE-IN
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});

// ==============================
// CURRENT YEAR AUTO UPDATE
// ==============================

const footer = document.querySelector("footer p");

if (footer) {

    const year =
        new Date().getFullYear();

    footer.innerHTML =
        `© ${year} AVINASH M B | Full-Stack Developer`;

}

// ==============================
// CONSOLE SIGNATURE
// ==============================

console.log(`
====================================
 Portfolio Developed By
 AVINASH M B
 Full-Stack Developer
====================================
`);