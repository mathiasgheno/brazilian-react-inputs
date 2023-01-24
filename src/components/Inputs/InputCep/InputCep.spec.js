import React from 'react';
import { render, screen } from '@testing-library/react'
import * as stories from './InputCep.stories';

import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

const { Normal, ComValor, Desabilitado } = composeStories(stories);

describe('InputCep', () => {
  test('deve renderizar', () => {
    render(<Normal />);
  });

  test('deve renderizar com valor', () => {
    render(<ComValor />);
    const cep = screen.getByLabelText(/cep/i);
    expect(cep.value).toBe('00000-000');
  });

  test('não deve alterar valor', () => {
    render(<Desabilitado />);
    const cep = screen.getByTestId('input_cep');
    userEvent.clear(cep);
    expect(cep.value).toBe('00000-000');
  });
})
