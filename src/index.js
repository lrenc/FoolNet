import Network from './network';
import { sigmoid } from './activation';

function main() {
  const network = new Network([2, 3, 3, 1], sigmoid);
  const result = network.forward([1, 1]);
  console.log(result);
}

main();
