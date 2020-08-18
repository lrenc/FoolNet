import Neure from './neure';

export default class Network {
  constructor(shape, activation) {
    this.layers = [];
    this.activation = activation;
    this.init(shape, 1, null, true);
  }

  init(shape, n, activation, firstLayer) {
    if (!shape.length) {
      return;
    }
    const layer = [];
    const l = shape.shift();
    for (let i = 0; i < l; i ++) {
      layer.push(new Neure(n, activation, firstLayer));
    }
    this.layers.push(layer);
    this.init(shape, l, this.activation);
  }

  forward(input) {
    let result = [];
    const inputLayer = this.layers[0];
    if (input.length !== inputLayer.length) {
      throw new Error('error');
    }
    for (let i = 0; i < input.length; i ++) {
      const neure = inputLayer[i];
      const x = input[i];
      result.push(neure.compute([x]));
    }
    const layers = this.layers.slice(1);
    for (let layer of layers) {
      const next = [];
      for (let neure of layer) {
        next.push(neure.compute(result));
      }
      result = next;
    }
    return result;
  }

  backward() {

  }
}
