import React from 'react';

export function cnpjMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const InputCnpj = ({
  valor = '',
  onChange = () => {},
  desabilitado = false,
}) => {
  const [ cnpj, setCnpj ] = React.useState(valor);
  const id = React.useId();

  React.useEffect(() => {
    setCnpj(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor={id}>CNPJ</label>
      <br/>
      <input
        data-testid="input_cnpj"
        type='text'
        name='cnpj'
        id={id}
        placeholder="00.000.000/0000-00"
        disabled={desabilitado}
        value={cnpjMask(cnpj)}
        onChange={(e) => {
          setCnpj(e.target.value);
          onChange(e);
        }}
      />
    </>
  );
}
