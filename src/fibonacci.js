function fibonacci(n) {
  if (n < 0) throw new Error('No se admiten números negativos');
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exportación ESM al final, igual que en calc.js
export { fibonacci };