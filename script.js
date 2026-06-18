// ===========================
// GSAP SETUP
// ===========================

gsap.registerPlugin(ScrollTrigger);

// ===========================
// HERO ANIMATIONS
// ===========================

gsap.from(".navbar", {
    y: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".hero-heading", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power4.out"
});

gsap.from(".hero-left", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4
});

gsap.from(".hero-right", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

gsap.from(".hero-character", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power4.out"
});

// ===========================
// FLOATING CHARACTER
// ===========================

gsap.to(".hero-character", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// ===========================
// MAGNETIC EFFECT
// ===========================

const magnet = document.querySelector(".magnet");

if (magnet) {

    magnet.addEventListener("mousemove", (e) => {

        const rect = magnet.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 8;
        const moveY = (y - centerY) / 8;

        gsap.to(magnet, {
            x: moveX,
            y: moveY,
            duration: 0.4,
            ease: "power2.out"
        });

    });

    magnet.addEventListener("mouseleave", () => {

        gsap.to(magnet, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1,0.3)"
        });

    });

}

// ===========================
// ABOUT ANIMATIONS
// ===========================

gsap.from(".about-section h2", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%"
    },
    y: 80,
    opacity: 0,
    duration: 1
});

gsap.from(".about-text", {
    scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1.2
});

// ===========================
// FLOATING OBJECTS
// ===========================

gsap.to(".moon", {
    y: -25,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".lego", {
    y: 20,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".object", {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".group", {
    y: 20,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// ===========================
// MARQUEE SCROLL EFFECT
// ===========================

const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if (row1) {
        row1.style.transform =
            `translateX(${scroll * 0.25}px)`;
    }

    if (row2) {
        row2.style.transform =
            `translateX(${-scroll * 0.25}px)`;
    }

}, {
    passive: true
});

// ===========================
// IMAGE HOVER EFFECT
// ===========================

const marqueeImages =
document.querySelectorAll(".marquee-row img");

marqueeImages.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        gsap.to(img, {
            scale: 1.05,
            duration: 0.4
        });

    });

    img.addEventListener("mouseleave", () => {

        gsap.to(img, {
            scale: 1,
            duration: 0.4
        });

    });

});

// ===========================
// BUTTON ANIMATION
// ===========================

document
.querySelectorAll(".contact-btn")
.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {
            scale: 1.08,
            duration: 0.3
        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {
            scale: 1,
            duration: 0.3
        });

    });

});

// ===========================
// SMOOTH REVEAL SECTIONS
// ===========================

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        },

        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"

    });

});

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener("scroll", () => {

    const scrolled = window.pageYOffset;

    document.querySelectorAll(".corner-img")
    .forEach((img) => {

        const speed = 0.08;

        img.style.transform =
        `translateY(${scrolled * speed}px)`;

    });

}, {
    passive: true
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
    "%cXhahid Tech Loaded Successfully",
    "color:#BBCCD7;font-size:18px;font-weight:bold;"
);