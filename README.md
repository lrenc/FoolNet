# 简单的全连接神经网络实现

优化器使用批量梯度下降，损失函数使用交叉熵函数，支持sigmoid与tanh两种激活函数

<img src="https://raw.githubusercontent.com/lrenc/FoolNet/master/foolnet.png" width="50%">

```javascript
function fn() {
  let x1 = Math.random();
  let x2 = Math.random();
  let y = 0;
  if (x1 > 0.5 && x2 > 0.5) {
    y = 1;
  } else if (x1 < 0.5 && x2 < 0.5) {
    y = 1;
  }
  return y;
}
```

<img src="https://raw.githubusercontent.com/lrenc/FoolNet/master/result.png" width="150px">
