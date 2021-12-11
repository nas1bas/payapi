var toggleButton = document.querySelector (".header__btn")
var siteNavbar = document.querySelector (".menu")

toggleButton.addEventListener("click", () =>{
    siteNavbar.classList.toggle("menu-open");
    toggleButton.classList.toggle("close-btn");
});

 
