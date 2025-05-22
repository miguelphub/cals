function calcularConos() {
    const piezas = parseInt(document.getElementById("piezas").value);
    const valor = parseInt(document.getElementById("tamano").value);
  
    if (!piezas || !valor) {
      document.getElementById("resultado").innerText = "Por favor, ingrese la cantidad de piezas y seleccione el tamaño.";
      return;
    }
  
    const total = piezas * valor;
    const conos = Math.ceil(total / 5000);
  
    document.getElementById("resultado").innerText = `Se necesitan ${conos} conos de hilo.`;
  }
  