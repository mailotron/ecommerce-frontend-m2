
function alertaCafe() {
    alert("presionar el boton te hizo 1% mas feliz;)");
}
document.getElementById("btnTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
