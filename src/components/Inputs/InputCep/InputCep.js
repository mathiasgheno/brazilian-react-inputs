import React from 'react';
import { cepMask } from '../../../utils/masks';
import { Label, Message } from '../Inputs.styled';

export const InputCep = ({
   valor = '',
   onChange = () => {}
}) => {
  const [ cep, setCep ] = React.useState(valor);
  const componentId = React.useId();

  React.useEffect(() => {
    setCep(valor);
  }, [ valor ]);

  const handleOnChangeCep = (e) => {
    if(onChange) onChange(e);
    setCep(e.target.value);
  };

  return (
    <div>
      <Label htmlFor={componentId}>CEP</Label>
      <input
        type='text'
        id={componentId}
        name='zipcode'
        value={cepMask(cep)}
        onChange={handleOnChangeCep}
      />
    </div>
  )
}
