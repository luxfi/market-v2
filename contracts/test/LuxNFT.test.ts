
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber, Signer } from "ethers";
import { LuxDrop } from "../typechain-types/contracts/LuxDrop";
import { LuxDrop__factory } from "../typechain-types/factories/contracts/LuxDrop__factory";
import { deployContract } from "@nomiclabs/hardhat-ethers/types";

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

        let luxNFT = await new LuxDrop__factory(owner).deploy(
            owner.getAddress(),
            minter.getAddress(),
            "ipfs://somewhere/",
            ethers.utils.formatBytes32String("merkleroot")
        );

const createTestSuite = ({ contract, constructorArgs }: {contract: any; constructorArgs: any}) =>
  async function () {
    let offsetted: (...arr: any[]) => any;

    context(`${contract}`, function () {
      beforeEach(async function () {
        this.LuxNFT = await deployContract(contract, constructorArgs);
        this.receiver = await deployContract('ERC721ReceiverMock', [RECEIVER_MAGIC_VALUE, this.LuxNFT.address]);
        this.startTokenId = this.LuxNFT.startTokenId ? (await this.LuxNFT.startTokenId()).toNumber() : 0;

        offsetted = (...arr) => offsettedIndex(this.startTokenId, arr);
      });
    });

    it('LUX', async function () {
        it('addDrop ', async function () {

            //mint 30 tokens 
            await luxNFT.addDrop("http://jawn.net/whack.json", 30);

            let balance: BigNumber = await luxNFT.balanceOf(owner.getAddress())

            console.log(balance);
            //xsexpect(balance).to.eq(0);

            // let uri = await luxNFT.tokenURI(29)

            // console.log(uri)
            // expect(uri).to.be("tooth");
            //console.log(luxNFT.totalSupply_);

        });
    });
    
});
}


// import { ethers } from 'hardhat';

// import { deployContract, getBlockTimestamp, mineBlockTimestamp, offsettedIndex } from './helpers.js';
// import { expect } from 'chai';
// import { BigNumber } from 'ethers';
// import { constants } from '@openzeppelin/test-helpers';
// import { hrtime } from 'process';
// const { ZERO_ADDRESS } = constants;

// const RECEIVER_MAGIC_VALUE = '0x150b7a02';
// const GAS_MAGIC_VALUE = 20000;

// const createTestSuite = ({ contract, constructorArgs }: {contract: any; constructorArgs: any}) =>
//   function () {
//     let offsetted: (...arr: any[]) => any;

//     context(`${contract}`, function () {
//       beforeEach(async function () {
//         this.LuxNFT = await deployContract(contract, constructorArgs);
//         this.receiver = await deployContract('ERC721ReceiverMock', [RECEIVER_MAGIC_VALUE, this.LuxNFT.address]);
//         this.startTokenId = this.LuxNFT.startTokenId ? (await this.LuxNFT.startTokenId()).toNumber() : 0;

//         offsetted = (...arr) => offsettedIndex(this.startTokenId, arr);
//       });

//       // metadata functions must be tested

//       describe('ERC721Metadata support', async function () {
//         it.only('name', async function () {
//           const LuxNFT = await ethers.getContractFactory('LuxNFT');
//           expect(await this.LuxNFT.name()).to.eq(constructorArgs[0]);
//         });

//         it('symbol', async function () {
//           expect(await this.LuxNFT.symbol()).to.eq(constructorArgs[1]);
//         });

//         describe('baseURI', async function () {
//           it('sends an empty URI by default', async function () {
//             expect(await this.LuxNFT.baseURI()).to.eq('');
//           });
//         });
//       });

//       describe('tokenURI (ERC721Metadata)', async function () {
//         describe('tokenURI', async function () {
//           it('sends an empty uri by default', async function () {
//             expect(await this.LuxNFT.tokenURI(offsetted(0))).to.eq('');
//           });

//           it('reverts when tokenId does not exist', async function () {
//             await expect(this.LuxNFT.tokenURI(offsetted(this.expectedMintCount))).to.be.revertedWith(
//               'URIQueryForNonexistentToken'
//             );
//           });
//         });
//       });

//       // public sale

