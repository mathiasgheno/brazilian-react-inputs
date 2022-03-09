export function cpfMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export function numberMask (value) {

  console.log(value);

  if(value.length <= 6) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{1,2})/, '$1,$2')
      .replace(/(,\d{2})\d+?$/, '$1')
  }

  // TODO achar o padrão
  // % de 10 para primeira captura?

  if(value.length >= 27) {
    // 100.000.000.000.000.000,000 - 1.000.000.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5.$6.$7,$8')
  }

  if(value.length >= 26) {
    // 10.000.000.000.000.000,000 - 100.000.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5.$6,$7')
  }

  if(value.length >= 24) {
    // 1.000.000.000.000.000,000 - 10.000.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5.$6,$7')
  }

  if(value.length >= 23) {
    //  100.000.000.000.000,000 - 1.000.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5.$6,$7')
  }

  if(value.length >= 22) {
    //  10.000.000.000.000,000 - 100.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5,$6')
  }

  if(value.length >= 21) {
    //  1.000.000.000.000,000 - 10.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5,$6')
  }

  if(value.length >= 19) {
    // 100.000.000.000,000 -> 1.000.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4.$5,$6')
  }

  if(value.length >= 18) {
    //10.000.000.000,000 -> 100.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4,$5')
  }

  if(value.length >= 17) {
    //1.000.000.000,000 -> 10.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4,$5')
  }

  if(value.length >= 15) {
    // 100.000.000,000 -> 1.000.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3.$4,$5')
  }

  if(value.length >= 14) {
    // 10.000.000,000 -> 100.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3,$4')
  }

  if(value.length >= 13) {
    // 1.000.000,000 -> 10.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3,$4')
  }

  if(value.length >= 11) {
    // 100.000,000 -> 1.000.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3,$4')
  }

  if(value.length >= 10) {
    // 10.000,000 -> 100.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{1,2})/, '$1.$2,$3')
  }

  if(value.length >= 9) {
    // 1.000,000 -> 10.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{3})(\d{1,2})/, '$1.$2,$3')
  }

  if(value.length >= 6) {
    // 100,000 -> 1.000,00
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{3})(\d{1,2})/, '$1.$2,$3')

  }

  // 100      -> 100,00
  // 1000     -> 1.000,00
  // 10000    -> 10.000,00
  // 100000   -> 100.000,00
  // 1000000  -> 1.000.000,00

  // return value
  //   .replace(/\D/g, '')
  //   .replace(/(\d{3})(\d{1,2})/, '$1,$2')
  //   .replace(/(,\d{2})\d+?$/, '$1')
  // console.log(value);
  //
  // return value
  //   .replace(/\D/g, '')
  //   .replace(/(\d{3})(\d{1,2})/, '$1,$2')
    // .replace()
}

export function dataMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\/\d{4})\d+?$/, '$1')
}

export function cnpjMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export function phoneMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

export function cepMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
}

export function pisMask (value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{5})(\d)/, '$1.$2')
    .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
    .replace(/(-\d{1})\d+?$/, '$1')
}
