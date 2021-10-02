let navbar = document.querySelector(".navbar");
let icon = document.querySelector(".fa-bars");

window.onscroll = () =>{
    navbar.classList.remove("active")
    icon.classList.remove(".fa-times");
}

icon.addEventListener("click", () =>{
    icon.classList.toggle("fa-times")
    navbar.classList.toggle("active");
})

var typed = new Typed(".typing-text", {
    strings : ["24x7 help", "Zero Traces Of Plagiarism", "unlimited revisions", "Best Price In The Market", "100 Percent Confidentiality", "Assurance Of Timely Delivery"],
    loop: true,
    typeSpeed: 150
})