//       context('with no minted tokens', async function () {
//         it('has 0 totalSupply', async function () {
//           const supply = await this.LuxNFT.totalSupply();
//           expect(supply).to.equal(0);
//         });

//         it('has 0 totalMinted', async function () {
//           const totalMinted = await this.LuxNFT.totalMinted();
//           expect(totalMinted).to.equal(0);
//         });

//         it('has 0 totalBurned', async function () {
//           const totalBurned = await this.LuxNFT.totalBurned();
//           expect(totalBurned).to.equal(0);
//         });

//         it('_nextTokenId must be equal to _startTokenId', async function () {
//           const nextTokenId = await this.LuxNFT.nextTokenId();
//           expect(nextTokenId).to.equal(offsetted(0));
//         });
//       });

//       context('with minted tokens', async function () {
//         beforeEach(async function () {
//           const [owner, addr1, addr2, addr3, addr4] = await ethers.getSigners();
//           this.owner = owner;
//           this.addr1 = addr1;
//           this.addr2 = addr2;
//           this.addr3 = addr3;
//           this.addr4 = addr4;
//           this.expectedMintCount = 6;

//           this.addr1.expected = {
//             mintCount: 1,
//             tokens: [offsetted(0)],
//           };

//           this.addr2.expected = {
//             mintCount: 2,
//             tokens: offsetted(1, 2),
//           };

//           this.addr3.expected = {
//             mintCount: 3,
//             tokens: offsetted(3, 4, 5),
//           };

//           await this.LuxNFT['safeMint(address,uint256)'](addr1.address, this.addr1.expected.mintCount);
//           await this.LuxNFT['safeMint(address,uint256)'](addr2.address, this.addr2.expected.mintCount);
//           await this.LuxNFT['safeMint(address,uint256)'](addr3.address, this.addr3.expected.mintCount);
//         });


//       // all the owner functions


//       describe('ownerOf', async function () {
//         it('returns the right owner', async function () {
//           for (const minter of [this.addr1, this.addr2, this.addr3]) {
//             for (const tokenId of minter.expected.tokens) {
//               expect(await this.LuxNFT.ownerOf(tokenId)).to.equal(minter.address);
//             }
//           }

//           // owner mint
//           //owner withdraw
//           //owner append to collectiom
//           // set public sa;e active
//           // set royalties
//           // set beneficiary
//           // set the provenance hasj
//         });

//       // royalty info

      
//         describe('exists', async function () {
//           it('verifies valid tokens', async function () {
//             for (let tokenId = offsetted(0); tokenId < offsetted(this.expectedMintCount); tokenId++) {
//               const exists = await this.LuxNFT.exists(tokenId);
//               expect(exists).to.be.true;
//             }
//           });

//           it('verifies invalid tokens', async function () {
//             expect(await this.LuxNFT.exists(offsetted(this.expectedMintCount))).to.be.false;
//           });
//         });

//         describe('balanceOf', async function () {
//           it('returns the amount for a given address', async function () {
//             expect(await this.LuxNFT.balanceOf(this.owner.address)).to.equal('0');
//             expect(await this.LuxNFT.balanceOf(this.addr1.address)).to.equal(this.addr1.expected.mintCount);
//             expect(await this.LuxNFT.balanceOf(this.addr2.address)).to.equal(this.addr2.expected.mintCount);
//             expect(await this.LuxNFT.balanceOf(this.addr3.address)).to.equal(this.addr3.expected.mintCount);
//           });

//           it('returns correct amount with transferred tokens', async function () {
//             const tokenIdToTransfer = this.addr2.expected.tokens[0];
//             await this.LuxNFT
//               .connect(this.addr2)
//               .transferFrom(this.addr2.address, this.addr3.address, tokenIdToTransfer);
//             // sanity check
//             expect(await this.LuxNFT.ownerOf(tokenIdToTransfer)).to.equal(this.addr3.address);

//             expect(await this.LuxNFT.balanceOf(this.addr2.address)).to.equal(this.addr2.expected.mintCount - 1);
//             expect(await this.LuxNFT.balanceOf(this.addr3.address)).to.equal(this.addr3.expected.mintCount + 1);
//           });

//           it('throws an exception for the 0 address', async function () {
//             await expect(this.LuxNFT.balanceOf(ZERO_ADDRESS)).to.be.revertedWith('BalanceQueryForZeroAddress');
//           });
//         });

