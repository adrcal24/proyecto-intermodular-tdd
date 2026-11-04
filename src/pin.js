function validatePIN(pin) {
  // Expresión regular que comprueba si son exactamente 4 o 6 dígitos numéricos
  const regex = /^(\d{4}|\d{6})$/;
  return regex.test(pin);
}

// Exportación ESM al final
export { validatePIN };