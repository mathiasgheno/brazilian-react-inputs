import React from 'react';

export function pisMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
    .replace(/(-\d{1})\d+?$/, '$1')
}

export const InputPis = ({ valor = '', onChange = () => {} }) => {
  const [ pis, setPis ] = React.useState(valor);

  React.useEffect(() => {
    setPis(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='pis'>PIS: 000.00000.00-0</label>
      <br/>
      <input
        type='text'
        name='pis'
        id='pis'
        value={pisMask(pis)}
        onChange={(e) => {
          setPis(e.target.value);
          onChange(e);
        }}
      />
    </>
  )
}
