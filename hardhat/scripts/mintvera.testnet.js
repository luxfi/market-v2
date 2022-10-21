const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks


//   const metadataURL =
//     "https://nftstorage.link/ipfs/bafybeih3ahotlfnmvar4cfzureqduoum2aube2wyxj2ohupktgh5ctgry4";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so luxNftstest here is a factory for instances of our LW3Punks contract.
  */
  const luxNftstest = await ethers.getContractFactory("LUXTokens");

  await luxNftstest.attach(0x6d7914af9ca056e16d50a67e0fe9ff818272156a);

  for (i = 0; i > 1111; i++) {
    console.log("minting")
    await luxNftstest.mint();
  }

}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
