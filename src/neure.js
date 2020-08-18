
export default class Neure {
  constructor(length, activation, original = false) {
    this.activation = activation;
    this.b = original ? 0 : Math.random();
    this.weights = [];
    for (let i = 0; i < length; i ++) { // 随机初始化权重
      const weight = original ? 1 : Math.random()
      this.weights.push(weight);
    }
  }

  compute(input) {
    if (input.length !== this.weights.length) {
      console.log(input, this.weights);
      throw new Error('error');
    }
    let result = 0;
    // 加权求和
    for (let i = 0; i < input.length; i ++) {
      result = this.weights[i] * input[i];
    }
    result += this.b;
    // 激活函数处理
    if (typeof this.activation === 'function') {
      result = this.activation(result);
    }
    return result;
  }
}
