import React from 'react';

export function dataMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?$/, '$1')
}

export const InputData = ({
  valor = '',
  onChange = () => {},
  desabilitado = false,
}) => {
  const [data, setData] = React.useState(valor);
  const id = React.useId();

  React.useEffect(() => {
    setData(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor={id}>Data</label>
      <br/>
      <input
        data-testid="input_data"
        type='text'
        name='data'
        id={id}
        value={dataMask(data)}
        disabled={desabilitado}
        onChange={(e) => {
          onChange(e);
          setData(e.target.value);
        }}
      />
    </>
  )
}
