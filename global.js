//sticky navbar 
// location.reload();

window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
});
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').style.backgroundColor = '#022B46';
        } else {
            document.getElementById('navbar_top').style.backgroundColor = "transparent";

        }
    });
});