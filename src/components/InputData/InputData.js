import React from 'react';
import { dataMask } from '../../utils/masks';

export const InputData = ({ valor = '', onChange }) => {
  const [data, setData] = React.useState(valor);

  React.useEffect(() => {
    setData(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='data'>Data: 00/00/0000</label>
      <br/>
      <input
        type='text'
        name='data'
        id='data'
        value={dataMask(data)}
        onChange={(e) => {
          onChange(e);
          setData(e.target.value);
        }}
      />
    </>
  )
}
