
function random() {
  return Math.random() * 2 - 1;
}

export default class Neure {
  constructor(length, activation, flag) {
    this.length = length;
    this.activation = activation;
    this.b = flag ? 0 : random();
    this.weights = [];
    for (let i = 0; i < length; i ++) { // 随机初始化权重
      const weight = flag ? 1 : random();
      this.weights.push(weight);
    }
  }

  // 加权求和
  predict(input) {
    let length = input.length;
    let result = 0;
    if (length !== this.length) {
      throw new Error('输入数据与神经元权重长度不一致。');
    }
    for (let i = 0; i < length; i ++) {
      result += this.weights[i] * input[i];
    }
    result += this.b;
    // 激活函数处理
    if (this.activation) {
      result = this.activation(result);
    }
    return result;
  }

  optimize(dw, db, step = 0.01) {
    this.b -= db * step;
    for (let i = 0; i < this.length; i ++) {
      let weight = this.weights[i];
      this.weights[i] -= dw[i] * step;
    }
  }
}
