import Neure from './neure';

export default class Layer {
  constructor(params) {
    const { units, activation, type } = params;
    this.units = units;
    this.neures = Array(units).fill(null);
    this.activation = activation;
  }

  init() {
    this.neures = this.neures.map(() => {
      return new Neure(1, null, true);
    });
  }

  apply(layer) {
    const length = layer.units;
    this.neures = this.neures.map(() => {
      return new Neure(length, this.activation);
    });
  }

  optimize(dw, db, step) {
    for (let i = 0; i < dw.length; i ++) {
      let neure = this.neures[i];
      neure.optimize(dw[i], db, step);
    }
  }
}
