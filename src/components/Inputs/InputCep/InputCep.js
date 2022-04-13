import React from 'react';
import { cepMask } from '../../../utils/masks';
import { Container, InfoBox, Input } from './InputCep.styled';
import { Message } from '../Inputs.styled';
import { ReactComponent as Info } from '../icons/circle-info-solid.svg';

export const InputCep = ({
   valor = '',
   onChange,
   required = false,
   status = 'valid',
   message = '',
   info = false,
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
    <Container>
      <label htmlFor={componentId}>CEP {info && <InfoBox><Info /></InfoBox>}{required && (<span>*</span>)}</label>
      <Input
        type='text'
        id={componentId}
        name='zipcode'
        valid={status === 'valid'}
        invalid={status === 'invalid'}
        warning={status === 'warning'}
        required={required}
        value={cepMask(cep)}
        onChange={handleOnChangeCep}
      />
      {message && (
        <Message
          valid={status === 'valid'}
          invalid={status === 'invalid'}
          warning={status === 'warning'}
        >
          {message}
        </Message>
      )}
    </Container>
  )
}
