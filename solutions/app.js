gsap.from(".title-animation-1", {
    opacity: 0,
    y: -50,
    duration: 1.2,
    ease: "rough",
    delay: 0.5
});
gsap.from(".title-animation-2", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 1,
    ease: "rough",

});
gsap.from(".button-animation", {
    opacity: 0,
    x: -100,
    duration: 1.2,
    ease: "back.out(2)",
    delay: 1.3
});