const { ethers} = require("hardhat");
require("dotenv").config({ path: ".env" });

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function main() {
  const luxNftstest = await ethers.getContractFactory("LUXTokens");
  console.log("wow");

  let contract = await luxNftstest.attach("0x256E6b3199eC11129a84c4Ae6c3704c7beC6213E");
  
  for (let i = 0; i < 1111; i++) {
    try {
      console.log(i);
      await contract.mint(
        {
          value: ethers.utils.parseEther("0.001")
        }
      );
      sleep(6000);
    } catch (e) {
      console.log(e);
    }
  }
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
