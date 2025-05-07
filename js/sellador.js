function calcularSelladores() {
    const piezas = parseInt(document.getElementById("piezas").value);
    const porCaja = parseInt(document.getElementById("porCaja").value);
    const largoPulg = parseFloat(document.getElementById("largo").value);
    const anchoPulg = parseFloat(document.getElementById("ancho").value);
    const forma = document.getElementById("forma").value;

    if (!piezas || !porCaja || !largoPulg || !anchoPulg || porCaja <= 0) {
        document.getElementById("resultado").innerText = "Por favor, complete todos los campos correctamente.";
        return;
    }

    // Cajas calculadas
    const cajas = Math.ceil(piezas / porCaja);
    document.getElementById("cajas").value = cajas;

    // Conversiones a cm y +4cm
    const largoCm = (largoPulg * 2.54) + 4;
    const anchoCm = (anchoPulg * 2.54) + 4;

    let consumo = 0;

    if (forma === "Normal") {
        consumo = largoCm * 2;
    } else if (forma === "H") {
        consumo = (largoCm * 2) + (anchoCm * 4);
    }

    // Convertir a metros y redondear a 2 decimales
    const consumoMetros = Math.round((consumo / 100) * 100) / 100;

    // Total de selladores necesarios (multiplicado por número de cajas)
    const totalMetros = consumoMetros * cajas;
    const selladoresNecesarios = Math.ceil(totalMetros / 100); // Un sellador por cada 100 m, redondeado

    document.getElementById("resultado").innerText =
        `Se necesitan ${selladoresNecesarios} selladores. El consumo es de: ${consumoMetros} metros.`;
}
