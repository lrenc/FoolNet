
import Layer from './layer';
import * as derivate from './derivative';
import { dot, sub, sum, power, transpose, div, mul, add } from './util';

export default class Network {
  constructor(layers) {
    const layer = layers[0];
    layer.init();
    for (let i = 0; i < layers.length - 1; i ++) {
      const curr = layers[i];
      const next = layers[i + 1];
      next.apply(curr);
    }
    this.layers = layers;
  }

  predict(input, layers) {
    let result = [];
    if (!layers) {
      layers = this.layers;
    }
    const inputLayer = layers[0];
    for (let i = 0; i < input.length; i ++) {
      const neure = inputLayer.neures[i];
      const x = input[i];
      result.push(neure.predict([x]));
    }
    layers = layers.slice(1);
    for (let layer of layers) {
      const next = [];
      for (let neure of layer.neures) {
        next.push(neure.predict(result));
      }
      result = next;
    }
    return result;
  }

  multiPredict(inputs, layers) {
    return inputs.map(input => this.predict(input, layers));
  }

  fit(inputs, labels, configs = {}) {
    const dws = [];
    const dbs = [];
    const size = inputs.length;
    let layers = this.layers.slice();
    let p = this.multiPredict(inputs);
    let lastLayer = layers.pop();
    let activation = lastLayer.activation;
    let dz;
    if (activation === 'sigmoid') {
      dz = sub(p, labels); // 二维数组
    } else {
      dz = div(mul(sub(p, labels), add(1, p)), p);
    }
    p = this.multiPredict(inputs, layers);
    let dw = div(dot(transpose(dz), p), size); // A1
    let db = sum(dz) / size;
    dws.unshift(dw);
    dbs.unshift(db);
    while (true) {
      const w = lastLayer.neures.map(neure => neure.weights);
      lastLayer = layers.pop();
      activation = lastLayer.activation;
      if (activation === 'sigmoid') {
        dz = mul(dot(dz, w), sub(p, power(p, 2)));
      } else {
        dz = mul(dot(dz, w), sub(1, power(p, 2)));
      }
      if (layers.length === 0) {
        break;
      }
      p = this.multiPredict(inputs, layers);
      dw = div(dot(transpose(dz), p), size);
      db = sum(dz) / size;
      dws.unshift(dw);
      dbs.unshift(db);
    }
    for (let i = 0; i < dws.length; i ++) {
      const dw = dws[i];
      const db = dbs[i];
      const layer = this.layers[i + 1];
      const { step } = configs;
      layer.optimize(dw, db, step);
    }
  }
}
