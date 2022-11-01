import React from 'react';

export function cepMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

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
      <label htmlFor={componentId}>CEP</label>
      <br />
      <input
        type='text'
        placeholder='00000-000'
        id={componentId}
        name='zipcode'
        value={cepMask(cep)}
        onChange={handleOnChangeCep}
      />
    </div>
  )
}