//         describe('_numberMinted', async function () {
//           it('returns the amount for a given address', async function () {
//             expect(await this.LuxNFT.numberMinted(this.owner.address)).to.equal('0');
//             expect(await this.LuxNFT.numberMinted(this.addr1.address)).to.equal(this.addr1.expected.mintCount);
//             expect(await this.LuxNFT.numberMinted(this.addr2.address)).to.equal(this.addr2.expected.mintCount);
//             expect(await this.LuxNFT.numberMinted(this.addr3.address)).to.equal(this.addr3.expected.mintCount);
//           });

//           it('returns the same amount with transferred token', async function () {
//             const tokenIdToTransfer = this.addr2.expected.tokens[0];
//             await this.LuxNFT
//               .connect(this.addr2)
//               .transferFrom(this.addr2.address, this.addr3.address, tokenIdToTransfer);
//             // sanity check
//             expect(await this.LuxNFT.ownerOf(tokenIdToTransfer)).to.equal(this.addr3.address);

//             expect(await this.LuxNFT.numberMinted(this.addr2.address)).to.equal(this.addr2.expected.mintCount);
//             expect(await this.LuxNFT.numberMinted(this.addr3.address)).to.equal(this.addr3.expected.mintCount);
//           });
//         });

//         context('_totalMinted', async function () {
//           it('has correct totalMinted', async function () {
//             const totalMinted = await this.LuxNFT.totalMinted();
//             expect(totalMinted).to.equal(this.expectedMintCount);
//           });
//         });

//         context('_nextTokenId', async function () {
//           it('has correct nextTokenId', async function () {
//             const nextTokenId = await this.LuxNFT.nextTokenId();
//             expect(nextTokenId).to.equal(offsetted(this.expectedMintCount));
//           });
//         });



//           it('reverts for an invalid token', async function () {
//             await expect(this.LuxNFT.ownerOf(10)).to.be.revertedWith('OwnerQueryForNonexistentToken');
//           });
//         });

//         describe('approve', async function () {
//           beforeEach(function () {
//             this.tokenId = this.addr1.expected.tokens[0];
//             this.tokenId2 = this.addr2.expected.tokens[0];
//           });

//           it('sets approval for the target address', async function () {
//             await this.LuxNFT.connect(this.addr1).approve(this.addr2.address, this.tokenId);
//             const approval = await this.LuxNFT.getApproved(this.tokenId);
//             expect(approval).to.equal(this.addr2.address);
//           });

//           it('set approval for the target address on behalf of the owner', async function () {
//             await this.LuxNFT.connect(this.addr1).setApprovalForAll(this.addr2.address, true);
//             await this.LuxNFT.connect(this.addr2).approve(this.addr3.address, this.tokenId);
//             const approval = await this.LuxNFT.getApproved(this.tokenId);
//             expect(approval).to.equal(this.addr3.address);
//           });

//           it('rejects an unapproved caller', async function () {
//             await expect(this.LuxNFT.approve(this.addr2.address, this.tokenId)).to.be.revertedWith(
//               'ApprovalCallerNotOwnerNorApproved'
//             );
//           });

//           it('does not get approved for invalid tokens', async function () {
//             await expect(this.LuxNFT.getApproved(10)).to.be.revertedWith('ApprovalQueryForNonexistentToken');
//           });

//           it('approval allows token transfer', async function () {
//             await expect(
//               this.LuxNFT.connect(this.addr3).transferFrom(this.addr1.address, this.addr3.address, this.tokenId)
//             ).to.be.revertedWith('TransferCallerNotOwnerNorApproved');
//             await this.LuxNFT.connect(this.addr1).approve(this.addr3.address, this.tokenId);
//             await this.LuxNFT.connect(this.addr3).transferFrom(this.addr1.address, this.addr3.address, this.tokenId);
//             await expect(
//               this.LuxNFT.connect(this.addr1).transferFrom(this.addr3.address, this.addr1.address, this.tokenId)
//             ).to.be.revertedWith('TransferCallerNotOwnerNorApproved');
//           });

