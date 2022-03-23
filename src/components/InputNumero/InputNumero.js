import React from 'react';
import { numberMask } from '../../utils/masks';

export const InputNumero = ({ onChange, valor = '' }) => {
  const [numero, setNumero] = React.useState(valor);

  React.useEffect(() => {
    setNumero(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='numero'>Numero: 000,00</label>
      <br/>
      <input
        type='text'
        name='numero'
        id='numero'
        value={numberMask(numero)}
        onChange={(e) => {
          setNumero(e.target.value);
          onChange(e);
        }}
      />
    </>
  )
}
