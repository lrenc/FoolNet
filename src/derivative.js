// 激活函数的导函数
export function sigmoid(a) {
  return a * (1 - a);
}

export function tanh(a) {
  return 1 - Math.pow(a, 2);
}
