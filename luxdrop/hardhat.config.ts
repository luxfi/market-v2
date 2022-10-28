import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const GROELI_PRIVATE_KEY = process.env.GROELI_PRIVATE_KEY
const ETHERSCAN = process.env.ETHERSCAN

const config: HardhatUserConfig = {
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
      accounts: [GROELI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN,
    },
  },
};

export default config;
