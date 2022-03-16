import React from 'react';
import { cnpjMask } from '../../utils/masks';

const _InputCnpj = ({
  valor = '',
  onChange,
}) => {
  const [ cnpj, setCnpj ] = React.useState(valor);

  React.useEffect(() => {
    onChange(cnpj);
  }, [ cnpj ]);

  return (
    <>
      <label htmlFor='cnpj'>CNPJ: 00.000.000/0000-00</label>
      <br/>
      <input
        type='text'
        name='cnpj'
        id='cnpj'
        value={cnpjMask(cnpj)}
        onChange={(e) => setCnpj(e.target.value)}
      />
    </>
  );
}

export const InputCnpj = React.memo(_InputCnpj);
