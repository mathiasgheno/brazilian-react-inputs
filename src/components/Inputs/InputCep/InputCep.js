import React from 'react';
import { cepMask } from '../../../utils/masks';
import { Container, Input, Message } from './InputCep.styled';

export const InputCep = ({
   valor = '',
   onChange,
   required = false,
   invalid = false,
   valid = false,
   message = '',
}) => {
  const [ cep, setCep ] = React.useState(valor);

  React.useEffect(() => {
    setCep(valor);
  }, [ valor ]);

  return (
    <Container>
      <label htmlFor='zipcode'>CEP {required && (<span>*</span>)}</label>
      <Input
        type='text'
        id='zipcode'
        name='zipcode'
        invalid={invalid}
        valid={valid}
        value={cepMask(cep)}
        onChange={(e) => {
          if(onChange) onChange(e);
          setCep(e.target.value);
        }}
      />
      {message && <Message>{message}</Message>}
    </Container>
  )
}