//           it('token owner can approve self as operator', async function () {
//             expect(await this.LuxNFT.getApproved(this.tokenId)).to.not.equal(this.addr1.address);
//             await expect(this.LuxNFT.connect(this.addr1).approve(this.addr1.address, this.tokenId)
//             ).to.not.be.reverted;
//             expect(await this.LuxNFT.getApproved(this.tokenId)).to.equal(this.addr1.address);
//           });

//           it('self-approval is cleared on token transfer', async function () {
//             await this.LuxNFT.connect(this.addr1).approve(this.addr1.address, this.tokenId); 
//             expect(await this.LuxNFT.getApproved(this.tokenId)).to.equal(this.addr1.address);

//             await this.LuxNFT.connect(this.addr1).transferFrom(this.addr1.address, this.addr2.address, this.tokenId);
//             expect(await this.LuxNFT.getApproved(this.tokenId)).to.not.equal(this.addr1.address);
//           });
//         });

//         describe('setApprovalForAll', async function () {
//           it('sets approval for all properly', async function () {
//             const approvalTx = await this.LuxNFT.setApprovalForAll(this.addr1.address, true);
//             await expect(approvalTx)
//               .to.emit(this.LuxNFT, 'ApprovalForAll')
//               .withArgs(this.owner.address, this.addr1.address, true);
//             expect(await this.LuxNFT.isApprovedForAll(this.owner.address, this.addr1.address)).to.be.true;
//           });

//           it('caller can approve all with self as operator', async function () {
//             expect(
//               await this.LuxNFT.connect(this.addr1).isApprovedForAll(this.addr1.address, this.addr1.address)
//             ).to.be.false;
//             await expect(
//               this.LuxNFT.connect(this.addr1).setApprovalForAll(this.addr1.address, true)
//             ).to.not.be.reverted;
//             expect(
//               await this.LuxNFT.connect(this.addr1).isApprovedForAll(this.addr1.address, this.addr1.address)
//             ).to.be.true;
//           });
//         });

//         context('test transfer functionality', function () {
//           const testSuccessfulTransfer = function (transferFn: string, transferToContract = true) {
//             beforeEach(async function () {
//               const sender = this.addr2;
//               this.tokenId = this.addr2.expected.tokens[0];
//               this.from = sender.address;
//               this.to = transferToContract ? this.receiver : this.addr4;
//               await this.LuxNFT.connect(sender).approve(this.to.address, this.tokenId);

//               const ownershipBefore = await this.LuxNFT.getOwnershipAt(this.tokenId);
//               this.timestampBefore = parseInt(ownershipBefore.startTimestamp);
//               this.timestampToMine = (await getBlockTimestamp()) + 12345;
//               await mineBlockTimestamp(this.timestampToMine);
//               this.timestampMined = await getBlockTimestamp();

//               // prettier-ignore
//               this.transferTx = await this.LuxNFT
//                 .connect(sender)[transferFn](this.from, this.to.address, this.tokenId);

//               const ownershipAfter = await this.LuxNFT.getOwnershipAt(this.tokenId);
//               this.timestampAfter = parseInt(ownershipAfter.startTimestamp);
//             });

//             it('transfers the ownership of the given token ID to the given address', async function () {
//               expect(await this.LuxNFT.ownerOf(this.tokenId)).to.be.equal(this.to.address);
//             });

//             it('emits a Transfer event', async function () {
//               await expect(this.transferTx)
//                 .to.emit(this.LuxNFT, 'Transfer')
//                 .withArgs(this.from, this.to.address, this.tokenId);
//             });

//             it('clears the approval for the token ID', async function () {
//               expect(await this.LuxNFT.getApproved(this.tokenId)).to.be.equal(ZERO_ADDRESS);
//             });

//             it('adjusts owners balances', async function () {
//               expect(await this.LuxNFT.balanceOf(this.from)).to.be.equal(1);
//             });

//             it('startTimestamp updated correctly', async function () {
//               expect(this.timestampBefore).to.be.lt(this.timestampToMine);
//               expect(this.timestampAfter).to.be.gte(this.timestampToMine);
//               expect(this.timestampAfter).to.be.lt(this.timestampToMine + 10);
//               expect(this.timestampToMine).to.be.eq(this.timestampMined);
//             });
//           };

