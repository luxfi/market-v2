const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const fs = require("fs")
const process = require("process")

function one_lb(tokenId) {

    let ONE_POUND ={
        "tokenId" : tokenId,
        "name": "LUX Uranium",
        "symbol": "U",
        "description": "Backed by one pound of Uranium (U3O8) from the Madison North mine.",
        "seller_fee_basis_points": 500,
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link",
        "external_url": "https://lux.market",
        "edition": "Jawn",
        "attributes": [
        {
            "trait_type": "Pounds",
            "value": "1"
        },
        {
            "trait_type": "Type",
            "value": "43-101 Verified"
        },
        {
            "trait_type": "Location",
            "value": "Madison North, RÃ¶ssing Formation, Namibia"
        },
        {
            "trait_type": "Issuer",
            "value": "Madison Metals"
        },
        {
            "trait_type": "Auditor",
            "value": "SRK Consulting (UK) Limited"
        }
        ],
        "properties": {
        "category": "video",
        "files": [
            {
            "uri": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
            "type": "video/mp4"
            }
        ],
        "creators": [
            {
            "address": "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54",
            "share": 100
            }
        ]
        },
        "animation_url": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link"
    }

   return (
    JSON.stringify(ONE_POUND)
   );
}
function ten_lb(tokenId) {
    let TEN_POUNDS ={
        "name": "LUX Uranium",
        "tokenId" : tokenId,
        "symbol": "U",
        "description": "Backed by ten pounds of Uranium (U3O8) from the Madison North mine.",
        "seller_fee_basis_points": 500,
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link",
        "external_url": "https://lux.market",
        "edition": "Jawn",
        "attributes": [
        {
            "trait_type": "Pounds",
            "value": "10"
        },
        {
            "trait_type": "Type",
            "value": "43-101 Verified"
        },
        {
            "trait_type": "Location",
            "value": "Madison North, RÃ¶ssing Formation, Namibia"
        },
        {
            "trait_type": "Issuer",
            "value": "Madison Metals"
        },
        {
            "trait_type": "Auditor",
            "value": "SRK Consulting (UK) Limited"
        }
        ],
        "properties": {
        "category": "video",
        "files": [
            {
            "uri": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
            "type": "video/mp4"
            }
        ],
        "creators": [
            {
            "address": "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54",
            "share": 100
            }
        ]
        },
        "animation_url": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link"
    }

   return (
    JSON.stringify(TEN_POUNDS)
   );
}
function hundred_lbs(tokenId) {
    let HUNDRED_POUNDS ={
        "name": "LUX Uranium",
        "symbol": "U",
        "description": "Backed by one hundred pounds of Uranium (U3O8) from the Madison North mine.",
        "seller_fee_basis_points": 500,
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link",
        "external_url": "https://lux.market",
        "edition": "Jawn",
        "attributes": [
        {
            "trait_type": "Pounds",
            "value": "100"
        },
        {
            "trait_type": "Type",
            "value": "43-101 Verified"
        },
        {
            "trait_type": "Location",
            "value": "Madison North, RÃ¶ssing Formation, Namibia"
        },
        {
            "trait_type": "Issuer",
            "value": "Madison Metals"
        },
        {
            "trait_type": "Auditor",
            "value": "SRK Consulting (UK) Limited"
        }
        ],
        "properties": {
        "category": "video",
        "files": [
            {
            "uri": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
            "type": "video/mp4"
            }
        ],
        "creators": [
            {
            "address": "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54",
            "share": 100
            }
        ]
        },
        "animation_url": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link"
    }

   return (
    JSON.stringify(HUNDRED_POUNDS)
   );
}
function thousand_lbs(tokenId) {
    let THOUSAND_POUNDS ={
        "name": "LUX Uranium",
        "symbol": "U",
        "description": "Backed by one thousand pounds of Uranium (U3O8) from the Madison North mine.",
        "seller_fee_basis_points": 500,
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link",
        "external_url": "https://lux.market",
        "edition": "Jawn",
        "attributes": [
        {
            "trait_type": "Pounds",
            "value": "1000"
        },
        {
            "trait_type": "Type",
            "value": "43-101 Verified"
        },
        {
            "trait_type": "Location",
            "value": "Madison North, RÃ¶ssing Formation, Namibia"
        },
        {
            "trait_type": "Issuer",
            "value": "Madison Metals"
        },
        {
            "trait_type": "Auditor",
            "value": "SRK Consulting (UK) Limited"
        }
        ],
        "properties": {
        "category": "video",
        "files": [
            {
            "uri": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
            "type": "video/mp4"
            }
        ],
        "creators": [
            {
            "address": "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54",
            "share": 100
            }
        ]
        },
        "animation_url": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link"
    }
   return (
    JSON.stringify(THOUSAND_POUNDS)
   );
}
function two_thousand_lbs(tokenId) {
    let TWO_THOUSAND_POUNDS = {
        "name": "LUX Uranium",
        "symbol": "U",
        "description": "Backed by two thousand pounds of Uranium (U3O8) from the Madison North mine.",
        "seller_fee_basis_points": 500,
        "image": "https://bafkreie257sonrjtpxkyo6jymz7dfn3dytzu24bxo3nmlfwnzupkup7az4.ipfs.nftstorage.link",
        "external_url": "https://lux.market",
        "edition": "Jawn",
        "attributes": [
        {
            "trait_type": "Pounds",
            "value": "2000"
        },
        {
            "trait_type": "Type",
            "value": "43-101 Verified"
        },
        {
            "trait_type": "Location",
            "value": "Madison North, RÃ¶ssing Formation, Namibia"
        },
        {
            "trait_type": "Issuer",
            "value": "Madison Metals"
        },
        {
            "trait_type": "Auditor",
            "value": "SRK Consulting (UK) Limited"
        }
        ],
        "properties": {
        "category": "video",
        "files": [
            {
            "uri": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
            "type": "video/mp4"
            }
        ],
        "creators": [
            {
            "address": "0xaF609ef0f3b682B5992c7A2Ecc0485afD4816d54",
            "share": 100
            }
        ]
        },
        "animation_url": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link"
    }

   return (
    JSON.stringify(TWO_THOUSAND_POUNDS)
   );
}

