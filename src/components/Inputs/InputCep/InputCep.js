import React from 'react';
import { cepMask } from '../../../utils/masks';
import { Container, InfoBox, Input, Message } from './InputCep.styled';
import { ReactComponent as Info } from '../icons/circle-info-solid.svg';

export const InputCep = ({
   valor = '',
   onChange,
   required = false,
   invalid = false,
   valid = false,
   message = '',
   info = false,
}) => {
  const [ cep, setCep ] = React.useState(valor);

  React.useEffect(() => {
    setCep(valor);
  }, [ valor ]);

  const handleOnChangeCep = (e) => {
    if(onChange) onChange(e);
    setCep(e.target.value);
  };

  return (
    <Container>
      <label htmlFor='zipcode'>CEP {info && <InfoBox><Info /></InfoBox>}{required && (<span>*</span>)}</label>
      <Input
        type='text'
        id='zipcode'
        name='zipcode'
        valid={valid}
        invalid={invalid}
        required={required}
        value={cepMask(cep)}
        onChange={handleOnChangeCep}
      />
      {message && <Message>{message}</Message>}
    </Container>
  )
}
