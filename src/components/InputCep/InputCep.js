import React from 'react';
import { cepMask } from "../../utils/masks";

export const InputCep = ({ valor = '', onChange }) => {
  return (
    <>
      <label htmlFor='zipcode'>CEP: 00000-000</label>
      <input
        type='text'
        id='zipcode'
        name='zipcode'
        value={cepMask(valor)}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
