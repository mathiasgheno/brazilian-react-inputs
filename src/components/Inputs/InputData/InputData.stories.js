import { InputData } from './InputData';

export default {
  title: 'InputData',
  component: InputData,
}

const Template = (props) => <InputData {...props} />

export const Normal = Template.bind({});

export const ComValor = Template.bind({});
ComValor.args = {
  valor: '24/11/2022',
}

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  ...ComValor.args,
  desabilitado: true,
}
