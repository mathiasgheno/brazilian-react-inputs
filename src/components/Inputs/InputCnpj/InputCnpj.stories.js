import { InputCnpj } from './InputCnpj';

export default {
  title: 'InputCnpj',
  component: InputCnpj,
}

const Template = (props) => <InputCnpj {...props} />

export const Normal = Template.bind({});

export const ComValor = Template.bind({});
ComValor.args = {
  valor: '37891756000188',
};

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  ...ComValor.args,
  desabilitado: true,
}
