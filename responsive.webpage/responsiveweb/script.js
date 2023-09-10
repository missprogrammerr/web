let menuToggle = document.getElementById("toggleMenu");
menuToggle.addEventListener("click", function() {
    if(this.nextElementSibling.classList.contains("show")) {
        this.nextElementSibling.classList.remove("show");
    } else {
        this.nextElementSibling.classList.add("show");
    }
});