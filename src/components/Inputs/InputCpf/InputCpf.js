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
}) => {
  const [ cpf, setCpf ] = React.useState(valor);

  React.useEffect(() => {
    setCpf(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='cpf'>CPF: 00.000.000-00</label>
      <br/>
      <input
        type='text'
        name='cpf'
        id='cpf'
        value={cpfMask(cpf)}
        onChange={(e) => {
          setCpf(e.target.value);
          onChange(e);
        }}
      />
    </>
  )
};
