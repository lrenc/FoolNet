
export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

export function tanh(x) {
  const a = Math.exp(x);
  const b = Math.exp(-x);
  return (a - b) / (a + b);
}

export function relu(x) {
  return Math.max(0, x);
}
