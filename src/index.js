import Layer from './layer';
import Model from './model';
import { getTrainData, getTestData } from './data';
import './index.css';

const l0 = new Layer({
  units: 2
});

const l1 = new Layer({
  activation: 'tanh',
  units: 3
});

const l2 = new Layer({
  activation: 'tanh',
  units: 3
});

const l3 = new Layer({
  activation: 'sigmoid',
  units: 1
});

const model = new Model([l0, l1, l2, l3]);

let step = 2;
for (let i = 0; i < 8000; i ++) {
  if (i % 1000 === 0) {
    step /= 2;
  }
  model.fit(...getTrainData(), { step });
}

const canvas = document.getElementById('canvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');

function drawPoint(x, y, color) {
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function test() {
  const [inputs, labels] = getTestData();
  for (let i = 0; i < inputs.length; i ++) {
    const input = inputs[i];
    const label = labels[i];
    // const output = model.predict(input)[0];
    const output = model.predict(input)[0];
    const x1 = input[0] * width;
    const x2 = input[1] * height;
    let color;
    if (output <= 0.5) {
      color = `rgb(255, 0, 0)`;
    } else {
      color = `rgb(0, 0, 255)`;
    }
    drawPoint(x1, x2, color);
  }
}

test();
