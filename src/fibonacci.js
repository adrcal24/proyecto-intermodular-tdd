function fibonacci(n) {
  // Verificamos si no es número, si tiene decimales o si está fuera del rango 0-78
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0 || n > 78) {
    throw new RangeError('solo números enteros entre 0 y 78');
  }
  
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exportación ESM al final
export { fibonacci };