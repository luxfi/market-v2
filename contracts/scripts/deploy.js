<<<<<<< HEAD
const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })
=======
const { ethers } = require("hardhat");
const { updatePartiallyEmittedExpression } = require("typescript");
require("dotenv").config({ path: ".env" });
>>>>>>> 993dbd0 (nft new)


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
  // URL from where we can extract the metadata for a LW3Punks


  const metadataURL =
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    'https://gateway.pinata.cloud/ipfs/QmQgQXFmpMNLZrqvxD7KZS6wqxKaKvjrRyRP1TX73biQYA/'
=======
    "https://nftstorage.link/ipfs/bafybeics3tb4ms3c55ditmrdisxpp7w7q4wzbsj764eibcr75ir7qpanfu";
>>>>>>> 2421992 (nft)
=======
    "https://nftstorage.link/ipfs/bafybeih3ahotlfnmvar4cfzureqduoum2aube2wyxj2ohupktgh5ctgry4";
>>>>>>> f2a50e0 (uranium)
=======
    "https://bafybeigj5yrweoeecrsleib5ikb6drupbdbyj6amrasp7blhphqwoa2m2i.ipfs.nftstorage.link/";
>>>>>>> 993dbd0 (nft new)
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so luxNftstest here is a factory for instances of our LW3Punks contract.
  */
  const luxNftstest = await ethers.getContractFactory('LUXTokens')

  // deploy the contract
  const deployedluxNftstest = await luxNftstest.deploy(metadataURL)

  await deployedluxNftstest.deployed()

  // for (i=0;i < 1111; i++){
  //   await deployedluxNftstest.mint();
  //   console.log(i);
  //   sleep(1000);
  // }
  
  // print the address of the deployed contract
  console.log('Lux test network Contract Address:', deployedluxNftstest.address)
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
