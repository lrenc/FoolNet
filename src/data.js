
function fn(x1, x2) {
  let y = 0;
  if (x1 > 0.5 && x2 > 0.5) {
    y = 1;
  } else if (x1 < 0.5 && x2 < 0.5) {
    y = 1;
  }
  return y;
}

export function getTrainData() {
  const inputs = [];
  const labels = [];
  for (let i = 0; i < 100; i ++) {
    let x1 = Math.random();
    let x2 = Math.random();
    let y = fn(x1, x2);
    inputs.push([x1, x2]);
    labels.push([y]);
  }
  return [inputs, labels];
}

export function getTestData() {
  const inputs = [];
  const labels = [];
  for (let i = 0; i < 8000; i ++) {
    let x1 = Math.random();
    let x2 = Math.random();
    let y = fn(x1, x2);
    inputs.push([x1, x2]);
    labels.push([y]);
  }
  return [inputs, labels];
}
