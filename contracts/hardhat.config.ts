import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')

import '@typechain/hardhat';
import '@nomiclabs/hardhat-ganache'; // for testing
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-contract-sizer';
import "hardhat-gas-reporter"

require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || ''
const ETHERSCAN = process.env.ETHERSCAN || ''

const config: HardhatUserConfig = {
  paths: {
    sources: './src',
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.8.7",
      },
      {
        version: "0.8.17",
      },
    ],
  },
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN,
    },
  },
};

export default config;
