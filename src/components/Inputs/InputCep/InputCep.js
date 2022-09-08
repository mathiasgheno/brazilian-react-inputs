import React from 'react';
import { cepMask } from '../../../utils/masks';
import { Container, Input } from './InputCep.styled';
import { Label, Message } from '../Inputs.styled';
import { TooltipInfo } from '../TooltipInfo/TooltipInfo';

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
      <Label htmlFor={componentId}>CEP {info && <TooltipInfo />}{required && (<span>*</span>)}</Label>
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
