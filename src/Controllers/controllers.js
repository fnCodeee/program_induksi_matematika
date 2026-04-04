const bilanganKuadrat = (n) => {
  let kurung1 = n + 1
  let kurung2 = 2 * n + 1
  let penyebut = n * kurung1 * kurung2
  return penyebut / 6
}

const bilanganGanjil = (n) => {
  return n * n
}

export { bilanganKuadrat, bilanganGanjil}