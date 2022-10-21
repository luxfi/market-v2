const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL =
    'https://gateway.pinata.cloud/ipfs/QmQgQXFmpMNLZrqvxD7KZS6wqxKaKvjrRyRP1TX73biQYA/'
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so luxNftstest here is a factory for instances of our LW3Punks contract.
  */
  const luxNftstest = await ethers.getContractFactory('LUXTokens')

  // deploy the contract
  const deployedluxNftstest = await luxNftstest.deploy(metadataURL)

  await deployedluxNftstest.deployed()

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
