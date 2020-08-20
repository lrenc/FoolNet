
function format(a, b) {
  const setArray = function(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i ++) {
      result[i] = [];
      for (let j = 0; j < arr[0].length; j ++) {
        result[i][j] = n;
      }
    }
    return result;
  }
  if (typeof a === 'number') {
    a = setArray(b, a);
  } else if (typeof b === 'number') {
    b = setArray(a, b);
  }
  return [a, b];
}
// 矩阵乘法
export function dot(a, b) {
  if (a[0].length !== b.length) {
    return null;
  }
  let y = a.length;
  let x = b[0].length;
  let c = Array(y);
  for (let i = 0; i < y; i ++) {
    c[i] = Array(x).fill(0);
  }
  for (let i = 0; i < y; i ++) {
    for (let j = 0; j < x; j ++) {
      for (let k = 0; k < b.length; k ++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return c;
}

// 二维数组相减
export function sub(a, b) {
  ([a, b] = format(a, b));
  const result = [];
  for (let i = 0; i < a.length; i ++) {
    result[i] = [];
    for (let j = 0; j < a[i].length; j ++) {
      result[i].push(a[i][j] - b[i][j]);
    }
  }
  return result;
}

// 数组转置
export function transpose(arr) {
  const result = [];
  for (let i = 0; i < arr[0].length; i ++) {
    result[i] = [];
    for (let j = 0; j < arr.length; j ++) {
      result[i][j] = arr[j][i];
    }
  }
  return result;
}

export function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr[0].length; j ++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

export function power(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i ++) {
    result[i] = [];
    for (let j = 0; j < arr[0].length; j ++) {
      result[i][j] = Math.pow(arr[i][j], n);
    }
  }
  return result;
}

export function div(a, b) {
  ([a, b] = format(a, b));
  const result = [];
  for (let i = 0; i < a.length; i ++) {
    result[i] = [];
    for (let j = 0; j < a[0].length; j ++) {
      result[i][j] = a[i][j] / b[i][j];
    }
  }
  return result;
}

export function mul(a, b) {
  ([a, b] = format(a, b));
  const result = [];
  for (let i = 0; i < a.length; i ++) {
    result[i] = [];
    for (let j = 0; j < a[0].length; j ++) {
      result[i][j] = a[i][j] * b[i][j];
    }
  }
  return result;
}

export function last(arr) {
  return arr[arr.length - 1];
}
