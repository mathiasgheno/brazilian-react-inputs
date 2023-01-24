import React from 'react';
import { render, screen } from '@testing-library/react';
import * as stories from './InputCnpj.stories';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

const { Normal, ComValor, Desabilitado } = composeStories(stories);

describe('InputCnpj', () => {
  test('deve renderizar', () => {
    render(<Normal />);
  });

  test('deve renderizar com valor pré-definido', () => {
    render(<ComValor />);
    const cnpj = screen.getByLabelText(/cnpj/i);
    expect(cnpj.value).toBe('37.891.756/0001-88');
  });

  test('não deve alterar valor', () => {
    render(<Desabilitado />);
    const cnpj = screen.getByTestId('input_cnpj');
    userEvent.clear(cnpj);
    expect(cnpj.value).toBe('37.891.756/0001-88');
  });
});
