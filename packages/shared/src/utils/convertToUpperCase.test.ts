import { describe, it, expect } from 'vitest';
import { convertToUpperCase } from './convertToUpperCase';

describe('convertToUpperCase from shared', () => {
  it('should convert lowercase letters to uppercase', () => {
    expect(convertToUpperCase('hello')).toBe('HELLO');
  });

  it('should leave uppercase letters unchanged', () => {
    expect(convertToUpperCase('WORLD')).toBe('WORLD');
  });

  it('should convert mixed-case strings', () => {
    expect(convertToUpperCase('HeLLo WoRlD')).toBe('HELLO WORLD');
  });

  it('should handle empty strings', () => {
    expect(convertToUpperCase('')).toBe('');
  });
});