//           const testUnsuccessfulTransfer = function (transferFn: string) {
//             beforeEach(function () {
//               this.tokenId = this.addr2.expected.tokens[0];
//               this.sender = this.addr1;
//             });

//             it('rejects unapproved transfer', async function () {
//               await expect(
//                 this.LuxNFT.connect(this.sender)[transferFn](this.addr2.address, this.sender.address, this.tokenId)
//               ).to.be.revertedWith('TransferCallerNotOwnerNorApproved');
//             });

//             it('rejects transfer from incorrect owner', async function () {
//               await this.LuxNFT.connect(this.addr2).setApprovalForAll(this.sender.address, true);
//               await expect(
//                 this.LuxNFT.connect(this.sender)[transferFn](this.addr3.address, this.sender.address, this.tokenId)
//               ).to.be.revertedWith('TransferFromIncorrectOwner');
//             });

//             it('rejects transfer to zero address', async function () {
//               await this.LuxNFT.connect(this.addr2).setApprovalForAll(this.sender.address, true);
//               await expect(
//                 this.LuxNFT.connect(this.sender)[transferFn](this.addr2.address, ZERO_ADDRESS, this.tokenId)
//               ).to.be.revertedWith('TransferToZeroAddress');
//             });
//           };

//           context('successful transfers', function () {
//             context('transferFrom', function () {
//               describe('to contract', function () {
//                 testSuccessfulTransfer('transferFrom');
//               });

//               describe('to EOA', function () {
//                 testSuccessfulTransfer('transferFrom', false);
//               });
//             });

//             context('safeTransferFrom', function () {
//               describe('to contract', function () {
//                 testSuccessfulTransfer('safeTransferFrom(address,address,uint256)');

//                 it('validates ERC721Received', async function () {
//                   await expect(this.transferTx)
//                     .to.emit(this.receiver, 'Received')
//                     .withArgs(this.addr2.address, this.addr2.address, this.tokenId, '0x', GAS_MAGIC_VALUE);
//                 });
//               });

//               describe('to EOA', function () {
//                 testSuccessfulTransfer('safeTransferFrom(address,address,uint256)', false);
//               });
//             });
//           });

//           context('unsuccessful transfers', function () {
//             describe('transferFrom', function () {
//               testUnsuccessfulTransfer('transferFrom');
//             });

//             describe('safeTransferFrom', function () {
//               testUnsuccessfulTransfer('safeTransferFrom(address,address,uint256)');

//               it('reverts for non-receivers', async function () {
//                 const nonReceiver = this.LuxNFT;
//                 // prettier-ignore
//                 await expect(
//                   this.LuxNFT.connect(this.addr1)['safeTransferFrom(address,address,uint256)'](
//                       this.addr1.address,
//                       nonReceiver.address,
//                       offsetted(0)
//                     )
//                 ).to.be.revertedWith('TransferToNonERC721ReceiverImplementer');
//               });

//               it('reverts when the receiver reverted', async function () {
//                 // prettier-ignore
//                 await expect(
//                   this.LuxNFT.connect(this.addr1)['safeTransferFrom(address,address,uint256,bytes)'](
//                       this.addr1.address,
//                       this.receiver.address,
//                       offsetted(0),
//                       '0x01'
//                     )
//                 ).to.be.revertedWith('reverted in the receiver contract!');
//               });

//               it('reverts if the receiver returns the wrong value', async function () {
//                 // prettier-ignore
//                 await expect(
//                   this.LuxNFT.connect(this.addr1)['safeTransferFrom(address,address,uint256,bytes)'](
//                       this.addr1.address,
//                       this.receiver.address,
//                       offsetted(0),
//                       '0x02'
//                     )
//                 ).to.be.revertedWith('TransferToNonERC721ReceiverImplementer');
//               });
//             });
//           });
//         });

//         // describe('_burn', async function () {
//         //   beforeEach(function () {
//         //     this.tokenIdToBurn = offsetted(0);
//         //   });

//         //   it('can burn if approvalCheck is false', async function () {
//         //     expect(await this.LuxNFT.exists(this.tokenIdToBurn)).to.be.true;
//         //     await this.LuxNFT.connect(this.addr2)['burn(uint256,bool)'](this.tokenIdToBurn, false);
//         //     expect(await this.LuxNFT.exists(this.tokenIdToBurn)).to.be.false;
//         //   });

