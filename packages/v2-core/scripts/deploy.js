require('dotenv').config();
const { ContractFactory, providers, Wallet } = require('ethers');
const UniswapV2Factory = require('../build/UniswapV2Factory.json');


const {
  PRIVATE_KEY,
  PROVIDER_RPC_URL,
} = process.env;



async function main() {
  const provider = new providers.JsonRpcProvider(PROVIDER_RPC_URL);
  const wallet =  new Wallet(PRIVATE_KEY, provider);
  console.log('deployer address:', wallet.address);

  const factory =  new ContractFactory(UniswapV2Factory.abi, UniswapV2Factory.bytecode, wallet);
  const FeeToSetter = wallet.address;
  const args = [FeeToSetter];
  const contract = await factory.deploy(...args);
  console.log('UniswapV2Factory address:',contract.address);
  await contract.deployTransaction.wait();

  console.log('Done! Fix UniswapV2Factory address!');
}
main();
