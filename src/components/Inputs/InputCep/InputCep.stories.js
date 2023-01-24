import React from 'react';
import { InputCep } from './InputCep';

export default {
  title: 'InputCep',
  component: InputCep,
}

const Template = (props) => <InputCep {...props} />

export const Normal = Template.bind({});

export const ComValor = Template.bind({});

ComValor.args = {
  valor: '00000000',
}

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  ...ComValor.args,
  desabilitado: true,
}

//veja: https://medium.com/storybookjs/testing-lib-storybook-react-8c36716fab86
