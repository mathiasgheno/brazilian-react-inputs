import React from 'react';
import { cnpjMask } from '../../../utils/masks';

export const InputCnpj = ({
  valor = '',
  onChange,
}) => {
  const [ cnpj, setCnpj ] = React.useState(valor);

  React.useEffect(() => {
    setCnpj(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='cnpj'>CNPJ: 00.000.000/0000-00</label>
      <br/>
      <input
        type='text'
        name='cnpj'
        id='cnpj'
        value={cnpjMask(cnpj)}
        onChange={(e) => {
          setCnpj(e.target.value);
          onChange(e);
        }}
      />
    </>
  );
}
