
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, constants, Signer } from "ethers";
import { deployContract } from "@nomiclabs/hardhat-ethers/types";
import { LuxNFT } from "../typechain-types/src/LuxNFT";
import { LuxNFT__factory } from "../typechain-types/factories/src/LuxNFT__factory";


describe ("LuxNFT", function () {

    let luxNFT: LuxNFT;

    let owner: Signer
    let minter: Signer
    let amanda: Signer
    let ben: Signer
    let charlie: Signer
    let bridge: Signer

    beforeEach(async () => {
        [owner, minter, bridge, amanda, ben, charlie] = await ethers.getSigners();

        let luxNFT = await new LuxNFT__factory(owner).deploy(
            owner.getAddress(),
            minter.getAddress(),
            "ipfs://somewhere/",
            ethers.utils.formatBytes32String("merkleroot")
        );

            //                                  Whitelist Sale

    describe('WhiteList', async function () {
      // setProvenanceHash
      it('owner should set the provenance hash', async function () {
        expect(await luxNFT.setProvenanceHash('c92b0386542d8beb8fb167aed611e73c5f30250a083f54edf78653946a8a6913')).to.eq(true);
      });
      // setBeneficiary
      it('owner should set beneficiary', async function () {
        expect(await luxNFT.setBeneficiary('0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54')).to.eq(true);
      });
      // setRoyalties
      it('owner should set royalties', async function () {
        expect(await luxNFT.setRoyalties('0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54')).to.eq(true);
      });
      // setPublicActive
      it('owner should set if a public sale is active', async function () {
        expect(await luxNFT.setPublicActive(true)).to.eq(true);
      });
      // setWhiteListActive
      it('owner should set if the whitelist sale is active', async function () {
        expect(await luxNFT.setWhitelistActive(true)).to.eq(true);
      });
      // test the white list minting with the merkeltree api https://www.youtube.com/watch?v=jUlvGjEWzxg
      // isValid
      

      // whitelistMint
      //whitelistRootHash 0xa01421f53810e3b8610d0920466079a68de62ae71ae8ae65d490142efdea0dd2
      it('should mint to white list', async function () {
        await luxNFT.setMerkleRoot('0xa01421f53810e3b8610d0920466079a68de62ae71ae8ae65d490142efdea0dd2');
        
      });

      
    });

  //                                   Public Sale

  //                                     Owner

  //                                     Private

    });




 





    
});




