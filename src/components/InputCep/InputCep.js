import React from 'react';
import { cepMask } from '../../utils/masks';

export const InputCep = ({ valor = '', onChange }) => {
  const [cep, setCep] = React.useState(valor);

  React.useEffect(() => {
    setCep(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='zipcode'>CEP: 00000-000</label>
      <br/>
      <input
        type='text'
        id='zipcode'
        name='zipcode'
        value={cepMask(cep)}
        onChange={(e) => {
          if(onChange) onChange(e);
          setCep(e.target.value);
        }}
      />
    </>
  )
}
