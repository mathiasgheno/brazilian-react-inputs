import React from 'react';
import { dataMask } from "../../utils/masks";

export const InputData = ({valor = '', onChange}) => {
  return (
    <>
      <label htmlFor='data'>Data: 00/00/0000</label>
      <input
        type='text'
        name='data'
        id='data'
        value={dataMask(valor)}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
