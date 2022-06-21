const web3 = require('web3');
const UniswapV2Pair = require('../build/UniswapV2Pair.json');



console.log(
  'UniswapV2Pair bytecode hash:\n%s',
  (web3.utils.keccak256(`0x${UniswapV2Pair.bytecode}`)).substring(2)
);
