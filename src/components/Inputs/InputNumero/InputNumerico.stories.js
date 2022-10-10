import { InputNumero } from './InputNumero';

export default {
  title: 'InputNumero',
  component: InputNumero,
}

const Template = (props) => <InputNumero {...props} />

export const Normal = Template.bind({});

export const ComValor = Template.bind({});

ComValor.args = {
  valor: '100000',
}

export const Inteiro = Template.bind({});
Inteiro.args = {
  valor: '1000',
  casasDecimais: 0,
}
