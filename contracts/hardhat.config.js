"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: '.env' });
require('@nomiclabs/hardhat-etherscan');
require("@typechain/hardhat");
require("@nomiclabs/hardhat-ganache"); // for testing
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-contract-sizer");
require("hardhat-gas-reporter");
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || '';
const ETHERSCAN = process.env.ETHERSCAN || '';
const config = {
    paths: {
        sources: './src',
    },
    solidity: {
        compilers: [
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
exports.default = config;
