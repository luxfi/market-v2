import '@nomiclabs/hardhat-ethers';
// import { ethers, network } from 'hardhat';

const { ethers } = require("hardhat");

import { LuxNFT__factory } from "../typechain-types/factories/src/LuxNFT__factory";
import { LuxNFT } from "../typechain-types/src/LuxNFT";

const template = require("./template.json");


 
async function main() {

  const [owner] = await ethers.getSigners();
  let luxNFT : LuxNFT;

  let LuxNFTFactory =  new LuxNFT__factory(owner);
  let luxnft = LuxNFTFactory.deploy(
    owner.address, 
    owner.address, 
    "https://nftstorage.link/ipfs/bafybeiaegh7tescclcfr6lqxuvwj6ts7kaq354s2xrikllez4ih7idt6x4/",
    ethers.utils.formatBytes32String("genesis")
    );

    console.log((await luxnft).address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// CID 

// bafybeiaegh7tescclcfr6lqxuvwj6ts7kaq354s2xrikllez4ih7idt6x4

// IPFS URL 

// ipfs://bafybeiaegh7tescclcfr6lqxuvwj6ts7kaq354s2xrikllez4ih7idt6x4

// Gateway URL 

// https://nftstorage.link/ipfs/bafybeiaegh7tescclcfr6lqxuvwj6ts7kaq354s2xrikllez4ih7idt6x4