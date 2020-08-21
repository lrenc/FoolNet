
export function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

export function tanh(x) {
  return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x))
}
