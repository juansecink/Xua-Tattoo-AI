// ===============================
// Xua Tattoo AI
// app.js
// ===============================

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const createBtn = document.getElementById("createBtn");
const downloadBtn = document.getElementById("downloadBtn");

let originalImage = null;

// Cargar imagen
fileInput.addEventListener("change", function (e) {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {

        const img = new Image();

        img.onload = function () {

            originalImage = img;

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);

            preview.src = canvas.toDataURL("image/png");
            preview.style.display = "block";

        };

        img.src = event.target.result;

    };

    reader.readAsDataURL(file);

});

// Botón Crear Esténcil
createBtn.addEventListener("click", function () {

    if (!originalImage) {

        alert("Primero selecciona una imagen.");

        return;

    }

    alert("Motor de esténcil en desarrollo.");

});

// Descargar imagen
downloadBtn.addEventListener("click", function () {

    if (!preview.src) {

        alert("No hay imagen para descargar.");

        return;

    }

    const link = document.createElement("a");

    link.download = "Xua_Tattoo_AI.png";
    link.href = preview.src;

    link.click();

});ñ
