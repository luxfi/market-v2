const { ethers } = require("hardhat");
const { updatePartiallyEmittedExpression } = require("typescript");
require("dotenv").config({ path: ".env" });


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {

  const veraDrop = await ethers.getContractFactory("LuxLUXDrop");
  console.log('1');
  const vera = await veraDrop.deploy();
  console.log('2');

  await vera.deployed();

  console.log('deployed');

  // print the address of the deployed contract
  console.log(
    "Lux test network Contract Address:",
    vera.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
