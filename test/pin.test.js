import { describe, it, expect } from 'vitest';
import { validatePIN } from '../src/pin.js';

describe('validatePIN(pin)', () => {
  it('debe aceptar contraseñas de exactamente 4 o 6 dígitos numéricos', () => {
    expect(validatePIN("1234")).toBe(true);
    expect(validatePIN("123456")).toBe(true);
  });

  it('debe rechazar contraseñas con longitudes incorrectas', () => {
    expect(validatePIN("123")).toBe(false);
    expect(validatePIN("12345")).toBe(false);
    expect(validatePIN("1234567")).toBe(false);
  });

  it('debe rechazar contraseñas que contengan letras o caracteres especiales', () => {
    expect(validatePIN("a234")).toBe(false);
    expect(validatePIN("12.4")).toBe(false);
    expect(validatePIN("-123")).toBe(false);
  });
});
