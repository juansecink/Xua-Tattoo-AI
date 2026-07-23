// ===========================
// XUA TATTOO AI PRO
// STENCIL.JS V1
// ===========================

function createStencil() {

    if (!currentImage) {
        alert("Primero carga una imagen.");
        return;
    }

    // Dibujar imagen original
    ctx.drawImage(currentImage, 0, 0);

    // Obtener píxeles
    let imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

    let pixels = imageData.data;

    // Escala de grises
    for (let i = 0; i < pixels.length; i += 4) {

        let gray =
            pixels[i] * 0.299 +
            pixels[i + 1] * 0.587 +
            pixels[i + 2] * 0.114;

        pixels[i] = gray;
        pixels[i + 1] = gray;
        pixels[i + 2] = gray;

    }

    // Contraste
    const contrast =
        Number(document.getElementById("contrast").value);

    let factor =
        (259 * (contrast + 255)) /
        (255 * (259 - contrast));

    for (let i = 0; i < pixels.length; i += 4) {

        pixels[i] =
            factor * (pixels[i] - 128) + 128;

        pixels[i + 1] =
            factor * (pixels[i + 1] - 128) + 128;

        pixels[i + 2] =
            factor * (pixels[i + 2] - 128) + 128;

    }

    // Blanco y negro
    for (let i = 0; i < pixels.length; i += 4) {

        let value =
            pixels[i] > 120 ? 255 : 0;

        pixels[i] = value;
        pixels[i + 1] = value;
        pixels[i + 2] = value;

    }

    ctx.putImageData(imageData, 0, 0);

}
