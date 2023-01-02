import { MerkleTree } from 'merkletreejs';
import { BytesLike, keccak256 } from 'ethers/lib/utils';

let tree: any;

const generateWhiteListRoot = () => {
    const whitelistAddr = require("../whitelist/whitelist.json");
    const whitelistLeafNodes = whitelistAddr.map((addr: BytesLike) => keccak256(addr));
    const whitelistMerkleTree = new MerkleTree(whitelistLeafNodes, keccak256, {
        sortPairs: tree });
    const whiteListRootHash = whitelistMerkleTree.getHexRoot();

    console.log('whitelistRootHash', whiteListRootHash);
    return whiteListRootHash;
};

module.exports = { generateWhiteListRoot };
generateWhiteListRoot();
