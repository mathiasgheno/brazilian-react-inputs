import React from 'react';

export function cpfMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const InputCpf = ({
  valor = '',
  onChange = () => {},
  desabilitado = false,
}) => {
  const [ cpf, setCpf ] = React.useState(valor);
  const id = React.useId();

  React.useEffect(() => {
    setCpf(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor={id}>CPF</label>
      <br/>
      <input
        data-testid="input_cpf"
        type='text'
        name='cpf'
        id={id}
        placeholder='00.000.000-00'
        value={cpfMask(cpf)}
        onChange={(e) => {
          setCpf(e.target.value);
          onChange(e);
        }}
        disabled={desabilitado}
      />
    </>
  )
};
