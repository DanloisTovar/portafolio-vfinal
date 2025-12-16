import { describe, it, expect } from 'vitest';

/**
 * Tests básicos para verificar que Vitest está funcionando correctamente
 */
describe('Tests Básicos de Vitest', () => {
  it('debe pasar un test matemático simple', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 2).toBe(4);
    expect(10 - 5).toBe(5);
  });

  it('debe verificar igualdad de strings', () => {
    const message = 'Hola Mundo';
    expect(message).toBe('Hola Mundo');
    expect(message).toContain('Mundo');
  });

  it('debe trabajar con arrays', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toHaveLength(5);
    expect(numbers).toContain(3);
    expect(numbers[0]).toBe(1);
  });

  it('debe trabajar con objetos', () => {
    const user = {
      name: 'Juan',
      age: 30,
      email: 'juan@example.com',
    };

    expect(user).toHaveProperty('name');
    expect(user.name).toBe('Juan');
    expect(user.age).toBeGreaterThan(18);
  });

  it('debe manejar excepciones', () => {
    const throwError = () => {
      throw new Error('Test error');
    };

    expect(throwError).toThrow('Test error');
  });

  it('debe trabajar con promesas', async () => {
    const promise = Promise.resolve('éxito');
    await expect(promise).resolves.toBe('éxito');
  });

  it('debe verificar valores falsy y truthy', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
  });

  it('debe comparar números', () => {
    expect(5).toBeGreaterThan(3);
    expect(3).toBeLessThan(5);
    expect(5).toBeGreaterThanOrEqual(5);
    expect(5).toBeLessThanOrEqual(5);
  });
});

describe('Funciones Utilitarias', () => {
  // Función de ejemplo para sumar
  const sum = (a: number, b: number) => a + b;

  // Función de ejemplo para filtrar
  const filterEven = (numbers: number[]) => numbers.filter((n) => n % 2 === 0);

  it('debe sumar dos números correctamente', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it('debe filtrar números pares correctamente', () => {
    expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEven([1, 3, 5])).toEqual([]);
    expect(filterEven([2, 4, 6])).toEqual([2, 4, 6]);
  });
});