function toHex(index){
    return `${process.cwd()}/vera_mint/${ethers.utils.hexZeroPad(ethers.utils.hexlify(index), 32).toString().slice(2,)}.json`
}


async function main() {  

    // ONE POUND x 0 - 999

    for (let i = 0; i < 1000; i++) {
        console.log(toHex(i));
        fs.writeFileSync(
            `${toHex(i)}`,
            one_lb(i),
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }

    // // TEN Pounds x 100
    // for (let i = 1000; i < 1100; i++) {
    //     console.log(`${process.cwd()}/uranium/${i}.json`);
    //     fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
    //         ten_lb(i),
    //         {
    //             encoding: "utf8",
    //             flag: "a+",
    //             mode: 0o666
    //         }
    //     );
    // }

    // // HUNDRED Pounds x 10
    // for (let i = 1100; i < 1110; i++) {
    //     console.log(`${process.cwd()}/uranium/${i}.json`);
    //     fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
    //     hundred_lbs(i),
    //         {
    //             encoding: "utf8",
    //             flag: "a+",
    //             mode: 0o666
    //         }
    //     );
    // }
    
    // //THOUSAND
    // for (let i = 1100; i < 1110; i++) {
    //     console.log(`${process.cwd()}/uranium/${i}.json`);
    //     fs.writeFileSync(`${process.cwd()}/uranium/${i}.json`,
    //     thousand_lbs(i),
    //         {
    //             encoding: "utf8",
    //             flag: "a+",
    //             mode: 0o666
    //         }
    //     );
    // }    

    // console.log(`${process.cwd()}/uranium/1110.json`);

    // fs.writeFileSync(`${process.cwd()}/uranium/1110.json`,
    // two_thousand_lbs(1110),
    //     {
    //         encoding: "utf8",
    //         flag: "a+",
    //         mode: 0o666
    //     }
    // );

}

main()
.then(() => process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});


// 20,000	1	20,000	$700,000	$700,000	
// 2,000	10	20,000	$700,000	$70,000	
// 1,000	20	20,000	$700,000	$35,000	
// 100	200	20,000	$700,000	$3,500	
// 10	2,000	20,000	$700,000	$350	
// 1	4,000	4,000	$140,000	$35	


//bafybeics3tb4ms3c55ditmrdisxpp7w7q4wzbsj764eibcr75ir7qpanfu
//ipfs://bafybeics3tb4ms3c55ditmrdisxpp7w7q4wzbsj764eibcr75ir7qpanfu
//https://nftstorage.link/ipfs/bafybeics3tb4ms3c55ditmrdisxpp7w7q4wzbsj764eibcr75ir7qpanfu

//0x6d7914AF9CA056E16d50a67e0Fe9Ff818272156a

