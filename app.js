function animationSet() {
  const header = document.querySelector("header");
  particles(header);

  // now making a universal float animation for class .float elements
  function floate(e) {
    e.style.animation = `float 3s  ${Math.floor(
      Math.random() * 4
    )}s infinite  ease-in-out`;
  }
  const floats = document.querySelectorAll(".float");
  floats.forEach((float) => floate(float));
  //  gsap animation for the text in the header
  const tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.from("nav", { y: "-100%", ease: "power" })
    .from(
      ".header-center", 
      { scale: 0, opacity: 0, y: "-100%", ease: "power" }, "<") 
    .from(".header-heading span", { rotateX: 90, skewX: 90, stagger: 0.25, opacity: 0.1, ease: "power2.inOut" }, "<")
    .from(".header-description", {  rotateX: 180, skewY: 90, stagger: 0.25, opacity: 0, ease: "power" }, "<")
    .from(".header-cta", { scale: 0, skewX: 90, opacity: 0, ease: "power" }, "<")
  // slider functionality
  sliderAnim();
} 

// nav is smaller on scroll funtion
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY) {
      nav.classList.add("shorter-nav");

    } else {
      nav.classList.remove("shorter-nav");
    }
  });
// functions for each process

//  slider functionality
function sliderAnim() {
  const tl2 = gsap.timeline();
  tl2.to(".slider-container", { xPercent: -75});

  ScrollTrigger.create({
    trigger: ".slider-container",
    start: "top 100px",
    pin: ".about-section-out",
    scrub: 1,
    endTrigger: ".about-section-out",
    end: "+=1000",
    animation: tl2,
    invalidateOnRefresh: true,
    immediateRender: false
  });

}
// particles effect
let num = 0;
const particles = (element) => {
  num++;
  if (num >= 50) return;
  requestAnimationFrame(() => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.opacity = 0;
    element.appendChild(particle);
    element.style.overflow = "hidden";
    particle.style.zIndex = 100;
    particle.style.position = "absolute";
    particle.style.bottom = "0";
    particle.style.width = Math.random() * 10 + "px";
    particle.style.borderRadius = "50%";
    particle.style.aspectRatio = "1/1";
    particle.style.backgroundColor = `var(--primary-color${Math.floor(
      Math.random() * 5
    )})`;
    particle.style.left = Math.random() * 95 + "vw";
    particle.style.boxShadow = `0 0 1rem .1rem var(--primary-color${Math.floor(
      Math.random() * 5
    )})`;
    particle.style.animation = ` particle 4s ${
      Math.random() * 5
    }s linear infinite`;
  });
  particles(element);
};
// positoin generater
// finalized loading of everything on startup
window.addEventListener("load", animationSet);
// gsap debugging
let resizeTimeOut;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeOut);
  resizeTimeOut = setTimeout(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
    gsap.killTweensOf(".slider-container"); // Kill previous GSAP animations
    ScrollTrigger.refresh(); // Refresh all ScrollTriggers
    sliderAnim(); // Reinitialize the slider animation
  });
});


function toggleClass(_class, element) {
  const target = document.querySelector(element);
  target.classList.toggle(_class);
} 
const tl = gsap.timeline({ 
 repeat: -1,
 repeatDelay: 0,
 ScrollTrigger: ".special"
});
const animations = [
    {
        in: { scale: 0.8, opacity: 0, rotation: 30, yPercent: 100, ease: "bounce.out" },
        span: { yPercent: 50, opacity: 0, duration: 0.4, stagger: 0.1, ease: "elastic.out(1, 0.5)", filter: "blur(3px)" },
        out: { xPercent: -100, scale: 1.2, opacity: 0, rotation: -30, duration: 1.5, ease: "power2.in" }
    },
    {
        in: { scale: 0.6, opacity: 0, rotation: -45, xPercent: -100, ease: "back.out(2)" },
        span: { yPercent: 100, opacity: 0, duration: 0.3, stagger: 0.2, ease: "elastic.out(1, 0.3)", filter: "blur(5px)" },
        out: { yPercent: 100, scale: 1.5, opacity: 0, rotation: 45, duration: 1.8, ease: "power4.inOut" }
    },
    {
        in: { scale: 0.7, opacity: 0, rotation: 15, yPercent: -50, ease: "expo.out" },
        span: { xPercent: 50, opacity: 0, duration: 0.5, stagger: 0.15, ease: "elastic.out(1, 0.4)", filter: "blur(2px)" },
        out: { xPercent: 100, scale: 1.3, opacity: 0, rotation: -15, duration: 1.6, ease: "circ.inOut" }
    },
    {
        in: { scale: 0.9, opacity: 0, rotation: -60, xPercent: 50, ease: "back.out(1.5)" },
        span: { yPercent: -50, opacity: 0, duration: 0.4, stagger: 0.2, ease: "elastic.out(1, 0.6)", filter: "blur(4px)" },
        out: { yPercent: -100, scale: 1.4, opacity: 0, rotation: 60, duration: 1.7, ease: "power3.inOut" }
    },
    {
        in: { scale: 0.5, opacity: 0, rotation: 90, yPercent: 50, ease: "elastic.out(1, 0.8)" },
        span: { xPercent: -50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "elastic.out(1, 0.5)", filter: "blur(6px)" },
        out: { xPercent: -100, scale: 1.6, opacity: 0, rotation: -90, duration: 1.9, ease: "power4.inOut" }
    },
    {
        in: { scale: 0.4, opacity: 0, rotation: -75, xPercent: -50, ease: "back.out(2)" },
        span: { yPercent: 50, opacity: 0, duration: 0.3, stagger: 0.2, ease: "elastic.out(1, 0.3)", filter: "blur(3px)" },
        out: { yPercent: 100, scale: 1.7, opacity: 0, rotation: 75, duration: 1.8, ease: "power4.inOut" }
    },
    {
        in: { scale: 0.6, opacity: 0, rotation: 45, yPercent: -50, ease: "expo.out" },
        span: { xPercent: 50, opacity: 0, duration: 0.5, stagger: 0.15, ease: "elastic.out(1, 0.4)", filter: "blur(2px)" },
        out: { xPercent: 100, scale: 1.3, opacity: 0, rotation: -45, duration: 1.6, ease: "circ.inOut" }
    },
    {
        in: { scale: 0.8, opacity: 0, rotation: -30, xPercent: 50, ease: "back.out(1.5)" },
        span: { yPercent: -50, opacity: 0, duration: 0.4, stagger: 0.2, ease: "elastic.out(1, 0.6)", filter: "blur(4px)" },
        out: { yPercent: -100, scale: 1.4, opacity: 0, rotation: 30, duration: 1.7, ease: "power3.inOut" }
    },
    {
        in: { scale: 0.7, opacity: 0, rotation: 60, yPercent: 50, ease: "elastic.out(1, 0.8)" },
        span: { xPercent: -50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "elastic.out(1, 0.5)", filter: "blur(6px)" },
        out: { xPercent: -100, scale: 1.6, opacity: 0, rotation: -60, duration: 1.9, ease: "power4.inOut" }
    }
];

for (let i = 1; i <= 9; i++) {
    const anim = animations[i - 1];
    tl.from(`.slide-${i}`, anim.in)
      .from(`.slide-${i} span`, anim.span)
      .to(`.slide-${i}`, anim.out);
}    
// extra development time only
// window.addEventListener("load", () => {
//   setTimeout(() => {
//     const contactSection = document.querySelector(".contact");
//     if (contactSection) {
//       contactSection.scrollIntoView();
//     }
//   }, 100);
// });