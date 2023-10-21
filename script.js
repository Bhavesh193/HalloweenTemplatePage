

// let preloader = document.querySelector('[data-preloader]')
// window.addEventListener("load" ,  function() {
//     setInterval(() => {
//         preloader.classList.add("loaded")   
//     }, 1500);
// })

//   //////////// HEADER

let navtoggler = document.querySelector("[data-nav-toggler]")
let navbar = document.querySelector("[data-navbar]")

let toggleNav = function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active")
}
navtoggler.addEventListener('click',toggleNav )