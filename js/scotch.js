function calcularRollos() {
  const bolsas = parseInt(document.getElementById("bolsas").value);
  const cintaPorBolsa = parseFloat(document.getElementById("cintaPorBolsa").value);
  const largoRollo = 5000; // Valor fijo

  if (isNaN(bolsas) || isNaN(cintaPorBolsa)) {
    document.getElementById("resultado").textContent = "Agrega los datos";
    return;
  }

  const totalCinta = bolsas * cintaPorBolsa;
  const rollosNecesarios = Math.ceil(totalCinta / largoRollo);

  document.getElementById("resultado").textContent =
    `Se necesita ${totalCinta} cm de scotch. Rollos necesarios: ${rollosNecesarios}`;
}
