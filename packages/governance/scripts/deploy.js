require('dotenv').config();
const { ContractFactory, providers, Wallet } = require('ethers');
const FeeTo = require('../build/FeeTo.json');
const FeeToSetter = require('../build/FeeToSetter.json');


const {
  PRIVATE_KEY,
  PROVIDER_RPC_URL,
} = process.env;


const overrides = { gasPrice: 2000000000 };

async function main() {
  const provider = new providers.JsonRpcProvider(PROVIDER_RPC_URL);
  const wallet =  new Wallet(PRIVATE_KEY, provider);
  console.log('deployer address:', wallet.address);

  const factoryFeeTo = new ContractFactory(FeeTo.abi, FeeTo.bytecode, wallet);
  const owner = wallet.address;
  const argsFeeTo = [owner];
  const contractFeeTo = await factoryFeeTo.deploy(...argsFeeTo, overrides);
  console.log('FeeTo address:',contractFeeTo.address);
  await contractFeeTo.deployTransaction.wait();

  const factoryFeeToSetter = new ContractFactory(FeeToSetter.abi, FeeToSetter.bytecode, wallet);
  const UniswapV2Factory = '0x711136f1E0339aad6232414C424784BB389D4f6d'; // @TODO
  const vestingEnd = parseInt(Date.now()/1000 + 300);
  console.log('vestingEnd:', vestingEnd); // ?
  const argsFeeToSetter = [UniswapV2Factory, vestingEnd, owner, contractFeeTo.address];
  const contractFeeToSetter = await factoryFeeToSetter.deploy(...argsFeeToSetter, overrides);
  console.log('FeeToSetter address:',contractFeeToSetter.address);
  await contractFeeToSetter.deployTransaction.wait();

  console.log('Done!');
  console.log('@TODO setFeeToSetter on UniswapV2Factory');
  console.log('@TODO toggleFees true on FeeToSetter');
}
main();
