# @dex/interface
Forked from
[https://github.com/Uniswap/interface/tree/22136b2708f736912fa0ac96d435c0058116f251](https://github.com/Uniswap/interface/tree/22136b2708f736912fa0ac96d435c0058116f251)

## Deployed smart contracts
### Polygon mainnet
  - UniswapV2Factory []();
  - UniswapV2Router02 []();
  - FeeTo []();
  - FeeToSetter []().

### Polygon Mumbai testnet
  - UniswapV2Factory []();
  - UniswapV2Router02 []();
  - FeeTo []();
  - FeeToSetter []().

### Ethereum Rinkeby testnet
  - UniswapV2Factory [0xCB385F3524f7f8caC9454817C0D5633B2936dB87](https://rinkeby.etherscan.io/address/0xCB385F3524f7f8caC9454817C0D5633B2936dB87);
  - UniswapV2Router02 [0xcEc166AE0bc907fcF73859Dc2f7d49f59F78d8D7](https://rinkeby.etherscan.io/address/0xcEc166AE0bc907fcF73859Dc2f7d49f59F78d8D7);
  - FeeTo [0xee73639565CcaAe685aeA44C65D250Fe887A2680](https://rinkeby.etherscan.io/address/);
  - FeeToSetter [0xDa7397441c3D29863beCE6d806275aff829387aB](https://rinkeby.etherscan.io/address/0xDa7397441c3D29863beCE6d806275aff829387aB).

## Install & Compile
```bash
yarn install
yarn workspace @dex/lib run compile
yarn workspace @dex/v2-core run compile
yarn workspace @dex/governance run compile
yarn workspace @dex/v2-periphery run compile
yarn workspace @dex/v2-sdk run build
yarn workspace @dex/default-token-list run build
yarn run start
```

## Deploy
```bash
# 1. UniswapV2Factory
#  - dex-monorepo/packages/v2-core/contracts/UniswapV2Factory.sol
yarn workspace @dex/v2-core run deploy

# 2. UniswapV2Router02
#  - dex-monorepo/packages/v2-periphery/contracts/UniswapV2Router02.sol
# Depends UniswapV2Factory address, WETH address
yarn workspace @dex/v2-periphery run deploy
yarn workspace @dex/v2-periphery waffle flatten

# 3. FeeTo, FeeToSetter
#  - dex-monorepo/packages/governance/contracts/FeeTo.sol
#  - dex-monorepo/packages/governance/contracts/FeeToSetter.sol
yarn workspace @dex/governance run deploy
yarn workspace @dex/governance waffle flatten

# 4. setFeeToSetter on UniswapV2Factory

# 5. toggleFees true on FeeToSetter
```

```
FACTORY_ADDRESS
```

## Transfer Ownership
```bash
# 1. setOwner on FeeTo
# 2. setOwner on FeeToSetter
```

Fix
```
yarn cache clean
#npx eslint --fix local/path/to/component.tsx
```

https://abi.hashex.org/
