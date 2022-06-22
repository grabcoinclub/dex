require('dotenv').config();
const { ContractFactory, providers, Wallet } = require('ethers');
const UniswapV2Router02 = require('../build/UniswapV2Router02.json');


const {
  PRIVATE_KEY,
  PROVIDER_RPC_URL,
} = process.env;



async function main() {
  const provider = new providers.JsonRpcProvider(PROVIDER_RPC_URL);
  const wallet =  new Wallet(PRIVATE_KEY, provider);
  console.log('deployer address:', wallet.address);

  const factory = new ContractFactory(UniswapV2Router02.abi, UniswapV2Router02.bytecode, wallet);
  // WMATIC Polygon
  // 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889 mainnet
  // 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889 mumbai
  // WETH Ethereum networks
  // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 mainnet
  // 0xc778417E063141139Fce010982780140Aa0cD5Ab ropsten rinkeby
  // 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6 goerli
  // 0xd0A1E359811322d97991E03f863a0C30C2cF029C kovan

  const WETH = '0xc778417E063141139Fce010982780140Aa0cD5Ab'; // @TODO
  const UniswapV2Factory = '0xCB385F3524f7f8caC9454817C0D5633B2936dB87'; // @TODO
  const args = [UniswapV2Factory, WETH];
  const contract = await factory.deploy(...args);
  console.log('UniswapV2Router02 address:',contract.address);
  await contract.deployTransaction.wait();

  console.log('Done! Fix UniswapV2Router02 address!');
}
main();
