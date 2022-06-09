gsap.from(".titless", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: " bounce",
});

gsap.from(".titlesss", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: " bounce",
    delay: 0.5
});

const targetDiv1 = document.getElementById("container1");
const targetDiv2 = document.getElementById("container2");
const targetDiv3 = document.getElementById("container3");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

targetDiv1.onclick = function() {

    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    targetDiv1.style.opacity = "1";
    targetDiv2.style.opacity = "0.7";
    targetDiv3.style.opacity = "0.7";


}

targetDiv2.onclick = function() {
    text1.style.display = "none";
    text2.style.display = "block";
    text3.style.display = "none";
    targetDiv1.style.opacity = "0.7";
    targetDiv3.style.opacity = "0.7";
    targetDiv2.style.opacity = "1";


}
targetDiv3.onclick = function() {
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "block";
    targetDiv2.style.opacity = "0.7";
    targetDiv1.style.opacity = "0.7";
    targetDiv3.style.opacity = "1";


}