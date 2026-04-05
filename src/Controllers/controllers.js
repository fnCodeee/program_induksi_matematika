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
  if (n <= 0 || isNaN(n)) {
    return { deret: [], total: null, error: "Input harus lebih dari 0!" };
  }
  let deret = [];
  for (let i = 1; i <= n; i++) {
    deret.push(`${i}²`); // Menampilkan simbol kuadrat agar lebih jelas
  }
  let total = (n * (n + 1) * (2 * n + 1)) / 6;
  return { deret, total, error: null };
};

export { bilanganKuadrat, bilanganGanjil };
