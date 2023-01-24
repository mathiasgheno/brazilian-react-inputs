import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './InputCpf.stories';
import userEvent from '@testing-library/user-event';

const { ComValor, Normal, Desabilitado } = composeStories(stories);

describe('InputCpf', () => {
  test('deve renderizar', () => {
    render(<Normal />);
  });

  test('deve renderizar com valor', () => {
    render(<ComValor />);
    const cpf = screen.getByTestId('input_cpf');
    expect(cpf.value).toBe('000.000.000-00');
  });

  test('não deve alterar valor', () => {
    render(<Desabilitado />);
    const cpf = screen.getByTestId('input_cpf');
    userEvent.clear(cpf);
    expect(cpf.value).toBe('000.000.000-00');
  });
});
