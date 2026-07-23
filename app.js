// =============================
// Xua Tattoo AI Pro
// app.js
// =============================

const fileInput = document.getElementById("fileInput");
const openImage = document.getElementById("openImage");
const saveImage = document.getElementById("saveImage");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let currentImage = null;

// Abrir selector
openImage.addEventListener("click", () => {
    fileInput.click();
});

// Cargar imagen
fileInput.addEventListener("change", (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e){

        const img = new Image();

        img.onload = function(){

            currentImage = img;

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(img,0,0);

        }

        img.src = e.target.result;

    }

    reader.readAsDataURL(file);

});

// Descargar
saveImage.addEventListener("click", () => {

    const link = document.createElement("a");

    link.download = "XuaTattooAI.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

});
