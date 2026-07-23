// =====================================
// XUA TATTOO AI PRO
// APP.JS V2
// =====================================

// Variables globales
window.fileInput = document.getElementById("fileInput");
window.openImage = document.getElementById("openImage");
window.saveImage = document.getElementById("saveImage");

window.canvas = document.getElementById("canvas");
window.ctx = window.canvas.getContext("2d");

window.currentImage = null;

// Abrir explorador
window.openImage.addEventListener("click", () => {
    window.fileInput.click();
});

// Cargar imagen
window.fileInput.addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        const img = new Image();

        img.onload = function () {

            window.currentImage = img;

            window.canvas.width = img.width;
            window.canvas.height = img.height;

            window.ctx.clearRect(
                0,
                0,
                window.canvas.width,
                window.canvas.height
            );

            window.ctx.drawImage(
                img,
                0,
                0
            );

        };

        img.src = e.target.result;

    };

    reader.readAsDataURL(file);

});

// Descargar imagen
window.saveImage.addEventListener("click", function () {

    if (!window.currentImage) {

        alert("Primero carga una imagen.");

        return;

    }

    const link = document.createElement("a");

    link.download = "XuaTattooAI.png";

    link.href = window.canvas.toDataURL("image/png");

    link.click();

});
