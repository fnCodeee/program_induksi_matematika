const bilanganGanjil = (n) => {
  let deret = [];
  if (n <= 0 || isNaN(n)) {
    return { deret: [], total: null, error: "Input harus lebih dari 0!" };
  }
    for (let i = 1; i <= n; i++) {
      deret.push(2 * i - 1);
    }
    // const deretOutput = deret.join(" + ")
    let total = n * n;
    return { deret, total, error: null };
};

const bilanganKuadrat = (n) => {
  let kurung1 = n + 1;
  let kurung2 = 2 * n + 1;
  let penyebut = n * kurung1 * kurung2;
  return penyebut / 6;
};

export { bilanganKuadrat, bilanganGanjil };
