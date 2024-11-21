import React from 'react';
import { render, screen } from '@testing-library/react';
import { App, fungsi1, fungsi2, fungsi3 } from './App';

describe('App Component', () => {
    test('renders the correct title and subtitle', () => {
        render(<App />);
        const titleElement = screen.getByText(/Hello Jayjay Student!/i);
        const subtitleElement = screen.getByText(/Let's create unit test/i);
        expect(titleElement).toBeInTheDocument();
        expect(subtitleElement).toBeInTheDocument();
    });
});

describe('fungsi1', () => {
    test('should return the sum of two numbers', () => {
        expect(fungsi1(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
        expect(fungsi1(-1, 1)).toBe(0);
    });
});

describe('fungsi2', () => {
    test('should double the input', () => {
        expect(fungsi2(3)).toBe(6);
    });

    test('should return 0 when input is 0', () => {
        expect(fungsi2(0)).toBe(0);
    });
});

describe('fungsi3', () => {
    test('should return the input when input is positive', () => {
        expect(fungsi3(5)).toBe(5);
    });

    test('should throw an error when input is negative', () => {
        expect(() => fungsi3(-1)).toThrow('Input tidak boleh negatif');
    });
});