//         //   it('revert if approvalCheck is true', async function () {
//         //     await expect(
//         //       this.LuxNFT.connect(this.addr2)['burn(uint256,bool)'](this.tokenIdToBurn, true)
//         //     ).to.be.revertedWith('TransferCallerNotOwnerNorApproved');
//         //   });

//         //   it('can burn without approvalCheck parameter', async function () {
//         //     expect(await this.LuxNFT.exists(this.tokenIdToBurn)).to.be.true;
//         //     await this.LuxNFT.connect(this.addr2)['burn(uint256)'](this.tokenIdToBurn);
//         //     expect(await this.LuxNFT.exists(this.tokenIdToBurn)).to.be.false;
//         //   });

//         //   it('cannot burn a token owned by another if not approved', async function () {
//         //     expect(await this.LuxNFT.exists(this.tokenIdToBurn)).to.be.true;
//         //     await this.LuxNFT.connect(this.addr2)['burn(uint256)'](this.tokenIdToBurn);
//         //     expect(await this.LuxNFT.exists(this.tokenIdToBurn)).to.be.false;
//         //   });
//         // });

//         describe('_initializeOwnershipAt', async function () {
//           it('successfuly sets ownership of empty slot', async function () {
//             const lastTokenId = this.addr3.expected.tokens[2];
//             const ownership1 = await this.LuxNFT.getOwnershipAt(lastTokenId);
//             expect(ownership1[0]).to.equal(ZERO_ADDRESS);
//             await this.LuxNFT.initializeOwnershipAt(lastTokenId);
//             const ownership2 = await this.LuxNFT.getOwnershipAt(lastTokenId);
//             expect(ownership2[0]).to.equal(this.addr3.address);
//           });

//           it("doesn't set ownership if it's already setted", async function () {
//             const lastTokenId = this.addr3.expected.tokens[2];
//             expect(await this.LuxNFT.ownerOf(lastTokenId)).to.be.equal(this.addr3.address);
//             const tx1 = await this.LuxNFT.initializeOwnershipAt(lastTokenId);
//             expect(await this.LuxNFT.ownerOf(lastTokenId)).to.be.equal(this.addr3.address);
//             const tx2 = await this.LuxNFT.initializeOwnershipAt(lastTokenId);

//             // We assume the 2nd initialization doesn't set again due to less gas used.
//             const receipt1 = await tx1.wait();
//             const receipt2 = await tx2.wait();
//             expect(receipt2.gasUsed.toNumber()).to.be.lessThan(receipt1.gasUsed.toNumber());
//           });
//         });
//       });

//       context('test mint functionality', function () {
//         beforeEach(async function () {
//           const [owner, addr1] = await ethers.getSigners();
//           this.owner = owner;
//           this.addr1 = addr1;
//         });

//         const testSuccessfulMint = function (safe: boolean, quantity: number, mintForContract = true) {
//           beforeEach(async function () {
//             this.minter = mintForContract ? this.receiver : this.addr1;

//             const mintFn = safe ? 'safeMint(address,uint256)' : 'mint(address,uint256)';

//             this.balanceBefore = (await this.LuxNFT.balanceOf(this.minter.address)).toNumber();

//             this.timestampToMine = (await getBlockTimestamp()) + 12345;
//             await mineBlockTimestamp(this.timestampToMine);
//             this.timestampMined = await getBlockTimestamp();

//             this.mintTx = await this.LuxNFT[mintFn](this.minter.address, quantity);
//           });

//           it('changes ownership', async function () {
//             for (let tokenId = offsetted(0); tokenId < offsetted(quantity); tokenId++) {
//               expect(await this.LuxNFT.ownerOf(tokenId)).to.equal(this.minter.address);
//             }
//           });

//           it('emits a Transfer event', async function () {
//             for (let tokenId = offsetted(0); tokenId < offsetted(quantity); tokenId++) {
//               await expect(this.mintTx)
//                 .to.emit(this.LuxNFT, 'Transfer')
//                 .withArgs(ZERO_ADDRESS, this.minter.address, tokenId);
//             }
//           });

