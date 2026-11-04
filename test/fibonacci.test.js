import { describe, it, expect } from 'vitest';
import { fibonacci } from '../src/fibonacci.js';

describe('fibonacci(n)', () => {
  it('debe devolver 0 para n = 0 y 1 para n = 1', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it('debe calcular correctamente términos como n = 5 o n = 10', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  it('debe lanzar RangeError para entradas inválidas', () => {
    const mensajeError = 'solo números enteros entre 0 y 78';
    expect(() => fibonacci(-1)).toThrowRangeError(mensajeError);
    expect(() => fibonacci(79)).toThrowRangeError(mensajeError);
    expect(() => fibonacci("5")).toThrowRangeError(mensajeError);
  });
});