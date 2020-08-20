import Layer from './layer';
import Model from './Model';
import { getTrainData } from './data';
import './test';

const l0 = new Layer({
  type: 'inputLayer',
  units: 2
});

const l1 = new Layer({
  activation: 'sigmoid',
  units: 3
});

const l2 = new Layer({
  activation: 'sigmoid',
  units: 3
});

const l3 = new Layer({
  activation: 'sigmoid',
  units: 1
});

const model = new Model([l0, l1, l2, l3]);

let step = 2;
for (let i = 0; i < 5000; i ++) {
  if (i % 1000 === 0) {
    step /= 2;
  }
  model.fit(...getTrainData(), { step });
}
console.log(model.predict([0.1, 0.1])); // 1
console.log(model.predict([0.2, 0.2])); // 1
console.log(model.predict([0.3, 0.3])); // 1
console.log(model.predict([0.9, 0.1])); // 0
console.log(model.predict([0.1, 0.9])); // 0
console.log(model.predict([0.6, 0.6])); // 0
console.log(model.predict([0.9, 0.9])); // 0