//           it('adjusts owners balances', async function () {
//             expect(await this.LuxNFT.balanceOf(this.minter.address)).to.be.equal(this.balanceBefore + quantity);
//           });

//           it('adjusts OwnershipAt and OwnershipOf', async function () {
//             const ownership = await this.LuxNFT.getOwnershipAt(offsetted(0));
//             expect(ownership.startTimestamp).to.be.gte(this.timestampToMine);
//             expect(ownership.startTimestamp).to.be.lt(this.timestampToMine + 10);
//             expect(ownership.burned).to.be.false;

//             for (let tokenId = offsetted(0); tokenId < offsetted(quantity); tokenId++) {
//               const ownership = await this.LuxNFT.getOwnershipOf(tokenId);
//               expect(ownership.addr).to.equal(this.minter.address);
//               expect(ownership.startTimestamp).to.be.gte(this.timestampToMine);
//               expect(ownership.startTimestamp).to.be.lt(this.timestampToMine + 10);
//               expect(ownership.burned).to.be.false;
//             }

//             expect(this.timestampToMine).to.be.eq(this.timestampMined);
//           });

//           if (safe && mintForContract) {
//             it('validates ERC721Received', async function () {
//               for (let tokenId = offsetted(0); tokenId < offsetted(quantity); tokenId++) {
//                 await expect(this.mintTx)
//                   .to.emit(this.minter, 'Received')
//                   .withArgs(this.owner.address, ZERO_ADDRESS, tokenId, '0x', GAS_MAGIC_VALUE);
//               }
//             });
//           }
//         };

//         const testUnsuccessfulMint = function (safe: boolean) {
//           beforeEach(async function () {
//             this.mintFn = safe ? 'safeMint(address,uint256)' : 'mint(address,uint256)';
//           });

//           it('rejects mints to the zero address', async function () {
//             await expect(this.LuxNFT[this.mintFn](ZERO_ADDRESS, 1)).to.be.revertedWith('MintToZeroAddress');
//           });

//           it('requires quantity to be greater than 0', async function () {
//             await expect(this.LuxNFT[this.mintFn](this.owner.address, 0)).to.be.revertedWith('MintZeroQuantity');
//           });
//         };

//         context('successful mints', function () {
//           context('mint', function () {
//             context('for contract', function () {
//               describe('single token', function () {
//                 testSuccessfulMint(false, 1);
//               });

//               describe('multiple tokens', function () {
//                 testSuccessfulMint(false, 5);
//               });

//               it('does not revert for non-receivers', async function () {
//                 const nonReceiver = this.LuxNFT;
//                 await this.LuxNFT.mint(nonReceiver.address, 1);
//                 expect(await this.LuxNFT.ownerOf(offsetted(0))).to.equal(nonReceiver.address);
//               });
//             });

//             context('for EOA', function () {
//               describe('single token', function () {
//                 testSuccessfulMint(false, 1, false);
//               });

//               describe('multiple tokens', function () {
//                 testSuccessfulMint(false, 5, false);
//               });
//             });
//           });

//           context('safeMint', function () {
//             context('for contract', function () {
//               describe('single token', function () {
//                 testSuccessfulMint(true, 1);
//               });

//               describe('multiple tokens', function () {
//                 testSuccessfulMint(true, 5);
//               });

//               it('validates ERC721Received with custom _data', async function () {
//                 const customData = ethers.utils.formatBytes32String('custom data');
//                 const tx = await this.LuxNFT['safeMint(address,uint256,bytes)'](this.receiver.address, 1, customData);
//                 await expect(tx)
//                   .to.emit(this.receiver, 'Received')
//                   .withArgs(this.owner.address, ZERO_ADDRESS, offsetted(0), customData, GAS_MAGIC_VALUE);
//               });
//             });

//             context('for EOA', function () {
//               describe('single token', function () {
//                 testSuccessfulMint(true, 1, false);
//               });

//               describe('multiple tokens', function () {
//                 testSuccessfulMint(true, 5, false);
//               });
//             });
//           });
//         });

//         context('unsuccessful mints', function () {
//           context('mint', function () {
//             testUnsuccessfulMint(false);
//           });

//           context('safeMint', function () {
//             testUnsuccessfulMint(true);

