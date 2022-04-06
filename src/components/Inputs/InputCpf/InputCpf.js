import React from 'react';
import { cpfMask } from '../../../utils/masks';

export const InputCpf = ({
  valor = '',
  onChange,
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
