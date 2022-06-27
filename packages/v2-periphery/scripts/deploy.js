require('dotenv').config();
const { ContractFactory, providers, Wallet } = require('ethers');
const UniswapV2Router02 = require('../build/UniswapV2Router02.json');


const {
  PRIVATE_KEY,
  PROVIDER_RPC_URL,
} = process.env;



const overrides = { gasPrice: 75000000000 };

async function main() {
  const provider = new providers.JsonRpcProvider(PROVIDER_RPC_URL);
  const wallet =  new Wallet(PRIVATE_KEY, provider);
  console.log('deployer address:', wallet.address);

  const factory = new ContractFactory(UniswapV2Router02.abi, UniswapV2Router02.bytecode, wallet);
  // WMATIC Polygon
  // 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270 mainnet
  // 0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889 mumbai
  // WETH Ethereum networks
  // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 mainnet
  // 0xc778417E063141139Fce010982780140Aa0cD5Ab ropsten rinkeby
  // 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6 goerli
  // 0xd0A1E359811322d97991E03f863a0C30C2cF029C kovan
  // BSC
  // 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c mainnet
  // 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd testnet

  const WETH = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'; // @TODO
  const UniswapV2Factory = '0x2818030e36aFef79a2203069B3f4388Af2Ce012b'; // @TODO
  const args = [UniswapV2Factory, WETH];
  const contract = await factory.deploy(...args, overrides);
  console.log('UniswapV2Router02 address:',contract.address);
  await contract.deployTransaction.wait();

  console.log('Done! Fix UniswapV2Router02 address!');
}
main();
