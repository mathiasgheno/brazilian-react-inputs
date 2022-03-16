import React from 'react';
import { cpfMask } from "../../utils/masks";

const _InputCpf = ({
  valor = '',
  onChange,
}) => {
  const [ cpf, setCpf ] = React.useState(valor);

  React.useEffect(() => {
    onChange(cpf);
  }, [ cpf ]);

  return (
    <>
      <label htmlFor='cpf'>CPF: 00.000.000-00</label>
      <br/>
      <input
        type='text'
        name='cpf'
        id='cpf'
        value={cpfMask(cpf)}
        onChange={(e) => setCpf(e.target.value)}
      />
    </>
  )
};

export const InputCpf = React.memo(_InputCpf);
