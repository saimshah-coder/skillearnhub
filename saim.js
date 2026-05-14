const themeToggle = document.getElementById("themeToggle");

themeToggle?.addEventListener("click", () => {
document.body.classList.toggle("light-theme");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){
scrollBtn.style.display = "block";
}else{
scrollBtn.style.display = "none";
}

const progressBar = document.querySelector(".progress-bar");

if(progressBar){

const totalHeight =
document.body.scrollHeight - window.innerHeight;

const progress =
(window.pageYOffset / totalHeight) * 100;

progressBar.style.width = progress + "%";
}

});

scrollBtn?.addEventListener("click", () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
});

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {
loader.style.display = "none";
},1000);

});

const searchInput = document.getElementById("searchInput");

searchInput?.addEventListener("keyup", () => {

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

const title = card.innerText.toLowerCase();

if(title.includes(searchInput.value.toLowerCase())){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

});