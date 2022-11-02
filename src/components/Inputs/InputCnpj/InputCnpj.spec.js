import React from 'react';
import { render, screen } from '@testing-library/react';
import * as stories from './InputCnpj.stories';
import { composeStories } from '@storybook/testing-react';

const { Normal, ComValor } = composeStories(stories);

describe('InputCnpj', () => {
  test('deve renderizar', () => {
    render(<Normal />);
  });

  test('deve renderizar com valor pré-definido', () => {
    render(<ComValor />);
    const cnpj = screen.getByLabelText(/cnpj/i);
    expect(cnpj.value).toBe('37.891.756/0001-88');
  });
});
