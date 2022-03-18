import React from 'react';
import { phoneMask } from '../../utils/masks';

export const InputTelefone = ({ valor = '', onChange }) => {
  const [ telefone, setTelefone ] = React.useState(valor);

  React.useEffect(() => {
    onChange(telefone);
  }, [ telefone ]);

  return (
    <>
      <label htmlFor='phone'>Telefone: (00) 00000-0000</label>
      <br/>
      <input
        type='text'
        name='phone'
        id='phone'
        value={phoneMask(telefone)}
        onChange={(e) => setTelefone(e.target.value)}
      />
    </>
  )
}
