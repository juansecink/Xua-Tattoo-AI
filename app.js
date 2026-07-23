// ===============================
// XUA TATTOO AI PRO
// APP.JS
// ===============================

// Elementos
const fileInput = document.getElementById("fileInput");
const openButton = document.getElementById("openImage");
const saveButton = document.getElementById("saveImage");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Variables
let originalImage = null;
let zoom = 1;

// Abrir selector de archivos
openButton.addEventListener("click", () => {
    fileInput.click();
});

// Cargar imagen
fileInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        const img =
