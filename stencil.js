// =====================================
// XUA TATTOO AI PRO
// STENCIL.JS V2
// =====================================

function createStencil() {

    if (!window.currentImage) {

        alert("Primero carga una imagen.");

        return;

    }

    // Dibujar imagen original
    window.ctx.clearRect(
        0,
        0,
        window.canvas.width,
        window.canvas.height
    );

    window.ctx.drawImage(
        window.currentImage,
        0,
        0
    );

    // Obtener imagen
    let imageData = window.ctx.getImageData(
        0,
        0,
        window.canvas.width,
        window.canvas.height
    );

    let pixels = imageData.data;

    // Leer controles
    let contrast = Number(document.getElementById("contrast").value);
    let thickness = Number(document.getElementById("thickness").value);

    // Factor de contraste
    let factor =
        (259 * (contrast + 255)) /
        (255 * (259 - contrast));

    // Escala de grises + contraste
    for (let i = 0;
