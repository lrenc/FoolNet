
export function getTrainData() {
  const inputs = [];
  const labels = [];
  for (let i = 0; i < 300; i ++) {
    let x1 = Math.random();
    let x2 = Math.random();
    let y = 0;
    if (x1 <= 0.5 && x2 <= 0.5) {
      y = 1;
    }
    inputs.push([x1, x2]);
    labels.push([y]);
  }
  return [inputs, labels];
}
