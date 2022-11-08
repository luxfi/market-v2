// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// Change "myNFT" with your NFT project name

contract LuxNFT is ERC721A, Ownable, ReentrancyGuard {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Provenance Hash helps your customers know you aren't scamming them pre-reveal.
    // Read more here: https://medium.com/coinmonks/the-elegance-of-the-nft-provenance-hash-solution-823b39f99473

    string public provenanceHash;

    // When deploying the smart contract you will be asked to insert your baseURI. This is the location of your
    // Metadata which links to the images that your NFTs will display. the URI will look something like ipfs://(and then a unique CID)
    // Here is a good resource for learning how to upload your metadata and images to IPFS and then linking them to your smart contract:
    // https://www.youtube.com/watch?v=3jizwk6_m1s
    string public baseURI;
    string public baseExtension = ".json";

    // Replace "10000" with whatever your supply is going to be.
    // change that to the specifed supply
    // 2,000	    1	        2,000	$70,000	$70,000			
    // 100	        10	        1,000	$35,000	$3,500
    // 10	        100	        1,000	$35,000	$350
    // 1        	1,000   	1,000	$35,000	$35
    uint256 public constant ONE_POUND_SUPPLY = 1000;
    uint256 public constant TEN_POUND_SUPPLY = 100;
    uint256 public constant HUNDRED_POUND_SUPPLY = 10;
    uint256 public constant TWO_THOUSAND_POUND_SUPPLY = 1;
    uint256 private _currentId;

    // whitelist_LIMIT is the maximum number of tokens a whitelisted address can mint.
    // whitelist_PRICE is the price per token during the whitelist sale.
    // replace these with the limit and price values you would like. 
    // when these functions are called they return the maximum number of NFTs that can be minted by one specific address during the whitelist sale and the price per NFT during the whitelist sale respectively.
    //THIS NEEDS TO BE SPECIFIED
    uint256 public constant whitelist_LIMIT = 1;
    //THIS NEEDS TO BE SPECIFIED
    uint256 public constant whitelist_PRICE = .04 ether;

    // public_LIMIT is the maximum number of tokens that can be minted by one address during the public sale.
    // public_PRICE is the price per token during the public sale.
    // replace these with the limit and price values you would like. 
    // when these functions are called they return the maximum number of NFTs that can be minted by one specific address during the public sale and the price per NFT during the public sale respectively.
    // THIS NEEDS TO BE SPECIFIED
    uint256 public constant public_LIMIT = 5;
    uint256 public constant ONE_POUND_PRICE = .022 ether;
    uint256 public constant TEN_POUND_PRICE = .22 ether;
    uint256 public constant HUNDRED_POUND_PRICE = 2.2 ether;
    uint256 public constant TWO_THOUSAND_POUND_PRICE = 44 ether;

    // These return whether or not the whitelist sale or public sale is active. 
    // Once the contract is deployed and you decide you want to begin the public or whitelist sale then set that respective value to true
    // When you want to start the other sale, simply return the value of the previous sale to false and set the value of the new sale to true
    bool public publicIsActive = false;
    bool public whitelistIsActive = false;

    
    // This is your Merkle Tree root. Here is a great video for reference https://www.youtube.com/watch?v=YDWYrVtqLRU
    bytes32 public root; 

    // This returns the number of NFTs already minted by an address. This allows the contract to know whether or not
    // The address has minted the maximum number of NFTs allowed for the respective sales
    mapping(address => uint256) private _alreadyMinted;
    
    // This is the address which will receive Ether from the sale when it is withdrawn from the smart contract
    // You will be asked to set this before deployment
    // I recommend setting it to a cold wallet which is seperate from the address used to deploy the contract
    // You can learn more about those here https://www.investopedia.com/news/bitcoin-safe-storage-cold-wallet/
    address public beneficiary;

    // This is the address that will receive royalties from sales
    // You will be asked to set this before deployment
    // I recommend setting this address to another cold wallet
    address public royalties;

    // As the name suggests, this is the address for this NFT contract
    address public nftContractAddress;

    // You can mint NFTs upon deployment if you'd like. If so, just uncomment "ownerMint" by deleting the two slashes "//" and replace the number 10 with however many NFTs you would like to mint upon deployment
    constructor(
        address _royalties,
        address _beneficiary,
        string memory _initBaseURI, 
        bytes32 _root
        ) ERC721A("LUX Uranium", "LUXU") {
        beneficiary = _beneficiary;
        royalties = _royalties;
        setBaseURI(_initBaseURI);
        root = _root;
        //ownerMint(msg.sender, 10); 
    }

    // Accessors

    // This is the address of the person who calls a particular function within the smart contract
    function _msgSender() internal view virtual override returns (address) {
        return msg.sender;
    }

    // Returns data of transaction in bytes
    function _msgData()
        internal
        view
        virtual
        override
        returns (bytes calldata)
    {
        return msg.data;
    }

    // This functions allow the owner of this contract to set the Provenance hash. Read previous comment about provenance hash close to the top of this contract for more info
    function setProvenanceHash(string calldata hash) public onlyOwner {
        provenanceHash = hash;
    }

    // This allows the contract owner to reset the beneficiary of the Ether that is withdrawn from this smart contract
    function setBeneficiary(address _beneficiary) public onlyOwner {
        beneficiary = _beneficiary;
    }

    // This allows the contract owner to reset the address of the recipient who will be receiving the royalties from each sale
    function setRoyalties(address _royalties) public onlyOwner {
        royalties = _royalties;
    }

    // This is the function that allows you to set whether or not the public sale is active
    function setPublicActive(bool _publicIsActive) public onlyOwner {
        publicIsActive = _publicIsActive;
    }

    // This is the function that allows you to set whether or not the whitelist sale is active
    function setWhitelistActive(bool _whitelistIsActive) public onlyOwner {
        whitelistIsActive = _whitelistIsActive;
    }
    
    // The next two functions have been more or less explained in previos comments
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function alreadyMinted(address addr) public view returns (uint256) {
        return _alreadyMinted[addr];
    }

    //                                  Whitelist Sale


    // This function sets the parameters to determine whether or not an address is actually on the whitelist
    // Required in the whitelistMint function and makes sure that the address minting is in fact on the whitelist
    function isValid(bytes32[] memory proof, bytes32 leaf) public view returns (bool) {
        return MerkleProof.verify(proof, root, leaf);
    }

    // Allows whitelisted members to mint and prevents non-whitelisted members from minting
    function whitelistMint(uint256 quantity, bytes32[] memory proof) public payable nonReentrant {
        address sender = _msgSender();
        require(isValid(proof, keccak256(abi.encodePacked(msg.sender))), "Address is not on the whitelist");
        require(whitelistIsActive, "Sale is closed");
        require(
            quantity <= whitelist_LIMIT - _alreadyMinted[sender],
            "Insufficient mints left"
        );
        require(msg.value == whitelist_PRICE * quantity, "Incorrect payable amount");

        _alreadyMinted[sender] += quantity;
        _internalMint(sender, quantity);
    }

    //                                   Public Sale


    // This is the function that allows participants in the public sale to buy and mint your NFT
    function publicMint(uint256 quantity) public payable nonReentrant {
        address sender = _msgSender();

        require(publicIsActive, "Sale is closed");
        require(
            quantity <= public_LIMIT - _alreadyMinted[sender],
            "Insufficient mints left"
        );
        require(msg.value == ONE_POUND_PRICE * quantity, "Incorrect payable amount");
        require(msg.value == TEN_POUND_PRICE * quantity, "Incorrect payable amount");
        require(msg.value == HUNDRED_POUND_PRICE * quantity, "Incorrect payable amount");
        require(msg.value == TWO_THOUSAND_POUND_PRICE * quantity, "Incorrect payable amount");

        _alreadyMinted[sender] += quantity;
        _internalMint(sender, quantity);
    }


    //                                     Owner


    // Allows you (The owner of this contract) and only you to mint NFTs for free
    function ownerMint(address to, uint256 quantity) public onlyOwner {
        _internalMint(to, quantity);
    }

    // Allows you to withdraw the money from your sale
    function withdraw() public onlyOwner {
        payable(beneficiary).transfer(address(this).balance);
    }

    // Metadata

    // Shows the location of the metadata for a particular tokenId when called and provided with tokenId
    function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    // Returns baseURI (folder where metadata for all the tokens is stored) location
    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
    }

    // Allows the owner of this contract to set (in this case reset because setting it is required upon deployment) the baseURI (folder where metadata for all minted tokens is stored)
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
    }

    // Private

    //Records the number of tokens minted by a particular address
    function numberMinted(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }

    // This is the function that actually mints the NFT. 
    // It is private so is not directly accessible
    // It is called by the public mint, whitelist mint, and owner mint functions
    function _internalMint(address to, uint256 quantity) private {
        require(
            numberMinted(msg.sender) + quantity <= ONE_POUND_SUPPLY,
            "can not mint this many"
        );
         require(
            numberMinted(msg.sender) + quantity <= TEN_POUND_SUPPLY,
            "can not mint this many"
        );
         require(
            numberMinted(msg.sender) + quantity <= HUNDRED_POUND_SUPPLY,
            "can not mint this many"
        );
         require(
            numberMinted(msg.sender) + quantity <= TWO_THOUSAND_POUND_SUPPLY,
            "can not mint this many"
        );
    //This is the real difference between ERC721 and ERC721A. Rather than a single token being minted and the tokenID being recorded, the quantity of tokens being minted and recorded is completed in one transaction
            _safeMint(to, quantity);
    }
    

    // Set the royalty amount you want here

    function royaltyInfo(uint256 _tokenId, uint256 _salePrice)
        external
        view
        returns (address, uint256 royaltyAmount)
    {
        _tokenId; // silence solc warning
        royaltyAmount = (_salePrice / 100) * 5;
        return (royalties, royaltyAmount);
    }

   
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721A)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}