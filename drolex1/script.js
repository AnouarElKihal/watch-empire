//Navigation bar effect on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector(".navSection");
    header.classList.toggle("sticky", window.scrollY > 0);
});
