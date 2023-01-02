require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const GROELI_PRIVATE_KEY = process.env.GROELI_PRIVATE_KEY
const ETHERSCAN = process.env.ETHERSCAN

module.exports = {
  solidity: '0.8.4',
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
}
