import { InputCpf } from './InputCpf';

export default {
  title: 'InputCpf',
  component: InputCpf,
}

const Template = (props) => <InputCpf {...props} />

export const Normal = Template.bind({});

export const ComValor = Template.bind({});
ComValor.args = {
  valor: '00000000000',
}

export const Desabilitado = Template.bind({});
Desabilitado.args = {
  ...ComValor.args,
  desabilitado: true,
}
