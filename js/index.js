var toggleButton = document.querySelector (".header__btn")
var siteNavbar = document.querySelector (".sitenav")

toggleButton.addEventListener("click", () =>{
    siteNavbar.classList.toggle("sitenav-open");
    toggleButton.classList.toggle("close-btn");
});