//             it('reverts for non-receivers', async function () {
//               const nonReceiver = this.LuxNFT;
//               await expect(this.LuxNFT['safeMint(address,uint256)'](nonReceiver.address, 1)).to.be.revertedWith(
//                 'TransferToNonERC721ReceiverImplementer'
//               );
//             });

//             it('reverts when the receiver reverted', async function () {
//               await expect(
//                 this.LuxNFT['safeMint(address,uint256,bytes)'](this.receiver.address, 1, '0x01')
//               ).to.be.revertedWith('reverted in the receiver contract!');
//             });

//             it('reverts if the receiver returns the wrong value', async function () {
//               await expect(
//                 this.LuxNFT['safeMint(address,uint256,bytes)'](this.receiver.address, 1, '0x02')
//               ).to.be.revertedWith('TransferToNonERC721ReceiverImplementer');
//             });

//             it('reverts with reentrant call', async function () {
//               await expect(
//                 this.LuxNFT['safeMint(address,uint256,bytes)'](this.receiver.address, 1, '0x03')
//               ).to.be.reverted;
//             });
//           });
//         });
//       });

//       context('_toString', async function () {
//         it('returns correct value', async function () {
//           expect(await this.LuxNFT['toString(uint256)']('0')).to.eq('0');
//           expect(await this.LuxNFT['toString(uint256)']('1')).to.eq('1');
//           expect(await this.LuxNFT['toString(uint256)']('2')).to.eq('2');
//           const uint256Max = BigNumber.from(2).pow(256).sub(1).toString();
//           expect(await this.LuxNFT['toString(uint256)'](uint256Max)).to.eq(uint256Max);
//         });
//       });
//     });
//   };

// describe('LuxNFT', createTestSuite({ contract: 'ERC721AMock', constructorArgs: ['Lux', 'Lux'] }));

// describe(
//   'LuxNFT override _startTokenId()',
//   createTestSuite({ contract: 'ERC721AStartTokenIdMock', constructorArgs: ['Lux', 'Lux', 1] })
// );

// describe('LuxNFT with ERC2309', async function () {
//   beforeEach(async function () {
//     const [owner, addr1] = await ethers.getSigners();
//     this.owner = owner;
//     this.addr1 = addr1;

//     let args;
//     args = ['Lux', 'Lux', this.owner.address, 1, true];
//     this.erc721aMint1 = await deployContract('ERC721AWithERC2309Mock', args);
//     args = ['Lux', 'Lux', this.owner.address, 10, true];
//     this.erc721aMint10 = await deployContract('ERC721AWithERC2309Mock', args);
//   });

//   it('emits a ConsecutiveTransfer event for single mint', async function () {    
//     expect(this.erc721aMint1.deployTransaction)
//       .to.emit(this.erc721aMint1, 'ConsecutiveTransfer')
//       .withArgs(0, 0, ZERO_ADDRESS, this.owner.address);
//   });

//   it('emits a ConsecutiveTransfer event for a batch mint', async function () {    
//     expect(this.erc721aMint10.deployTransaction)
//       .to.emit(this.erc721aMint10, 'ConsecutiveTransfer')
//       .withArgs(0, 9, ZERO_ADDRESS, this.owner.address);
//   });

//   it('requires quantity to be below mint limit', async function () {
//     let args;
//     const mintLimit = 5000;
//     args = ['Lux', 'LUX', this.owner.address, mintLimit, true];
//     await deployContract('ERC721AWithERC2309Mock', args);
//     args = ['Lux', 'LUX', this.owner.address, mintLimit + 1, true];
//     await expect(deployContract('ERC721AWithERC2309Mock', args)).to.be.revertedWith('MintERC2309QuantityExceedsLimit');
//   })

//   it('rejects mints to the zero address', async function () {
//     let args = ['Lux', 'LUX', ZERO_ADDRESS, 1, true];
//     await expect(deployContract('ERC721AWithERC2309Mock', args)).to.be.revertedWith('MintToZeroAddress');
//   });

//   it('requires quantity to be greater than 0', async function () {
//     let args = ['Lux', 'LUX', this.owner.address, 0, true];
//     await expect(deployContract('ERC721AWithERC2309Mock', args)).to.be.revertedWith('MintZeroQuantity');
//   });
// });
