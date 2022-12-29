import * as stories from './InputData.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { Normal, ComValor } = composeStories(stories);

describe('InputData', () => {
  test('deve renderizar normalmente', () => {
    render(<Normal />);
  });

  function changeInputData(data) {
    //veja https://github.com/sanniassin/react-input-mask/issues/174#issuecomment-804961229
    const input = screen.getByTestId('input_data');
    userEvent.clear(input);
    fireEvent.change(input, { target: { value: data } });
  }

  test('deve renderizar com valor', () => {
    render(<ComValor />);
    const input = screen.getByTestId('input_data');
    expect(input.getAttribute('value')).toBe('24/11/2022');
  });

  test('deve renderizar com valor e alterar quando tiver máscara', () => {
    render(<ComValor />);
    const input = screen.getByTestId('input_data');
    expect(input.getAttribute('value')).toEqual('24/11/2022');
    changeInputData('23/10/2021');
    expect(input.getAttribute('value')).toEqual('23/10/2021');
  });

  test('deve renderizar com valor e alterar quando não tiver máscara', () => {
    render(<ComValor />);
    const input = screen.getByTestId('input_data');
    expect(input.getAttribute('value')).toEqual('24/11/2022');
    changeInputData('23102021');
    expect(input.getAttribute('value')).toEqual('23/10/2021');
  });

  test('deve alterar apenas dia', () => {
    render(<ComValor />);
    const input = screen.getByTestId('input_data');
    expect(input.getAttribute('value')).toEqual('24/11/2022');
    changeInputData('23');
    expect(input.getAttribute('value')).toEqual('23');
  });

  test('deve alterar dia e mes quando tiver mascara', () => {
    render(<ComValor />);
    const input = screen.getByTestId('input_data');
    expect(input.getAttribute('value')).toEqual('24/11/2022');
    changeInputData('23/10');
    expect(input.getAttribute('value')).toEqual('23/10');
  });

  test('deve alterar dia e mes quando não tiver mascara', () => {
    render(<ComValor />);
    const input = screen.getByTestId('input_data');
    expect(input.getAttribute('value')).toEqual('24/11/2022');
    changeInputData('2310');
    expect(input.getAttribute('value')).toEqual('23/10');
  });
});
