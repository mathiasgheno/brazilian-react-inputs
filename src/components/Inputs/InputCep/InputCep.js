import React from 'react';

export function cepMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export const InputCep = ({
   valor = '',
   onChange = () => {},
   desabilitado = false,
}) => {
  const [ cep, setCep ] = React.useState(valor);
  const id = React.useId();

  React.useEffect(() => {
    setCep(valor);
  }, [ valor ]);

  const handleOnChangeCep = (e) => {
    if(onChange) onChange(e);
    setCep(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}>CEP</label>
      <br />
      <input
        data-testid="input_cep"
        type='text'
        placeholder='00000-000'
        id={id}
        name='zipcode'
        value={cepMask(cep)}
        onChange={handleOnChangeCep}
        disabled={desabilitado}
      />
    </div>
  )
}
