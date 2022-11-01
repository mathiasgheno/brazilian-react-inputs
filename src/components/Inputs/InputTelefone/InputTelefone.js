import React from 'react';

export function phoneMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

export const InputTelefone = ({ valor = '', onChange = () => {} }) => {
  const [ telefone, setTelefone ] = React.useState(valor);

  React.useEffect(() => {
    setTelefone(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='phone'>Telefone: (00) 00000-0000</label>
      <br/>
      <input
        type='text'
        name='phone'
        id='phone'
        value={phoneMask(telefone)}
        onChange={(e) => {
          setTelefone(e.target.value);
          onChange(e);
        }}
      />
    </>
  )
}
