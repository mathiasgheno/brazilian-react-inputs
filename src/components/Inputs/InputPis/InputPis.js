import React from 'react';
import { pisMask } from '../../../utils/masks';

export const InputPis = ({ valor = '', onChange = () => {} }) => {
  const [ pis, setPis ] = React.useState(valor);

  React.useEffect(() => {
    setPis(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='pis'>PIS: 000.00000.00-0</label>
      <br/>
      <input
        type='text'
        name='pis'
        id='pis'
        value={pisMask(pis)}
        onChange={(e) => {
          setPis(e.target.value);
          onChange(e);
        }}
      />
    </>
  )
}
