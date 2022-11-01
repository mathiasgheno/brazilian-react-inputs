import React from 'react';

export function numberMask(value, decimal = 2) {

  const decimalReg = new RegExp(`(\\d+)(\\d{${decimal}}$)`);

  let finalMask = value.replace(/,/g, '').replace(/\./g, '')

  finalMask = decimal > 0 ? finalMask.replace(decimalReg, '$1,$2') : finalMask;

  const milharReg = /(\d{1,})(\d{3})/g

  while(milharReg.test(finalMask)) {
    finalMask = finalMask.replace(milharReg, '$1.$2')
  }

  return finalMask;
}

export const InputNumero = ({
  onChange = () => {},
  valor = '',
  casasDecimais = 2,
}) => {
  const [numero, setNumero] = React.useState(valor);

  React.useEffect(() => {
    setNumero(valor);
  }, [ valor ]);

  return (
    <>
      <label htmlFor='numero'>Numero: 000,00</label>
      <br/>
      <input
        type='text'
        name='numero'
        id='numero'
        value={numberMask(numero, casasDecimais)}
        onChange={(e) => {
          setNumero(e.target.value);
          onChange(e);
        }}
      />
    </>
  )
}
