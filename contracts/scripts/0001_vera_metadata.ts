import { ethers } from "hardhat";
import { promises as fs } from 'fs';
import "process";
import { NFTStorage, File } from 'nft.storage';
import mime from 'mime';
import path from 'path';

import { generate } from "@pdfme/generator/";


const template = require("./template.json");




require("dotenv").config({ path: ".env" });

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;

function meta_data( tokenId: number,
                    desc: string,
                    amt_lbs: number) : string {

    let data = {
        "name": "LUX Uranium",
        "tokenid" : tokenId,
        "symbol": "LUXU",
        "description": desc,
        "seller_fee_basis_points": 500,
        "image": "https://bafybeiaaggslp6lwoo44colsl6f2y7zjihyj7mkxexmrdc3qbbeuqax5xe.ipfs.nftstorage.link",
        "external_url": "https://lux.market",
        "edition": "Lux",
        "attributes": [
        {
            "trait_type": "Pounds",
            "value": amt_lbs.toString()
        },
        {
            "trait_type": "Type",
            "value": "43-101 Verified"
        },
        {
            "trait_type": "Location",
            "value": "Madison North, Rössing Formation, Namibia"
        },
        {
            "trait_type": "Issuer",
            "value": "Madison Metals"
        },
        {
            "trait_type": "Auditor",
            "value": "SRK Consulting (UK) Limited"
        },
        {
            "trait_type": "Compound",
            "value": "U₃O₈"
        }
        ],
        "properties": {
        "category": "video",
        "files": [
            {
            "uri": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link",
            "type": "video/mp4"
            },
            {
                "uri": "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/43101.pdf",
                "type": "application/pdf"
            },
            {
                "uri": "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/agreement.pdf",
                "type": "application/pdf"
            },
            {
                "uri": "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/whitepaper.pdf",
                "type": "application/pdf"
            },
            {
                "uri": "https://bafybeihqg7al5dbhk3kuuecxpedmpb5z6x5epnwuqgmb3i7lb6lhi5qx2e.ipfs.nftstorage.link/",
                "type": "inode/directory"
            }
        ],
        "creators": [
            {
            "address": "0x6cB50C54953ac3d8D622BF6B2A9F68B48dF4773A",
            "share": 100
            }
        ]
        },
        "animation_url": "https://bafybeibajrcv6iuleltwr6jnwn3ggzzyc2sonbns3gcjjvy73q2fa6lewe.ipfs.nftstorage.link"
    }

   return (
    JSON.stringify(data)
   );

}

async function mint_nfts(start_id: number, end_id: number, poundage: number, desc: string) {
    for (let i = start_id; i < end_id; i++) {

        let filepath = `${process.cwd()}/scripts/metadata/${i}.json`;

        console.log(filepath);
        await fs.writeFile(filepath,
            meta_data(i, desc, poundage),
            {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            }
        );
    }
}

async function render_pdf(tokenId: number, poundage: number) {
    const SPOT_PRICE:number  = 50.81;

        const inputs = [
        {
            issuanceDate: "November 19, 2022",
            serial_num: `LUX-MM-U3O8-0000-${tokenId}`,
            tokenID: `${tokenId}`,
            auditor: "SRK Limited",
            totalSupply: "7.65 million pounds",
            compound: "Uranium (U3O8)",
            location: "Madison North, Namibia",
            amount: `${poundage} lbs`,
            supplier: "Madison Metals",
            spotPrice: `${SPOT_PRICE}`,
            valueAtSpot: `${SPOT_PRICE * poundage}`,
            qr: `https://cert.lux.market/LUX-MM-U3O8-0000-${tokenId}`
        },
    ];

    const pdf = await generate({ template, inputs });
    let pdfpath = `${process.cwd()}/scripts/render/${tokenId}.pdf`;

    await fs.writeFile(pdfpath,
        pdf,
        {
            encoding: "base64",
            flag: "a+",
            mode: 0o666000
        }
    );
}

async function main() {

    // // ONE POUND x 0 - 999
    await mint_nfts(0, 1000, 1, "Backed by one pound of Uranium (U₃O₈) from the Madison North mine.")

    // // TEN Pounds x 100
    await mint_nfts(1000, 1100, 10, "Backed by ten pounds of Uranium (U₃O₈) from the Madison North mine.")

    // HUNDRED Pounds x 10
    await mint_nfts(1100, 1110, 100, "Backed by one hundred pounds of Uranium (U₃O₈) from the Madison North mine.")

    // TWO THOUSAND Pounds x 1???
    await mint_nfts(1110, 1111, 2000, "Backed by one ton of Uranium (U₃O₈) from the Madison North mine.")

}

main()
.then(() => process.exit(0))
.catch((error)=> {
    console.error(error);
    process.exit(1);
});

// 2,000	    1	        2,000	$70,000	$70,000
// 100	        10	        1,000	$35,000	$3,500
// 10	        100	        1,000	$35,000	$350
// 1        	1,000   	1,000	$35,000	$35

//0x6d7914AF9CA056E16d50a67e0Fe9Ff818272156a
