
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { LuxDrop } from "../typechain-types/contracts/LuxDrop";
import { LuxDrop__factory } from "../typechain-types/factories/contracts/LuxDrop__factory";

describe ("LuxDrop", function () {

    let luxDrop: LuxDrop;

    let owner: Signer
    let minter: Signer
    let amanda: Signer
    let ben: Signer
    let charlie: Signer
    let bridge: Signer

    beforeEach(async () => {
        [owner, minter, bridge, amanda, ben, charlie] = await ethers.getSigners();

        let luxDrop = await new LuxDrop__factory(owner).deploy(
            owner.getAddress(),
            minter.getAddress(),
            "ipfs://somewhere/",
            ethers.utils.formatBytes32String("merkleroot")
        );
    });

    it('LUX', async function () {
        it('addDrop ', async function () {

            //mint 30 tokens 
            await luxDrop.addDrop("http://jawn.net/whack.json", 30);

            let balance: BigNumber = await luxDrop.balanceOf(owner.getAddress())

            console.log(balance);
            //xsexpect(balance).to.eq(0);

            // let uri = await luxDrop.tokenURI(29)

            // console.log(uri)
            // expect(uri).to.be("tooth");
            //console.log(luxDrop.totalSupply_);

        });
    });
    
});

